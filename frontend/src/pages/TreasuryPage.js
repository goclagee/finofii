import { useState, useEffect } from "react";
import axios from "axios";
import {
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TreasuryPage = () => {
  const [funds, setFunds] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    investment_amount: 10000000,
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetchFunds();
    fetchPartners();
  }, []);

  const fetchFunds = async () => {
    try {
      const response = await axios.get(`${API}/treasury/funds`);
      setFunds(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching funds:", error);
    }
  };

  const fetchPartners = async () => {
    try {
      const response = await axios.get(`${API}/partners?category=treasury`);
      setPartners(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching partners:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to existing backend (skip if no backend URL configured)
      const backendPromise = BACKEND_URL ? axios.post(`${API}/treasury/inquiry`, formData) : Promise.resolve();

      // Send to Investwell CRM via Netlify serverless function
      const investwellPromise = axios.post(
        "/.netlify/functions/create-lead",
        {
          name: formData.contact_person || formData.company_name,
          email: formData.email || "",
          phone: formData.phone || "",
          message: `Treasury Inquiry | Company: ${formData.company_name} | Amount: ₹${formData.investment_amount} | ${formData.message || ""}`.trim(),
        }
      );

      await Promise.allSettled([backendPromise, investwellPromise]);

      setFormSubmitted(true);
      setFormData({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        investment_amount: 10000000,
        message: "",
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-32 md:py-40 overflow-hidden" data-testid="treasury-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
              Monetise Your<br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Current Account
              </span>
            </h1>
            <p className="text-2xl mb-4 max-w-3xl mx-auto font-semibold italic" style={{ color: '#fcd34d' }}>
              "Put Your Idle Cash to Work"
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto" style={{ color: 'rgba(191, 219, 254, 0.7)' }}>
              Deploy idle cash into mutual funds | T+1 Liquidity | ₹2,800 Cr Investments | 1,000+ Businesses Trust Us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://platform.finofii.com/app/#/login"
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-[1.02]"
              >
                Start Earning Today
              </a>
              <div className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/30" style={{ color: '#ffffff' }}>
                Min Investment: ₹1 Crore
              </div>
            </div>
            <p className="text-xs mt-6" style={{ color: 'rgba(191, 219, 254, 0.5)' }}>Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.</p>
          </div>
        </div>
      </section>

      {/* How Treasury Management Works */}
      <section className="py-16 bg-white" data-testid="calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Treasury Management Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, transparent way to deploy your business's idle cash into professionally managed mutual funds.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Horizon</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pick a fund category suited to your timeline — from overnight and liquid funds for the short term to ultra-short and low-duration funds for longer surpluses.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Invest via BSE StAR MF</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your investment is executed directly with SEBI-registered AMCs through the BSE StAR MF platform. Your money never sits with us.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Access with T+1</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Redeem when you need to — liquid and debt funds typically credit your account within one business day.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-8 max-w-3xl mx-auto">
            Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully. There is no assurance or guarantee of returns. Past performance is not indicative of future performance.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Treasury Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Put Idle Cash to Work
              </h3>
              <p className="text-gray-600">
                Deploy surplus current account balances into professionally managed mutual funds instead of leaving them idle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Liquidity
              </h3>
              <p className="text-gray-600">
                Quick redemption available. Get your money back typically within 1-3 business days.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                SEBI Regulated
              </h3>
              <p className="text-gray-600">
                All funds are SEBI registered and managed by top AMCs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Funds — Logo Slider */}
      <section className="py-16 bg-white overflow-hidden" data-testid="funds-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Available Mutual Funds & AMC Partners
          </h2>
          <p className="text-center text-gray-500 mb-12">Partnered with India's leading Asset Management Companies</p>
        </div>
        {/* Infinite scroll slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 items-center shrink-0">
                {[
                  { src: "/amc-logos/sbi-mf.png", name: "SBI MF" },
                  { src: "/amc-logos/icici-mf.jpg", name: "ICICI Prudential" },
                  { src: "/amc-logos/axis-mf.png", name: "Axis MF" },
                  { src: "/amc-logos/nippon-mf.png", name: "Nippon India" },
                  { src: "/amc-logos/aditya-birla-mf.png", name: "Aditya Birla Sun Life" },
                  { src: "/amc-logos/dsp-mf.png", name: "DSP MF" },
                  { src: "/amc-logos/mirae-mf.png", name: "Mirae Asset" },
                  { src: "/amc-logos/tata-mf.png", name: "Tata MF" },
                  { src: "/amc-logos/motilal-mf.jpg", name: "Motilal Oswal" },
                  { src: "/amc-logos/hsbc-mf.png", name: "HSBC MF" },
                  { src: "/amc-logos/sundaram-mf.png", name: "Sundaram MF" },
                  { src: "/amc-logos/edelweiss-mf.png", name: "Edelweiss MF" },
                  { src: "/amc-logos/canara-mf.png", name: "Canara Robeco" },
                  { src: "/amc-logos/baroda-mf.png", name: "Baroda BNP Paribas" },
                  { src: "/amc-logos/lic-mf.png", name: "LIC MF" },
                  { src: "/amc-logos/ppfas-mf.png", name: "PPFAS MF" },
                  { src: "/amc-logos/mahindra-mf.png", name: "Mahindra Manulife" },
                  { src: "/amc-logos/boi-mf.png", name: "Bank of India MF" },
                  { src: "/amc-logos/union-mf.png", name: "Union MF" },
                  { src: "/amc-logos/iti-mf.png", name: "ITI MF" },
                  { src: "/amc-logos/helios-mf.png", name: "Helios MF" },
                  { src: "/amc-logos/quant-mf.png", name: "Quant MF" },
                ].map((fund, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 shadow-md flex items-center justify-center overflow-hidden group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <img src={fund.src} alt={fund.name} className="w-14 h-14 object-contain" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{fund.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Fund cards from API */}
        {funds.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {funds.map((fund) => (
                <div
                  key={fund.id}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  data-testid={`fund-card-${fund.id}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm text-gray-600 font-medium">{fund.amc}</div>
                      <h3 className="text-lg font-bold text-gray-900">{fund.name}</h3>
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{fund.category}</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{fund.description}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">Min Investment</span>
                    <span className="font-semibold">{formatCurrency(fund.min_investment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Risk Level</span>
                    <span className={`text-sm font-semibold ${fund.risk_level === "Low" ? "text-green-600" : fund.risk_level === "Medium" ? "text-yellow-600" : "text-red-600"}`}>{fund.risk_level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white" data-testid="inquiry-form-section">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600">
              Submit your inquiry and our team will contact you
            </p>
          </div>

          {formSubmitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center" data-testid="success-message">
              <CheckCircle2 className="text-green-600 mr-3" />
              <span className="text-green-800">
                Thank you! We'll contact you shortly.
              </span>
            </div>
          )}

          <form
            onSubmit={handleFormSubmit}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
            data-testid="treasury-inquiry-form"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company_name}
                  onChange={(e) =>
                    setFormData({ ...formData, company_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  data-testid="company-name-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact_person}
                  onChange={(e) =>
                    setFormData({ ...formData, contact_person: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  data-testid="contact-person-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  data-testid="email-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  data-testid="phone-input"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Investment Amount (₹) *
              </label>
              <input
                type="number"
                required
                value={formData.investment_amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    investment_amount: Number(e.target.value),
                  })
                }
                min="10000000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                data-testid="investment-amount-input"
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                data-testid="message-input"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              data-testid="submit-inquiry-btn"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TreasuryPage;
