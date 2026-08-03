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
  const [investedAmount, setInvestedAmount] = useState(10000000);
  const [days, setDays] = useState(7);
  const [calculation, setCalculation] = useState(null);
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

  useEffect(() => {
    const result = calculateReturns();
    setCalculation(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [investedAmount, days]);

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

  const calculateReturns = () => {
    // Dynamic YTM based on investment period (in days)
    let ytm = 0;
    
    if (days <= 7) {
      // Overnight/Liquid funds (1-7 days)
      ytm = 0.052; // 5.2%
    } else if (days <= 30) {
      // Liquid funds (8-30 days)
      ytm = 0.055; // 5.5%
    } else if (days <= 90) {
      // Ultra Short Duration (31-90 days)
      ytm = 0.062; // 6.2%
    } else if (days <= 180) {
      // Short Duration (91-180 days)
      ytm = 0.070; // 7.0%
    } else {
      // Low Duration (180+ days)
      ytm = 0.072; // 7.2%
    }
    
    const profit = (investedAmount * ytm * days) / 365;
    const totalValue = investedAmount + profit;
    
    return {
      invested_amount: investedAmount,
      days: days,
      ytm: ytm,
      profit: profit,
      total_value: totalValue
    };
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to existing backend
      const backendPromise = axios.post(`${API}/treasury/inquiry`, formData);

      // Send to Investwell CRM
      const investwellPromise = axios.post(
        "https://finofii.investwell.app/api/aggregator/utils/createOutsideLead",
        {
          authName: "finofii141",
          apiKey: "278323c7c100794e2895a011f6e2d10c0f49a85c9d8d2e1b3656e24e48175392",
          name: formData.contact_person || formData.company_name,
          email: formData.email || "",
          phone: formData.phone || "",
          message: `Treasury Inquiry | Company: ${formData.company_name} | Amount: ₹${formData.investment_amount} | ${formData.message || ""}`.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20" data-testid="treasury-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Monetise Your<br />Current Account
            </h1>
            <p className="text-3xl md:text-4xl text-amber-300 mb-6 font-semibold italic">
              "Higher Interest is in Your Best Interest"
            </p>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 font-light">
              Work and optimize treasury like bigger corporates do for operational excellence
            </p>
            <div className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl shadow-xl">
              Minimum Investment: ₹1 Crore
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section className="py-16 bg-white" data-testid="calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Returns Calculator
            </h2>
            <p className="text-xl text-gray-600">
              See how much your idle cash can earn
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Invested Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={investedAmount}
                    onChange={(e) => setInvestedAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    min="10000000"
                    step="1000000"
                    data-testid="amount-input"
                  />
                  <input
                    type="range"
                    value={investedAmount}
                    onChange={(e) => setInvestedAmount(Number(e.target.value))}
                    min="10000000"
                    max="1000000000"
                    step="10000000"
                    className="w-full mt-2"
                    data-testid="amount-slider"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Investment Period (Days)
                  </label>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    min="1"
                    max="365"
                    data-testid="days-input"
                  />
                  <input
                    type="range"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    min="1"
                    max="365"
                    className="w-full mt-2"
                    data-testid="days-slider"
                  />
                </div>

                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">
                    Current YTM (Yield to Maturity)
                  </div>
                  <div className="text-2xl font-bold text-blue-900">
                    {calculation ? (calculation.ytm * 100).toFixed(2) : '5.20'}%
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    {days <= 7 && "Overnight/Liquid Fund"}
                    {days > 7 && days <= 30 && "Liquid Fund"}
                    {days > 30 && days <= 90 && "Ultra Short Duration"}
                    {days > 90 && days <= 180 && "Short Duration"}
                    {days > 180 && "Low Duration"}
                  </div>
                </div>
              </div>

              {/* Calculator Results */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Expected Returns
                </h3>
                {calculation && (
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Invested Amount
                      </div>
                      <div className="text-2xl font-bold text-gray-900" data-testid="invested-amount-display">
                        {formatCurrency(calculation.invested_amount)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Profit</div>
                      <div className="text-3xl font-bold text-green-600" data-testid="profit-display">
                        {formatCurrency(calculation.profit)}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-sm text-gray-600 mb-1">
                        Total Value
                      </div>
                      <div className="text-4xl font-bold text-blue-600" data-testid="total-value-display">
                        {formatCurrency(calculation.total_value)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
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
                Better Returns
              </h3>
              <p className="text-gray-600">
                Average 5%+ annual returns on liquid funds vs 0% in bank accounts
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Liquidity
              </h3>
              <p className="text-gray-600">
                Instant redemption available. Get your money back in 1-3 days
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

      {/* Available Funds */}
      <section className="py-16 bg-white" data-testid="funds-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Available Mutual Funds
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {funds.map((fund) => (
              <div
                key={fund.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                data-testid={`fund-card-${fund.id}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      {fund.amc}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {fund.name}
                    </h3>
                  </div>
                  <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {fund.category}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{fund.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Return Rate</span>
                  <span className="text-green-600 font-bold">
                    {fund.return_rate}%
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Min Investment</span>
                  <span className="font-semibold">
                    {formatCurrency(fund.min_investment)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Risk Level</span>
                  <span
                    className={`text-sm font-semibold ${
                      fund.risk_level === "Low"
                        ? "text-green-600"
                        : fund.risk_level === "Medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {fund.risk_level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50" data-testid="partners-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our AMC Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo_url}
                  alt={partner.name}
                  className="max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
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
