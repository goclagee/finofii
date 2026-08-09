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
            <h1 style={{fontSize: 'clamp(3rem, 8vw, 117px)'}} className="font-extrabold mb-8 leading-[0.95] tracking-tighter">
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

      {/* Stats Banner — animated counter style */}
      <section className="bg-[#FDFBF7] py-16 relative overflow-hidden" data-testid="stats-section">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-transparent to-indigo-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-600 mb-1">₹2,800 Cr</div>
              <div className="text-sm text-gray-600 font-medium">Investments via Platform</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-1">1,000+</div>
              <div className="text-sm text-gray-600 font-medium">Businesses Served</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-1">7%*</div>
              <div className="text-sm text-gray-600 font-medium">Avg Annual Returns</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-1">T+1</div>
              <div className="text-sm text-gray-600 font-medium">Fast Liquidity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Account Monetisation */}
      <section className="py-20 bg-[#FAF8F5]" data-testid="monetisation-section">
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
      <section className="py-20 bg-[#FDFBF7]" data-testid="services-section">
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

      {/* Trust Indicators — Horizontal cards */}
      <section className="py-24 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">Trust & Compliance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why India's Elite Choose Finofii</h2>
            <p className="text-xl text-gray-500">Regulated. Secure. Transparent.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Shield className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="font-bold text-gray-900 text-lg mb-2">SEBI Registered</h3>
              <p className="text-sm text-gray-500">Fully regulated investment advisor with clean compliance record</p>
            </div>
            <div className="relative group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Award className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 text-lg mb-2">AMFI Certified</h3>
              <p className="text-sm text-gray-500">ARN-176236 | BSE StAR MF execution platform for all transactions</p>
            </div>
            <div className="relative group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-gray-900 text-lg mb-2">T+1 Liquidity</h3>
              <p className="text-sm text-gray-500">Access your money next business day. Some funds offer instant redemption.</p>
            </div>
            <div className="relative group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 text-lg mb-2">Global Access</h3>
              <p className="text-sm text-gray-500">Invest globally via LRS & GIFT City routes with expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve — Interactive persona cards */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Clients</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Built for India's Elite</h2>
            <p className="text-xl text-gray-500">From unicorn CFOs to UHNW families — we serve the top 1%</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="group relative bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-amber-500/20">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"></div>
              <Users className="w-10 h-10 mb-4 opacity-90" />
              <h3 className="font-bold text-xl mb-1">Tech Founders</h3>
              <p className="text-white/80 text-sm">Startup & Unicorn CFOs managing runway capital</p>
              <div className="mt-4 text-xs bg-white/20 inline-block px-3 py-1 rounded-full">500+ founders</div>
            </div>
            <div className="group relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-indigo-500/20">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"></div>
              <Building2 className="w-10 h-10 mb-4 opacity-90" />
              <h3 className="font-bold text-xl mb-1">Family Offices</h3>
              <p className="text-white/80 text-sm">UHNW families preserving & growing generational wealth</p>
              <div className="mt-4 text-xs bg-white/20 inline-block px-3 py-1 rounded-full">₹25 Cr+ NW</div>
            </div>
            <div className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-emerald-500/20">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"></div>
              <TrendingUp className="w-10 h-10 mb-4 opacity-90" />
              <h3 className="font-bold text-xl mb-1">HNI Investors</h3>
              <p className="text-white/80 text-sm">Angels, VCs & serial investors maximizing idle capital</p>
              <div className="mt-4 text-xs bg-white/20 inline-block px-3 py-1 rounded-full">₹1 Cr+ tickets</div>
            </div>
            <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-blue-500/20">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"></div>
              <Briefcase className="w-10 h-10 mb-4 opacity-90" />
              <h3 className="font-bold text-xl mb-1">Corporates</h3>
              <p className="text-white/80 text-sm">MSMEs & enterprises optimizing treasury operations</p>
              <div className="mt-4 text-xs bg-white/20 inline-block px-3 py-1 rounded-full">1,000+ companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Interactive Timeline */}
      <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Finofii Works</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Start earning in 3 simple steps. No paperwork headaches.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="relative group">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-xl shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                1
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Pick Your Strategy</h3>
                <p className="text-gray-600 text-center">
                  Choose from AI-recommended portfolios based on your risk appetite, cash runway, and business goals.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-xl shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                2
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Automate & Invest</h3>
                <p className="text-gray-600 text-center">
                  Set auto-sweep rules. Idle cash moves to high-yield instruments automatically — zero manual intervention.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-xl shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                3
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Track & Withdraw</h3>
                <p className="text-gray-600 text-center">
                  Real-time dashboard with instant insights. Withdraw anytime with T+1 liquidity — your money, your control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights — Magazine layout */}
      <section className="py-24 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">Insights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Market Intelligence</h2>
            <p className="text-xl text-gray-500">Fresh perspectives on wealth, markets & treasury</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">MARKETS</span>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Indian Markets Hit New Highs: Nifty Crosses 25,000
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Strong corporate earnings and FII inflows drive benchmark indices to record levels as mid-cap momentum continues...
                </p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-indigo-400 to-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">TREASURY</span>
                  <span className="text-xs text-gray-400">5 hours ago</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Why Liquid Funds Beat Bank FDs in 2025
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Higher post-tax returns, better liquidity, and no penalty on early withdrawal — the case for liquid funds has never been stronger...
                </p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">WEALTH</span>
                  <span className="text-xs text-gray-400">1 day ago</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Tax-Efficient Strategies for HNI Investors
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  From debt fund indexation benefits to international diversification — how India's wealthy are optimizing their tax burden...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — Clean accordion style */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does Finofii work?", a: "Finofii invests your idle current account balance in SEBI-regulated liquid and debt mutual funds via BSE StAR MF, generating up to 7%* annually while maintaining T+1 liquidity." },
              { q: "Is my money safe?", a: "Your money never touches Finofii's account. All investments go directly to SEBI-regulated AMCs through BSE StAR MF execution channel with daily NAV declarations." },
              { q: "What's the minimum investment?", a: "Treasury Management starts at ₹1 Crore. Founders Wealth from ₹100 (MFs) to ₹1 Cr (PMS/AIF). Family Office requires ₹25 Cr+ net worth." },
              { q: "How quickly can I withdraw?", a: "Liquid funds offer T+1 liquidity — money back in 1-3 business days. Some schemes offer instant redemption up to ₹50,000." },
              { q: "What are your fees?", a: "No account opening or transaction fees. A small percentage (as low as 0.08%) on monthly treasury positions. Family Office uses a transparent fee-for-service model." },
            ].map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">{item.q}</h3>
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to Earn More?</h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100/70 max-w-2xl mx-auto">
            Join 1,000+ businesses that stopped letting idle cash sit at 0% returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://platform.finofii.com/app/#/login"
              className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-[1.02]"
            >
              Start Earning Today →
            </a>
            <a
              href="https://wa.me/919311361888"
              className="inline-block px-12 py-4 bg-white/10 backdrop-blur text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
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