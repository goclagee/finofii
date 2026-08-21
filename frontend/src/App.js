import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "@/App.css";
import HomePage from "@/pages/HomePage";
import TreasuryPage from "@/pages/TreasuryPage";
import FoundersPage from "@/pages/FoundersPage";
import FamilyOfficePage from "@/pages/FamilyOfficePage";
import AboutPage from "@/pages/AboutPage";
import CapitalPage from "@/pages/CapitalPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import Disclaimer from "@/pages/Disclaimer";
import RiskDisclosure from "@/pages/RiskDisclosure";
import RiskDisclosureGuide from "@/pages/RiskDisclosureGuide";
import NavCalculator from "@/pages/NavCalculator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TreasuryVsFD from "@/pages/TreasuryVsFD";
import TreasuryVsSIP from "@/pages/TreasuryVsSIP";
import TreasuryVsCurrentAccount from "@/pages/TreasuryVsCurrentAccount";
import WhatIsTreasury from "@/pages/WhatIsTreasury";
import UnderstandingNAV from "@/pages/UnderstandingNAV";
import UnderstandingLiquidFunds from "@/pages/UnderstandingLiquidFunds";
import ComparisonCurrentAccount from "@/pages/ComparisonCurrentAccount";
import TermsAndConditions from "@/pages/TermsAndConditions";
import IdleCashStartups from "@/pages/IdleCashStartups";
import IdleCashMSMEs from "@/pages/IdleCashMSMEs";
import TreasuryCorporates from "@/pages/TreasuryCorporates";
import WealthFamilyOffices from "@/pages/WealthFamilyOffices";
import TreasuryDelhi from "@/pages/TreasuryDelhi";
import TreasuryBangalore from "@/pages/TreasuryBangalore";
import TreasuryMumbai from "@/pages/TreasuryMumbai";
import TreasuryPune from "@/pages/TreasuryPune";
import TreasuryHyderabad from "@/pages/TreasuryHyderabad";
import EmergencyFundPlanning from "@/pages/EmergencyFundPlanning";
import QuarterlyPlanning from "@/pages/QuarterlyPlanning";
import TaxOptimization from "@/pages/TaxOptimization";
import LiquidityPlanning from "@/pages/LiquidityPlanning";

// ✅ NEW: All comparison pages from ComparisonPages.js (ICICI-grade design)
import {
  TreasuryVsFD,
  TreasuryVsSIP,
  TreasuryVsSavings,
  TreasuryVsDebt,
  TreasuryVsEquity,
  TreasuryVsRealEstate,
  LiquidFundsVsFD,
  MFDDifference,
} from "@/pages/ComparisonPages";

// Education Pages
import {
  WhatIsTreasury,
  LiquidFunds101,
  CurrentAccountExplained,
  NavExplained,
  ExpenseRatio,
  ExitLoadExplained,
  CutoffTimeExplained,
} from "@/pages/EducationPages";

// Segment Pages
import {
  IdleCashStartups,
  IdleCashMSME,
  CorporateTreasury,
  WealthFamilyOffice,
  NRIDollarParking,
} from "@/pages/SegmentPages";

// City Pages
import {
  TreasuryDelhi,
  TreasuryNoida,
  TreasuryMumbai,
  TreasuryPune,
  TreasuryBangalore,
  TreasuryHyderabad,
  TreasuryGurgaon,
} from "@/pages/CityPages";

// Use-case Pages
import {
  EmergencyFund,
  QuarterlyPlanning,
  TaxOptimization,
  LiquidityPlanning,
  FreelancerBusiness,
  ProjectBasedBusiness,
} from "@/pages/UseCasePages";

