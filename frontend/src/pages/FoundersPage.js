import { useState } from "react";
import axios from "axios";
import {
  TrendingUp,
  Award,
  CheckCircle2,
  DollarSign,
  BarChart3,
  Users,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const FoundersPage = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    founder_name: "",
    email: "",
    phone: "",
    company_name: "",
    net_worth: 5000000,
    investment_amount: 5000000,
    investment_interest: [],
    experience: "",
    message: "",
  });

  const investmentOptions = [
    "Equity Mutual Funds",
    "Portfolio Management Services (PMS)",
    "Equity AIF",
    "Unlisted Equity",
  ];

  // Investment Products from PDF
  const investmentProducts = [
    {
      id: 1,
      title: "Equity Mutual Funds",
      description: "Investment in equity instruments managed by leading mutual fund houses",
      examples: "HDFC, Axis, ICICI, SBI",
      returns: "11.00% - 15.00%",
      minInvestment: "₹100",
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      features: [
        "Professional fund management",
        "Diversified equity portfolio",
        "High liquidity",
        "SEBI regulated",
      ],
    },
    {
      id: 2,
      title: "Portfolio Management Services (PMS)",
      description: "Discretionary portfolio management services for high-net-worth individuals",
      examples: "Abakkus, Buoyant, White Oak",
      returns: "14.00% - 15.00%",
      minInvestment: "₹50 Lakhs",
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      features: [
        "Personalized investment strategy",
        "Direct equity ownership",
        "Dedicated fund manager",
        "Customized portfolio",
      ],
    },
    {
      id: 3,
      title: "Equity AIF (Alternative Investment Fund)",
      description: "Alternative investment funds focused on equity with potential for higher returns",
      examples: "ASK Golden Decade Fund, Quest Smart Alpha",
      returns: "14.00% - 16.00%",
      minInvestment: "₹1 Crore",
      icon: <Award className="w-12 h-12 text-purple-600" />,
      features: [
        "Access to exclusive strategies",
        "Institutional-grade investments",
        "Tax-efficient structure",
        "Professional management",
      ],
    },
    {
      id: 4,
      title: "Unlisted Equity",
      description: "Investments in pre-IPO and high-growth unlisted companies",
      examples: "NSE, Care Health Insurance, Bira 91",
      returns: "15.00% - 20.00%",
      minInvestment: "₹1 Crore",
      icon: <DollarSign className="w-12 h-12 text-purple-600" />,
      features: [
        "Pre-IPO opportunities",
        "High growth potential",
        "Early-stage access",
        "Portfolio diversification",
      ],
    },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to existing backend (skip if no backend URL configured)
      const backendPromise = BACKEND_URL ? axios.post(`${API}/founders/application`, formData) : Promise.resolve();

      // Send to Investwell CRM via Netlify serverless function
      const investwellPromise = axios.post(
        "/.netlify/functions/create-lead",
        {
          name: formData.founder_name,
          email: formData.email || "",
          phone: formData.phone || "",
          message: `Founders Wealth | Company: ${formData.company_name} | Interest: ${(formData.investment_interest || []).join(", ")} | ${formData.message || ""}`.trim(),
        }
      );

      await Promise.allSettled([backendPromise, investwellPromise]);

      setFormSubmitted(true);
      setFormData({
        founder_name: "",
        email: "",
        phone: "",
        company_name: "",
        net_worth: 5000000,
        investment_amount: 5000000,
        investment_interest: [],
        experience: "",
        message: "",
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleInterest = (option) => {
    const interests = [...formData.investment_interest];
    const index = interests.indexOf(option);
    if (index > -1) {
      interests.splice(index, 1);
    } else {
      interests.push(option);
    }
    setFormData({ ...formData, investment_interest: interests });
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
      <section
        className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-32 md:py-40 overflow-hidden"
        data-testid="founders-hero"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold rounded-full uppercase tracking-wider mb-6" style={{ color: '#bfdbfe' }}>
              Invitation-Only Investment Platform
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
              Founders <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Wealth</span>
            </h1>
            <p className="text-lg md:text-xl mb-5 max-w-4xl mx-auto font-light tracking-wide" style={{ color: 'rgba(191, 219, 254, 0.8)' }}>
              Access to Curated Equity Investment Opportunities Reserved for Select Investors
            </p>
            <p className="text-2xl mb-10 max-w-3xl mx-auto font-semibold italic" style={{ color: '#fcd34d' }}>
              Starts from ₹1 Crore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://platform.finofii.com/app/#/login"
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-[1.02]"
              >
                Start Investing
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); if (window.Calendly) window.Calendly.initPopupWidget({url: 'https://calendly.com/ms--165'}); }}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all" style={{ color: '#ffffff' }}
              >
                Book a Call
              </a>
            </div>
            <p className="mt-6 text-sm max-w-2xl mx-auto" style={{ color: 'rgba(191, 219, 254, 0.5)' }}>
              Join an exclusive circle of sophisticated investors with dedicated portfolio managers
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-5xl font-bold text-purple-600 mb-2">₹2,800 Cr</div>
              <div className="text-xl text-gray-700">Total Investments Managed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-5xl font-bold text-purple-600 mb-2">11-20%</div>
              <div className="text-xl text-gray-700">Expected Returns Range</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-5xl font-bold text-purple-600 mb-2">1:1</div>
              <div className="text-xl text-gray-700">Dedicated Manager Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-20 bg-gray-50" data-testid="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm">
              EXCLUSIVE ACCESS • LIMITED AVAILABILITY
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elite Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully curated investment vehicles available only to qualified investors with dedicated portfolio management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                data-testid={`product-card-${product.id}`}
              >
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-700 font-semibold mb-1">Featured Managers:</div>
                  <div className="text-purple-700 font-medium">{product.examples}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Expected Returns</div>
                    <div className="text-lg font-bold text-green-600">{product.returns}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Min. Investment</div>
                    <div className="text-lg font-bold text-gray-900">{product.minInvestment}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2
                        size={18}
                        className="text-green-600 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Elite Investors Choose Finofii
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dedicated Portfolio Managers
              </h3>
              <p className="text-gray-600">
                Personal relationship manager for exclusive portfolio management and strategic wealth planning
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Invitation-Only Access
              </h3>
              <p className="text-gray-600">
                Join a selective network of sophisticated investors with access to institutional-grade opportunities
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Curated Investment Selection
              </h3>
              <p className="text-gray-600">
                Rigorously vetted opportunities from India's most respected fund managers and platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PMS Lead Capture Form */}
      <section
        className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
        data-testid="pms-form-section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider">
              🔒 BY INVITATION ONLY
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply for Exclusive Access
            </h2>
            <p className="text-xl text-gray-600">
              Limited seats available for qualified investors seeking dedicated portfolio management
            </p>
          </div>

          {formSubmitted && (
            <div
              className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
              data-testid="success-message"
            >
              <CheckCircle2 className="text-green-600 mr-3" />
              <span className="text-green-800">
                Thank you! Our wealth management team will contact you within 24 hours.
              </span>
            </div>
          )}

          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl"
            data-testid="pms-application-form"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.founder_name}
                  onChange={(e) =>
                    setFormData({ ...formData, founder_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  data-testid="founder-name-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company_name}
                  onChange={(e) =>
                    setFormData({ ...formData, company_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  data-testid="company-name-input"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  data-testid="phone-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Net Worth (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.net_worth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      net_worth: Number(e.target.value),
                    })
                  }
                  min="5000000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  data-testid="net-worth-input"
                />
              </div>
              <div>
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
                  min="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  data-testid="investment-amount-input"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-3">
                Investment Interests *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {investmentOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.investment_interest.includes(option)}
                      onChange={() => toggleInterest(option)}
                      className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Investment Experience *
              </label>
              <select
                required
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                data-testid="experience-select"
              >
                <option value="">Select your experience</option>
                <option value="First-time investor">First-time investor</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
                <option value="Experienced investor">Experienced investor</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Tell us about your investment goals and preferences..."
                data-testid="message-input"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              data-testid="submit-application-btn"
            >
              {loading ? "Submitting..." : "Apply for Access"}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the minimum investment amount?
              </h3>
              <p className="text-gray-600">
                It varies by product: Equity Mutual Funds start from ₹100, PMS from ₹50 Lakhs, and AIF/Unlisted Equity from ₹1 Crore.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are these investments SEBI regulated?
              </h3>
              <p className="text-gray-600">
                Yes, all our investment products are managed by SEBI-registered entities and comply with regulatory requirements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the lock-in period?
              </h3>
              <p className="text-gray-600">
                Mutual Funds have no lock-in (except ELSS), PMS typically 1-3 years, and AIFs usually 3-5 years depending on the fund structure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
