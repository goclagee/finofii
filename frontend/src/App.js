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
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
