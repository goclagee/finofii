from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from enum import Enum


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Enums
class ServiceType(str, Enum):
    TREASURY = "treasury"
    FOUNDERS = "founders"
    MFO = "mfo"


class DealStatus(str, Enum):
    ACTIVE = "active"
    UPCOMING = "upcoming"
    CLOSED = "closed"


# Models
class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactInquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str


class TreasuryCalculation(BaseModel):
    invested_amount: float
    days: int
    annual_return_rate: float = 5.0  # Default 5% annual return


class TreasuryCalculationResult(BaseModel):
    invested_amount: float
    days: int
    annual_return_rate: float
    profit: float
    total_value: float


class TreasuryInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company_name: str
    contact_person: str
    email: EmailStr
    phone: str
    investment_amount: float
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class TreasuryInquiryCreate(BaseModel):
    company_name: str
    contact_person: str
    email: EmailStr
    phone: str
    investment_amount: float
    message: Optional[str] = None


class MutualFund(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    amc: str
    category: str  # Liquid, Debt, Equity
    return_rate: float
    min_investment: float
    risk_level: str  # Low, Medium, High
    description: str


class StartupDeal(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company_name: str
    logo_url: Optional[str] = None
    stage: str  # Seed, Series A, Pre-IPO, etc.
    sector: str
    min_investment: float
    target_raise: float
    current_raise: float
    status: DealStatus
    description: str
    highlights: List[str]
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class FounderApplication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    founder_name: str
    email: EmailStr
    phone: str
    net_worth: float
    investment_amount: float
    investment_interest: List[str]  # Pre-IPO, Startups, Global, etc.
    experience: str
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class FounderApplicationCreate(BaseModel):
    founder_name: str
    email: EmailStr
    phone: str
    net_worth: float
    investment_amount: float
    investment_interest: List[str]
    experience: str
    message: Optional[str] = None


class MFOService(BaseModel):
    id: str
    name: str
    description: str
    icon: str


class MFOInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    family_name: str
    contact_person: str
    email: EmailStr
    phone: str
    net_worth: float
    services_interested: List[str]
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class MFOInquiryCreate(BaseModel):
    family_name: str
    contact_person: str
    email: EmailStr
    phone: str
    net_worth: float
    services_interested: List[str]
    message: Optional[str] = None


class Partner(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    logo_url: str
    type: str  # AMC, VC, Institution
    category: str  # treasury, founders, both


# API Routes

# General Routes
@api_router.get("/")
async def root():
    return {"message": "Welcome to Finofii API"}


@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact_inquiry(input: ContactInquiryCreate):
    inquiry_dict = input.model_dump()
    inquiry_obj = ContactInquiry(**inquiry_dict)
    
    doc = inquiry_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contact_inquiries.insert_one(doc)
    return inquiry_obj


@api_router.get("/partners", response_model=List[Partner])
async def get_partners(type: Optional[str] = None, category: Optional[str] = None):
    query = {}
    if type:
        query['type'] = type
    if category:
        query['category'] = category
    
    partners = await db.partners.find(query, {"_id": 0}).to_list(100)
    return partners


# Treasury Management Routes
@api_router.post("/treasury/calculate", response_model=TreasuryCalculationResult)
async def calculate_treasury_returns(calc: TreasuryCalculation):
    # Calculate returns based on annual rate
    daily_rate = calc.annual_return_rate / 365 / 100
    profit = calc.invested_amount * daily_rate * calc.days
    total_value = calc.invested_amount + profit
    
    return TreasuryCalculationResult(
        invested_amount=calc.invested_amount,
        days=calc.days,
        annual_return_rate=calc.annual_return_rate,
        profit=round(profit, 2),
        total_value=round(total_value, 2)
    )


@api_router.post("/treasury/inquiry", response_model=TreasuryInquiry)
async def create_treasury_inquiry(input: TreasuryInquiryCreate):
    inquiry_dict = input.model_dump()
    inquiry_obj = TreasuryInquiry(**inquiry_dict)
    
    doc = inquiry_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.treasury_inquiries.insert_one(doc)
    return inquiry_obj


@api_router.get("/treasury/funds", response_model=List[MutualFund])
async def get_mutual_funds(category: Optional[str] = None):
    query = {}
    if category:
        query['category'] = category
    
    funds = await db.mutual_funds.find(query, {"_id": 0}).to_list(100)
    return funds


# Founders Wealth Routes
@api_router.get("/founders/deals", response_model=List[StartupDeal])
async def get_startup_deals(status: Optional[DealStatus] = None):
    query = {}
    if status:
        query['status'] = status
    
    deals = await db.startup_deals.find(query, {"_id": 0}).to_list(100)
    
    for deal in deals:
        if isinstance(deal['created_at'], str):
            deal['created_at'] = datetime.fromisoformat(deal['created_at'])
    
    return deals


@api_router.post("/founders/application", response_model=FounderApplication)
async def create_founder_application(input: FounderApplicationCreate):
    application_dict = input.model_dump()
    application_obj = FounderApplication(**application_dict)
    
    doc = application_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.founder_applications.insert_one(doc)
    return application_obj


@api_router.get("/founders/stats")
async def get_founder_stats():
    total_deals = await db.startup_deals.count_documents({})
    
    # Calculate total capital
    pipeline = [
        {"$group": {"_id": None, "total": {"$sum": "$current_raise"}}}
    ]
    result = await db.startup_deals.aggregate(pipeline).to_list(1)
    total_capital = result[0]['total'] if result else 0
    
    return {
        "total_deals": total_deals,
        "total_capital_invested": total_capital,
        "active_deals": await db.startup_deals.count_documents({"status": "active"})
    }


# Multi-Family Office Routes
@api_router.get("/mfo/services", response_model=List[MFOService])
async def get_mfo_services():
    services = [
        {
            "id": "1",
            "name": "Private Wealth Management",
            "description": "Comprehensive wealth management tailored to your family's unique goals",
            "icon": "wallet"
        },
        {
            "id": "2",
            "name": "Estate Planning",
            "description": "Strategic planning for wealth transfer and legacy preservation",
            "icon": "file-text"
        },
        {
            "id": "3",
            "name": "Real Estate Advisory",
            "description": "Expert guidance on real estate investments and portfolio management",
            "icon": "home"
        },
        {
            "id": "4",
            "name": "Investment Banking",
            "description": "Corporate finance and M&A advisory services",
            "icon": "briefcase"
        },
        {
            "id": "5",
            "name": "Tax Planning",
            "description": "Optimize tax efficiency across all your investments",
            "icon": "calculator"
        },
        {
            "id": "6",
            "name": "Lending Solutions",
            "description": "Customized lending and credit facilities",
            "icon": "credit-card"
        },
        {
            "id": "7",
            "name": "Insurance Solutions",
            "description": "Comprehensive insurance planning and risk management",
            "icon": "shield"
        },
        {
            "id": "8",
            "name": "Immigration Services",
            "description": "Global mobility and citizenship planning",
            "icon": "globe"
        },
        {
            "id": "9",
            "name": "Philanthropy Advisory",
            "description": "Strategic philanthropic planning and foundation management",
            "icon": "heart"
        }
    ]
    return services


@api_router.post("/mfo/inquiry", response_model=MFOInquiry)
async def create_mfo_inquiry(input: MFOInquiryCreate):
    inquiry_dict = input.model_dump()
    inquiry_obj = MFOInquiry(**inquiry_dict)
    
    doc = inquiry_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.mfo_inquiries.insert_one(doc)
    return inquiry_obj


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
