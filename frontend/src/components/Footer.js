import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Shield, Award, Lock, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo.png" 
                alt="Finofii" 
                className="h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-300 text-xs leading-relaxed mb-4">
              The Investment Universe, Unified. India's premier treasury management 
              and financial solutions platform.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-1 text-[10px] text-gray-400">
                <Shield size={12} className="text-green-400" />
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-gray-400">
                <Award size={12} className="text-blue-400" />
                <span>AMFI Certified</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Connect With Us</p>
              <div className="flex items-center space-x-3">
                <a href="https://www.linkedin.com/company/finofii/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-base font-bold">in</a>
                <a href="https://twitter.com/finofii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-base font-bold">X</a>
                <a href="https://www.instagram.com/finofii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-base font-bold">IG</a>
                <a href="https://wa.me/919311361888" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors text-base font-bold">WA</a>
              </div>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 text-amber-400 uppercase tracking-wider">Discover</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/treasury" className="text-gray-300 hover:text-white transition-colors">Treasury Management</Link></li>
              <li><Link to="/founders" className="text-gray-300 hover:text-white transition-colors">Founders Wealth</Link></li>
              <li><Link to="/family-office" className="text-gray-300 hover:text-white transition-colors">Family Office</Link></li>
              <li><Link to="/capital" className="text-gray-300 hover:text-white transition-colors">Capital</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 text-amber-400 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/treasury" className="text-gray-300 hover:text-white transition-colors">Mutual Funds</Link></li>
              <li><Link to="/founders" className="text-gray-300 hover:text-white transition-colors">AIFs</Link></li>
              <li><Link to="/treasury" className="text-gray-300 hover:text-white transition-colors">Debt Products</Link></li>
              <li><Link to="/founders" className="text-gray-300 hover:text-white transition-colors">PMS</Link></li>
              <li><Link to="/treasury" className="text-gray-300 hover:text-white transition-colors">REIT/InvIT</Link></li>
              <li><Link to="/founders" className="text-gray-300 hover:text-white transition-colors">Global Access</Link></li>
            </ul>
          </div>

          {/* Gov Portals */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 text-amber-400 uppercase tracking-wider">Gov Portals</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">SEBI Portal</a></li>
              <li><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">RBI Website</a></li>
              <li><a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">AMFI India</a></li>
              <li><a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">SEBI SCORES</a></li>
              <li><a href="https://www.startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Startup India</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 text-amber-400 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/disclaimer" className="text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/risk-disclosure" className="text-gray-300 hover:text-white transition-colors">Risk Disclosure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 text-amber-400 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <Mail size={14} className="mt-0.5 text-amber-400 flex-shrink-0" />
                <a href="mailto:care@finofii.com" className="text-gray-300 hover:text-white transition-colors break-all">care@finofii.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={14} className="mt-0.5 text-amber-400 flex-shrink-0" />
                <a href="tel:+919311361888" className="text-gray-300 hover:text-white transition-colors">+91 93113 61888</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="mt-0.5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  Sector 135, Noida<br />201301, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="font-semibold text-sm mb-2 text-amber-400">Regulatory</h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-300">SEBI Registered</strong><br />
                AMFI: ARN-176236<br />
                CIN: U74999UP2021PTC140844<br />
                GSTIN: 09AAECF4170H1ZM<br />
                Startup India: DIPP80252
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="font-semibold text-sm mb-2 text-amber-400">Security</h5>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <Lock size={14} className="text-green-400" />
                  <span>256-bit Encryption</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>BSE StAR MF Platform</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="font-semibold text-sm mb-2 text-amber-400">Trust</h5>
              <div className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-300">₹2,800 Cr</strong> Gross Sales<br />
                <strong className="text-gray-300">1,000+ Businesses</strong> Served<br />
                <strong className="text-gray-300">T+1 Liquidity</strong> Fast Access
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-700/20">
            <p className="text-xs text-amber-100 leading-relaxed text-center">
              <strong className="text-amber-300">Investment Disclaimer:</strong> Mutual Fund investments are subject to market risks. 
              Please read all scheme-related documents carefully. Past performance is not indicative of future returns. 
              Finofii Fintech Private Limited is a platform facilitator. All investments via SEBI-registered AMCs through BSE StAR MF.
            </p>
          </div>

          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>© 2025 Finofii Fintech Private Limited. All rights reserved.</p>
            <p className="text-gray-600">
              For informational purposes only. Not an offer to sell or solicitation to buy securities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
