import { Link } from "react-router-dom";
import {
  TrendingUp,
  Rocket,
  Building2,
  ArrowRight,
  Shield,
  Award,
  Users,
  BarChart3,
  Clock,
  Zap,
  CheckCircle,
  Globe,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = [
  "Treasury Management",
  "WealthTech",
  "Multi-Family Offices",
  "Portfolio Intelligence",
];

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [calculatorAmount, setCalculatorAmount] = useState(10000000);
  const [calculatorDays, setCalculatorDays] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const calculateReturns = () => {
    // Dynamic YTM based on investment period (in days)
    let ytm = 0;
    
    if (calculatorDays <= 7) {
      // Overnight/Liquid funds (1-7 days)
      ytm = 0.052; // 5.2%
    } else if (calculatorDays <= 30) {
      // Liquid funds (8-30 days)
      ytm = 0.055; // 5.5%
    } else if (calculatorDays <= 90) {
      // Ultra Short Duration (31-90 days)
      ytm = 0.062; // 6.2%
    } else if (calculatorDays <= 180) {
      // Short Duration (91-180 days)
      ytm = 0.070; // 7.0%
    } else {
      // Low Duration (180+ days)
      ytm = 0.072; // 7.2%
    }
    
    const profit = (calculatorAmount * ytm * calculatorDays) / 365;
    return { profit, ytm };
  };

  const returns = calculateReturns();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white py-32 md:py-40 overflow-hidden" data-testid="hero-section">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-[1.05] tracking-tight">
              <span className="text-white">India's Premier AI-Based</span>
              <br />
              <span
                className={`inline-block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-5 text-blue-100/80 max-w-4xl mx-auto font-light tracking-wide">
              Super Exclusive Platform for Elite Investors • AI-Driven Insights • Institutional-Grade Solutions
            </p>
            <p className="text-2xl mb-3 max-w-3xl mx-auto font-semibold italic text-amber-300">
              "Higher Interest is in Your Best Interest"
            </p>
            <p className="text-lg mb-10 text-blue-100/70 max-w-3xl mx-auto">
              Get up to 7%* annually on idle cash | ₹2,800 Cr Investments | 1,000+ Businesses Trust Us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://platform.finofii.com/app/#/login"
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-[1.02]"
                data-testid="start-earning-btn"
              >
                Start Earning Today
              </a>
              <Link
                to="/treasury"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/30 hover:border-white/50"
                data-testid="calculate-returns-btn"
              >
                Calculate Returns
              </Link>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); if (window.Calendly) window.Calendly.initPopupWidget({url: 'https://calendly.com/ms--165'}); }}
                className="px-10 py-4 bg-transparent text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all border border-white/20 hover:border-white/40"
                data-testid="book-demo-btn"
              >
                Book Demo
              </a>
            </div>
            <p className="text-xs text-blue-200/50">*Based on 6-month liquid fund average returns</p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-12 border-b border-gray-100 shadow-sm" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">₹2,800 Cr</div>
              <div className="text-gray-600 font-medium">Total Investment via Platform</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">1,000+</div>
              <div className="text-gray-600 font-medium">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">7%*</div>
              <div className="text-gray-600 font-medium">Avg Annual Returns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">T+1</div>
              <div className="text-gray-600 font-medium">Fast Liquidity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Account Monetisation */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" data-testid="monetisation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Monetise Your Current Account
            </h2>
            <p className="text-xl text-gray-600">
              Get up to 7%* annually vs 0% in savings account
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Per Day Returns on ₹1 Crore</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-100">
                  <span className="font-semibold text-gray-700">Current Account</span>
                  <span className="text-2xl font-bold text-red-500">₹0</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <span className="font-semibold text-gray-700">Fixed Deposit</span>
                  <span className="text-2xl font-bold text-yellow-600">₹1,164</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border-2 border-emerald-400">
                  <span className="font-semibold text-gray-700">Finofii Liquid</span>
                  <span className="text-3xl font-bold text-emerald-600">₹1,850*</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">*Based on 6-month average liquid fund returns</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Earnings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Amount (₹)</label>
                  <input
                    type="number"
                    value={calculatorAmount}
                    onChange={(e) => setCalculatorAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                    min="10000000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Investment Period (Days)</label>
                  <input
                    type="number"
                    value={calculatorDays}
                    onChange={(e) => setCalculatorDays(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                    min="1"
                    max="365"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    YTM: {(returns.ytm * 100).toFixed(2)}% p.a. 
                    {calculatorDays <= 7 && " (Overnight/Liquid)"}
                    {calculatorDays > 7 && calculatorDays <= 30 && " (Liquid)"}
                    {calculatorDays > 30 && calculatorDays <= 90 && " (Ultra Short)"}
                    {calculatorDays > 90 && calculatorDays <= 180 && " (Short Duration)"}
                    {calculatorDays > 180 && " (Low Duration)"}
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-400">
                  <div className="text-sm text-gray-600 mb-2">Expected Profit</div>
                  <div className="text-4xl font-bold text-emerald-600">{formatCurrency(returns.profit)}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Based on current {calculatorDays <= 7 ? "Liquid" : calculatorDays <= 90 ? "Ultra Short Duration" : "Short Duration"} fund YTM
                  </div>
                </div>
              </div>
              <Link
                to="/treasury"
                className="mt-6 block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md"
              >
                Start Treasury Management →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Services */}
      <section className="py-20 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Investment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive treasury management, private market access, and family office services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Treasury */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 shadow-lg">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Treasury Management</h3>
              <p className="text-gray-600 mb-6">India's 1st platform for business idle cash optimization</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">5.5-7% Annual Returns*</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">T+1 Liquidity</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">No Lock-ins</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-4">Min: ₹1 Cr</div>
              <Link
                to="/treasury"
                className="block text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md"
              >
                Explore Treasury →
              </Link>
            </div>

            {/* Founders */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 shadow-lg">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                <Rocket size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founders Wealth</h3>
              <p className="text-gray-600 mb-6">Access private markets with Founder-Led Vehicles</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">Pre-IPO Deals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">Clean Cap Table</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">100+ Deals</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-4">Min: ₹1 Cr</div>
              <Link
                to="/founders"
                className="block text-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-bold hover:from-indigo-600 hover:to-indigo-700 transition-colors shadow-md"
              >
                Access Markets →
              </Link>
            </div>

            {/* MFO */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 shadow-lg">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                <Building2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Family Office</h3>
              <p className="text-gray-600 mb-6">Comprehensive solutions for UHNW families</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">8 Core Services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">Tax Efficiency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700">Legacy Planning</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-4">Min: ₹25 Cr</div>
              <Link
                to="/family-office"
                className="block text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-emerald-700 transition-colors shadow-md"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Finofii</h2>
            <p className="text-xl text-gray-600">Trusted by India's leading businesses and entrepreneurs</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">SEBI Registered</h3>
              <p className="text-sm text-gray-600">Fully compliant & regulated</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">AMFI Certified</h3>
              <p className="text-sm text-gray-600">ARN-176236</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-sm text-gray-600">T+1 liquidity</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Global Access</h3>
              <p className="text-sm text-gray-600">LRS & GIFT City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Trusted By */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Investors & Businesses</h2>
            <p className="text-xl text-gray-600">Join India's most sophisticated investors and entrepreneurs</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Tech Founders</h3>
              <p className="text-sm text-gray-600">Startup & Unicorn CFOs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Family Offices</h3>
              <p className="text-sm text-gray-600">UHNW Families</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">HNI Investors</h3>
              <p className="text-sm text-gray-600">Angels & VCs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Corporates</h3>
              <p className="text-sm text-gray-600">MSMEs & Enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Finofii Works</h2>
            <p className="text-xl text-gray-600">Start earning in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl shadow-amber-500/30">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pick Investment Mix</h3>
              <p className="text-gray-600 text-lg">
                Choose from personalized strategies based on your risk profile, runway, and business needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl shadow-indigo-500/30">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Activate Automation</h3>
              <p className="text-gray-600 text-lg">
                Set up smart automations to streamline transfers between your accounts seamlessly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl shadow-emerald-500/30">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Growth</h3>
              <p className="text-gray-600 text-lg">
                Focus on your business while earning up to 7%* annually on idle funds with real-time tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial News Widget */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial News & Insights</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest market trends</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-100 shadow-md">
              <div className="text-xs text-amber-600 font-semibold mb-2">MARKET UPDATE</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Indian Markets Hit New Highs: Nifty Crosses 25,000
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Strong corporate earnings and FII inflows drive benchmark indices to record levels...
              </p>
              <div className="text-xs text-gray-400">2 hours ago</div>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-100 shadow-md">
              <div className="text-xs text-indigo-600 font-semibold mb-2">TREASURY INSIGHTS</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Why Liquid Funds Are Better Than Bank FDs in 2025
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Discover how liquid funds offer higher returns with better liquidity than traditional fixed deposits...
              </p>
              <div className="text-xs text-gray-400">5 hours ago</div>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-100 shadow-md">
              <div className="text-xs text-emerald-600 font-semibold mb-2">WEALTH MANAGEMENT</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Tax-Efficient Strategies for HNI Investors
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn about the latest tax optimization strategies for high-net-worth individuals and family offices...
              </p>
              <div className="text-xs text-gray-400">1 day ago</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Finofii</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does Finofii work?
              </h3>
              <p className="text-gray-600">
                Finofii helps you manage idle cash through intelligent treasury management. We invest your current account balance in SEBI-regulated liquid and debt mutual funds, generating returns of up to 7%* annually while maintaining high liquidity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my money safe with Finofii?
              </h3>
              <p className="text-gray-600">
                Absolutely. Your money is invested in SEBI and AMFI regulated mutual fund schemes with daily NAV declarations. Finofii is just a platform - no money is transferred to Finofii's account. All transactions happen through BSE Star MF execution channel.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the minimum investment amount?
              </h3>
              <p className="text-gray-600">
                For Treasury Management, the minimum is ₹1 Crore. For Founders Wealth, investments start from ₹100 (Mutual Funds) to ₹1 Crore (PMS/AIF/Unlisted). For Multi-Family Office, minimum net worth is ₹25 Crores.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can I access my money?
              </h3>
              <p className="text-gray-600">
                Liquid funds offer T+1 liquidity, meaning you can redeem your investments and get your money back in 1-3 business days. Some funds offer instant redemption for amounts up to ₹50,000.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your fees?
              </h3>
              <p className="text-gray-600">
                We don't charge account opening or transaction fees. You'll be charged a small percentage (as low as 0.08%) of your total monthly treasury positions. For Family Office, we work on a transparent fee-for-service model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-2xl mb-8 text-blue-100/80">
            Join 1,000+ businesses maximizing returns on idle cash
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://platform.finofii.com/app/#/login"
              className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-[1.02]"
            >
              Monetise ₹1 Cr+ Today →
            </a>
            <a
              href="https://wa.me/919311361888"
              className="inline-block px-12 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Talk to Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;