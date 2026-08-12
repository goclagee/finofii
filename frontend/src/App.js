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
import ComparisonCurrentAccount from "@/pages/ComparisonCurrentAccount";
import IdleCashStartup3mo from "@/pages/IdleCashStartup3mo";
import IdleCashMSME6mo from "@/pages/IdleCashMSME6mo";
import TreasuryVsFD from "@/pages/TreasuryVsFD";
import TreasuryVsSIP from "@/pages/TreasuryVsSIP";
import TreasuryBangalore from "@/pages/TreasuryBangalore";
import WhatIsTreasury from "@/pages/WhatIsTreasury";
import UnderstandingNAV from "@/pages/UnderstandingNAV";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
          <Route path="/idlecashstartup3mo" element={<IdleCashStartup3mo />} />
          <Route path="/idlecashmsme6mo" element={<IdleCashMSME6mo />} />
          <Route path="/treasuryvsfd" element={<TreasuryVsFD />} />
          <Route path="/treasuryvssip" element={<TreasuryVsSIP />} />
          <Route path="/treasurybangalore" element={<TreasuryBangalore />} />
          <Route path="/whatistreasury" element={<WhatIsTreasury />} />
          <Route path="/understandingnav" element={<UnderstandingNAV />} />
          <Route path="/comparisoncurrentaccount" element={<ComparisonCurrentAccount />} />
          <Route path="/navcalculator" element={<NavCalculator />} />
          <Route path="/riskdisclosureguide" element={<RiskDisclosureGuide />} />
          <Route path="/idlecashstartup3mo" element={<IdleCashStartup3mo />} />
          <Route path="/idlecashmsme6mo" element={<IdleCashMSME6mo />} />
          <Route path="/treasuryvsfd" element={<TreasuryVsFD />} />
          <Route path="/treasuryvssip" element={<TreasuryVsSIP />} />
          <Route path="/treasurybangalore" element={<TreasuryBangalore />} />
          <Route path="/whatistreasury" element={<WhatIsTreasury />} />
          <Route path="/understandingnav" element={<UnderstandingNAV />} />
          <Route path="/comparisoncurrentaccount" element={<ComparisonCurrentAccount />} />
          <Route path="/navcalculator" element={<NavCalculator />} />
          <Route path="/riskdisclosureguide" element={<RiskDisclosureGuide />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