// New Pages (added today)
import {
  TreasuryVsInsurance,
  CollegeFundPlanning,
  RetirementPlanning,
  InternationalTreasury,
} from "@/pages/NewPages";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/treasury" element={<TreasuryPage />} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/family-office" element={<FamilyOfficePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/capital" element={<CapitalPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="/risk-disclosure-guide" element={<RiskDisclosureGuide />} />
          <Route path="/nav-calculator" element={<NavCalculator />} />

          {/* Comparison Routes */}
          <Route path="/treasuryvsfd" element={<TreasuryVsFD />} />
          <Route path="/treasuryvssip" element={<TreasuryVsSIP />} />
          <Route path="/treasuryvssavings" element={<TreasuryVsSavings />} />
          <Route path="/treasuryvsdebt" element={<TreasuryVsDebt />} />
          <Route path="/treasuryvsequity" element={<TreasuryVsEquity />} />
          <Route path="/treasuryvsrealstate" element={<TreasuryVsRealEstate />} />
          <Route path="/liquidfundsvsfd" element={<LiquidFundsVsFD />} />
          <Route path="/mfddifference" element={<MFDDifference />} />

          {/* Education Routes */}
          <Route path="/whatstreasury" element={<WhatIsTreasury />} />
          <Route path="/liquidfunds101" element={<LiquidFunds101 />} />
          <Route path="/currentaccount" element={<CurrentAccountExplained />} />
          <Route path="/nav" element={<NavExplained />} />
          <Route path="/expenseratio" element={<ExpenseRatio />} />
          <Route path="/exitload" element={<ExitLoadExplained />} />
          <Route path="/cutofftime" element={<CutoffTimeExplained />} />

          {/* Segment Routes */}
          <Route path="/idlecashstartups" element={<IdleCashStartups />} />
          <Route path="/idlecashmsme" element={<IdleCashMSME />} />
          <Route path="/corporatetreasury" element={<CorporateTreasury />} />
          <Route path="/wealthfamilyoffice" element={<WealthFamilyOffice />} />
          <Route path="/nridollarparking" element={<NRIDollarParking />} />

          {/* City Routes */}
          <Route path="/treasurydelhi" element={<TreasuryDelhi />} />
          <Route path="/treasurynoida" element={<TreasuryNoida />} />
          <Route path="/treasurymumbai" element={<TreasuryMumbai />} />
          <Route path="/treasurypune" element={<TreasuryPune />} />
          <Route path="/treasurybangalore" element={<TreasuryBangalore />} />
          <Route path="/treasuryhyderabad" element={<TreasuryHyderabad />} />
          <Route path="/treasurygurgaon" element={<TreasuryGurgaon />} />

          {/* Use-case Routes */}
          <Route path="/emergencyfund" element={<EmergencyFund />} />
          <Route path="/quarterlyplanning" element={<QuarterlyPlanning />} />
          <Route path="/taxoptimization" element={<TaxOptimization />} />
          <Route path="/liquidityplanning" element={<LiquidityPlanning />} />
          <Route path="/freelancerbusiness" element={<FreelancerBusiness />} />
          <Route path="/projectbased" element={<ProjectBasedBusiness />} />

          {/* New Pages (Today) */}
          <Route path="/treasuryvsinsurance" element={<TreasuryVsInsurance />} />
          <Route path="/collegefund" element={<CollegeFundPlanning />} />
          <Route path="/retirementplanning" element={<RetirementPlanning />} />
          <Route path="/internationaltreasury" element={<InternationalTreasury />} />

                  <Route path="/treasuryvsca" element={<TreasuryVsCurrentAccount />} />
                  <Route path="/understandingnav" element={<UnderstandingNAV />} />
                  <Route path="/understandingliquidfunds" element={<UnderstandingLiquidFunds />} />
                  <Route path="/comparisoncurrentaccount" element={<ComparisonCurrentAccount />} />
                  <Route path="/navcalculator" element={<NavCalculator />} />
                  <Route path="/riskdisclosureguide" element={<RiskDisclosureGuide />} />
                  <Route path="/termsandconditions" element={<TermsAndConditions />} />
                  <Route path="/idlecashmsmes" element={<IdleCashMSMEs />} />
                  <Route path="/treasurycorporates" element={<TreasuryCorporates />} />
                  <Route path="/wealthfamilyoffices" element={<WealthFamilyOffices />} />
                  <Route path="/emergencyfundplanning" element={<EmergencyFundPlanning />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
/* Build trigger: 1787217657 */
