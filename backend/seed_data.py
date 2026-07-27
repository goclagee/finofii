import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


async def seed_database():
    print("Seeding database...")
    
    # Clear existing data
    await db.mutual_funds.delete_many({})
    await db.startup_deals.delete_many({})
    await db.partners.delete_many({})
    
    # Seed Mutual Funds
    mutual_funds = [
        {
            "id": "mf1",
            "name": "HDFC Liquid Fund",
            "amc": "HDFC",
            "category": "Liquid",
            "return_rate": 5.2,
            "min_investment": 10000000,
            "risk_level": "Low",
            "description": "Ideal for parking surplus funds for short periods with high liquidity"
        },
        {
            "id": "mf2",
            "name": "ICICI Overnight Fund",
            "amc": "ICICI",
            "category": "Liquid",
            "return_rate": 4.8,
            "min_investment": 10000000,
            "risk_level": "Low",
            "description": "Perfect for weekend and overnight parking of business cash"
        },
        {
            "id": "mf3",
            "name": "SBI Ultra Short Duration Fund",
            "amc": "SBI",
            "category": "Debt",
            "return_rate": 6.5,
            "min_investment": 10000000,
            "risk_level": "Low",
            "description": "Short-term debt fund for 1-3 month parking with better returns"
        },
        {
            "id": "mf4",
            "name": "Axis Treasury Advantage Fund",
            "amc": "Axis",
            "category": "Debt",
            "return_rate": 7.2,
            "min_investment": 10000000,
            "risk_level": "Medium",
            "description": "Medium-term debt fund for 3-6 month parking"
        },
        {
            "id": "mf5",
            "name": "Kotak Corporate Bond Fund",
            "amc": "Kotak",
            "category": "Debt",
            "return_rate": 8.0,
            "min_investment": 10000000,
            "risk_level": "Medium",
            "description": "Corporate bond fund for 6-12 month investment horizon"
        },
        {
            "id": "mf6",
            "name": "Aditya Birla Money Manager Fund",
            "amc": "Aditya Birla",
            "category": "Liquid",
            "return_rate": 5.0,
            "min_investment": 10000000,
            "risk_level": "Low",
            "description": "Flexible liquid fund for business treasury management"
        }
    ]
    
    await db.mutual_funds.insert_many(mutual_funds)
    print(f"Inserted {len(mutual_funds)} mutual funds")
    
    # Seed Startup Deals
    startup_deals = [
        {
            "id": "deal1",
            "company_name": "TechVenture AI",
            "logo_url": "https://via.placeholder.com/100",
            "stage": "Series A",
            "sector": "Artificial Intelligence",
            "min_investment": 10000000,
            "target_raise": 500000000,
            "current_raise": 350000000,
            "status": "active",
            "description": "Leading AI platform for enterprise automation",
            "highlights": ["Backed by top-tier VCs", "3x revenue growth YoY", "Enterprise customers include Fortune 500"],
            "created_at": "2025-08-01T00:00:00Z"
        },
        {
            "id": "deal2",
            "company_name": "FinNext",
            "logo_url": "https://via.placeholder.com/100",
            "stage": "Pre-IPO",
            "sector": "Fintech",
            "min_investment": 25000000,
            "target_raise": 2000000000,
            "current_raise": 1800000000,
            "status": "active",
            "description": "Digital banking platform disrupting traditional finance",
            "highlights": ["IPO planned for Q4 2025", "10M+ active users", "Profitable for 2 years"],
            "created_at": "2025-07-15T00:00:00Z"
        },
        {
            "id": "deal3",
            "company_name": "HealthTech Solutions",
            "logo_url": "https://via.placeholder.com/100",
            "stage": "Series B",
            "sector": "Healthcare",
            "min_investment": 15000000,
            "target_raise": 800000000,
            "current_raise": 600000000,
            "status": "active",
            "description": "AI-powered diagnostic and telemedicine platform",
            "highlights": ["Partnership with major hospitals", "FDA approved", "Growing 200% annually"],
            "created_at": "2025-07-20T00:00:00Z"
        },
        {
            "id": "deal4",
            "company_name": "GreenEnergy Co",
            "logo_url": "https://via.placeholder.com/100",
            "stage": "Series C",
            "sector": "Clean Energy",
            "min_investment": 20000000,
            "target_raise": 1500000000,
            "current_raise": 1200000000,
            "status": "upcoming",
            "description": "Renewable energy solutions for industrial sector",
            "highlights": ["Government contracts secured", "Carbon credit revenues", "Expanding to 5 countries"],
            "created_at": "2025-08-10T00:00:00Z"
        },
        {
            "id": "deal5",
            "company_name": "EduTech Global",
            "logo_url": "https://via.placeholder.com/100",
            "stage": "Pre-IPO",
            "sector": "Education Technology",
            "min_investment": 30000000,
            "target_raise": 3000000000,
            "current_raise": 2500000000,
            "status": "upcoming",
            "description": "Leading online education platform with global reach",
            "highlights": ["50M+ students", "Operating in 25 countries", "IPO in 6 months"],
            "created_at": "2025-08-05T00:00:00Z"
        }
    ]
    
    await db.startup_deals.insert_many(startup_deals)
    print(f"Inserted {len(startup_deals)} startup deals")
    
    # Seed Partners
    partners = [
        {"id": "p1", "name": "HDFC AMC", "logo_url": "https://via.placeholder.com/150x60?text=HDFC", "type": "AMC", "category": "treasury"},
        {"id": "p2", "name": "ICICI Prudential", "logo_url": "https://via.placeholder.com/150x60?text=ICICI", "type": "AMC", "category": "treasury"},
        {"id": "p3", "name": "SBI Mutual Fund", "logo_url": "https://via.placeholder.com/150x60?text=SBI", "type": "AMC", "category": "treasury"},
        {"id": "p4", "name": "Axis AMC", "logo_url": "https://via.placeholder.com/150x60?text=AXIS", "type": "AMC", "category": "treasury"},
        {"id": "p5", "name": "Kotak Mahindra", "logo_url": "https://via.placeholder.com/150x60?text=KOTAK", "type": "AMC", "category": "treasury"},
        {"id": "p6", "name": "Aditya Birla", "logo_url": "https://via.placeholder.com/150x60?text=BIRLA", "type": "AMC", "category": "treasury"},
        {"id": "p7", "name": "UTI AMC", "logo_url": "https://via.placeholder.com/150x60?text=UTI", "type": "AMC", "category": "treasury"},
        {"id": "p8", "name": "Nippon India", "logo_url": "https://via.placeholder.com/150x60?text=NIPPON", "type": "AMC", "category": "treasury"},
        {"id": "p9", "name": "Sequoia Capital", "logo_url": "https://via.placeholder.com/150x60?text=SEQUOIA", "type": "VC", "category": "founders"},
        {"id": "p10", "name": "Accel Partners", "logo_url": "https://via.placeholder.com/150x60?text=ACCEL", "type": "VC", "category": "founders"},
        {"id": "p11", "name": "Tiger Global", "logo_url": "https://via.placeholder.com/150x60?text=TIGER", "type": "VC", "category": "founders"},
        {"id": "p12", "name": "SoftBank", "logo_url": "https://via.placeholder.com/150x60?text=SOFTBANK", "type": "VC", "category": "founders"},
        {"id": "p13", "name": "Lightspeed", "logo_url": "https://via.placeholder.com/150x60?text=LIGHTSPEED", "type": "VC", "category": "founders"},
        {"id": "p14", "name": "Matrix Partners", "logo_url": "https://via.placeholder.com/150x60?text=MATRIX", "type": "VC", "category": "founders"},
    ]
    
    await db.partners.insert_many(partners)
    print(f"Inserted {len(partners)} partners")
    
    print("Database seeding completed!")


if __name__ == "__main__":
    asyncio.run(seed_database())
