import { useState } from "react";
import axios from "axios";
import {
  Building2,
  Briefcase,
  FileText,
  Calculator,
  Handshake,
  Home,
  Heart,
  BookOpen,
  CheckCircle2,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const FamilyOfficePage = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    family_name: "",
    contact_person: "",
    email: "",
    phone: "",
    net_worth: 250000000,
    services_interested: [],
    message: "",
  });

  // Exact 8 services from PDF
  const services = [
    {
      id: "1",
      name: "Tax Efficiency",
      description:
        "Stay on top of latest tax changes and opportunities to enhance and preserve wealth. Ensure compliance, optimize tax burden, and handle international tax complexities.",
      icon: <Calculator className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Tax compliance and optimization",
        "Wealth transition planning",
        "International tax advisory",
        "Worldwide tax compliance",
      ],
    },
    {
      id: "2",
      name: "Wealth Strategy",
      description:
        "Independent and objective wealth analysis with dedicated professionals and monitoring tools for investment performance based on fee-for-service.",
      icon: <TrendingUp className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Independent wealth analysis",
        "Buy-side strategy and implications",
        "Risk overview and asset protection",
        "Cash flow budgeting and projections",
      ],
    },
    {
      id: "3",
      name: "Wealth Reporting",
      description:
        "Accurate consolidated view of entire family fortune for strategic planning with real-time portfolio valuation and performance analysis.",
      icon: <FileText className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Asset consolidation and bird's eye view",
        "Real-time portfolio valuation",
        "Performance analysis by asset class",
        "Management costs and risk assessment",
      ],
    },
    {
      id: "4",
      name: "Family Governance",
      description:
        "Foster trusting dialogue and guide intergenerational unity. Help families transfer wealth and plan continuation of family business.",
      icon: <Users className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Family continuity and succession",
        "Generational wealth planning",
        "Family business governance",
        "Trust planning and dispute resolution",
      ],
    },
    {
      id: "5",
      name: "Deal Advisory Support",
      description:
        "Complex analysis and negotiation support for M&A transactions with market analysis, valuations, and due diligence expertise.",
      icon: <Handshake className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Market analysis and M&A strategy",
        "Multiple valuations and fairness opinions",
        "Financial and accounting due diligence",
        "Debt and financing strategy",
      ],
    },
    {
      id: "6",
      name: "Life Administration",
      description:
        "Eliminate day-to-day frustrations with outsourced financial assistant managing details so you focus on experiencing life.",
      icon: <Home className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Calendar management for family",
        "Payroll for household staff",
        "Recreational assets tracking",
        "Real estate administration",
      ],
    },
    {
      id: "7",
      name: "Philanthropic Initiatives",
      description:
        "Craft strategy, structure, and process to ensure your philanthropic assets have the desired impact, leaving a legacy for generations.",
      icon: <Heart className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Establishing family foundation",
        "Foundation strategy and structuring",
        "Donation impact monitoring",
        "Legacy planning and altruism",
      ],
    },
    {
      id: "8",
      name: "Accounting",
      description:
        "Comprehensive accounting support managing cash flow and document storage with transparent tracking and reliable reporting.",
      icon: <BookOpen className="w-12 h-12 text-amber-600" />,
      keyPoints: [
        "Transparent expense and revenue tracking",
        "Reliable bill payment timing",
        "Comprehensive reporting dashboard",
        "Secure document portal",
      ],
    },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to existing backend (skip if no backend URL configured)
      const backendPromise = BACKEND_URL ? axios.post(`${API}/mfo/inquiry`, formData) : Promise.resolve();

      // Send to Investwell CRM via Netlify serverless function
      const investwellPromise = axios.post(
        "/.netlify/functions/create-lead",
        {
          name: formData.contact_person || formData.family_name,
          email: formData.email || "",
          phone: formData.phone || "",
          message: `Family Office Inquiry | Family: ${formData.family_name} | Services: ${(formData.services_interested || []).join(", ")} | ${formData.message || ""}`.trim(),
        }
      );

      await Promise.allSettled([backendPromise, investwellPromise]);

      setFormSubmitted(true);
      setFormData({
        family_name: "",
        contact_person: "",
        email: "",
        phone: "",
        net_worth: 250000000,
        services_interested: [],
        message: "",
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleService = (serviceName) => {
    const servicesList = [...formData.services_interested];
    const index = servicesList.indexOf(serviceName);
    if (index > -1) {
      servicesList.splice(index, 1);
    } else {
      servicesList.push(serviceName);
    }
    setFormData({ ...formData, services_interested: servicesList });
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
        className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20"
        data-testid="mfo-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Multi-Family Office
            </h1>
            <p className="text-2xl md:text-3xl text-amber-100 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              Helping you and your family define and achieve your evolving objectives.
            </p>
            <div className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl">
              Minimum Net Worth: ₹25 Crores
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white" data-testid="overview-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Your Family CFO
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Our Multi-Family Office platform works as your Family CFO, helping
            you consolidate your family's private wealth under a single window
            professional management umbrella. We provide family-centric holistic
            and non-conflicted advice, ongoing risk management, consolidated
            reporting, and administration of assets.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-amber-600 mb-3">₹2,800 Cr</div>
              <div className="text-gray-700 font-medium text-lg">Total Investment via Platform</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-amber-600 mb-3">1,000+</div>
              <div className="text-gray-700 font-medium text-lg">Families Served</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-amber-600 mb-3">8</div>
              <div className="text-gray-700 font-medium text-lg">Core Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Lifestyle Imagery */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Preserving & Growing Generational Wealth</h2>
            <p className="text-xl text-gray-300">Your legacy deserves exceptional stewardship</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1772354982639-5fdffe032394?w=600&h=400&fit=crop" 
                alt="Private Aviation" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold">Private Aviation</h3>
                  <p className="text-sm text-gray-300">Global mobility solutions</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1708689882017-e858fdbfacab?w=600&h=400&fit=crop" 
                alt="Luxury Automotive" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold">Luxury Collections</h3>
                  <p className="text-sm text-gray-300">Asset protection & insurance</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1678122878191-79b60410779f?w=600&h=400&fit=crop" 
                alt="Luxury Yachts" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold">Lifestyle Assets</h3>
                  <p className="text-sm text-gray-300">Comprehensive administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-amber-50"
        data-testid="services-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end wealth management solutions designed for ultra-high-net-worth families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                data-testid={`service-card-${service.id}`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2
                        size={16}
                        className="text-amber-600 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-xs text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Family Office
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Independent & Unbiased
                </h3>
                <p className="text-gray-600 text-lg">
                  No conflicts of interest. We work solely in your family's best
                  interest with complete transparency and fee-for-service model.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Consolidated View
                </h3>
                <p className="text-gray-600 text-lg">
                  Single dashboard for all your family's assets, investments, and
                  wealth across all asset classes with real-time tracking.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Generational Planning
                </h3>
                <p className="text-gray-600 text-lg">
                  Strategic wealth transfer planning to preserve and grow wealth
                  for future generations with proper governance structures.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Expert Network
                </h3>
                <p className="text-gray-600 text-lg">
                  Access to best-in-class professionals including tax advisors,
                  legal experts, and investment specialists worldwide.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Holistic Risk Management
                </h3>
                <p className="text-gray-600 text-lg">
                  Comprehensive risk assessment and mitigation strategies across
                  all aspects of family wealth and business interests.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Privacy & Confidentiality
                </h3>
                <p className="text-gray-600 text-lg">
                  Bank-grade security with AES-256 encryption and complete
                  confidentiality in all your family office matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section
        className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
        data-testid="inquiry-form-section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule a Confidential Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can serve your family's unique wealth management needs
            </p>
          </div>

          {formSubmitted && (
            <div
              className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
              data-testid="success-message"
            >
              <CheckCircle2 className="text-green-600 mr-3" />
              <span className="text-green-800">
                Thank you! Our family office team will contact you within 24
                hours to schedule a personalized consultation.
              </span>
            </div>
          )}

          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-10 shadow-2xl"
            data-testid="mfo-inquiry-form"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Family Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.family_name}
                  onChange={(e) =>
                    setFormData({ ...formData, family_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  data-testid="family-name-input"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  data-testid="phone-input"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Family Net Worth (₹) *
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
                min="250000000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                data-testid="net-worth-input"
              />
              <p className="text-sm text-gray-600 mt-1">
                Minimum: {formatCurrency(250000000)}
              </p>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-3">
                Services Interested In *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services_interested.includes(
                        service.name
                      )}
                      onChange={() => toggleService(service.name)}
                      className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                    />
                    <span className="text-gray-700 text-sm">
                      {service.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Tell Us About Your Family's Needs
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                placeholder="Share your family's wealth management goals, challenges, and what you're looking for in a Family Office partner..."
                data-testid="message-input"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              data-testid="submit-inquiry-btn"
            >
              {loading ? "Submitting..." : "Schedule Consultation"}
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              All consultations are confidential and complimentary
            </p>
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
                What is the minimum net worth requirement?
              </h3>
              <p className="text-gray-600">
                Our Multi-Family Office services are designed for families with a net worth of ₹25 Crores and above. We ensure personalized attention and comprehensive service delivery.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How is your fee structure designed?
              </h3>
              <p className="text-gray-600">
                We operate on a transparent fee-for-service model, ensuring complete independence and no conflicts of interest. Our fees are customized based on the services required by your family.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can you work with our existing advisors?
              </h3>
              <p className="text-gray-600">
                Absolutely. We complement your existing team of advisors and act as a coordinating Family CFO, ensuring all aspects of your wealth are managed cohesively while respecting existing relationships.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you ensure confidentiality?
              </h3>
              <p className="text-gray-600">
                We maintain bank-grade security with AES-256 encryption for all data. All team members sign comprehensive NDAs, and we follow strict protocols to ensure complete privacy of your family's financial matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyOfficePage;
