import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img src="/logo.png" alt="Finofiii" className="h-10 w-auto" />
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Global treasury & multi-family office platform.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="text-green-600 font-medium">AMFI: ARN-176236</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-amber-600 transition-colors">Home</Link></li>
              <li><Link to="/treasury" className="text-gray-600 hover:text-amber-600 transition-colors">Treasury</Link></li>
              <li><Link to="/founders" className="text-gray-600 hover:text-amber-600 transition-colors">Founders Wealth</Link></li>
              <li><Link to="/family-office" className="text-gray-600 hover:text-amber-600 transition-colors">Family Office</Link></li>
              <li><Link to="/capital" className="text-gray-600 hover:text-amber-600 transition-colors">Capital</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-amber-600 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-amber-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-600 hover:text-amber-600 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-amber-600 transition-colors">Disclaimer</Link></li>
              <li><Link to="/risk-disclosure" className="text-gray-600 hover:text-amber-600 transition-colors">Risk Disclosure</Link></li>
              <li><Link to="/disclosure" className="text-gray-600 hover:text-amber-600 transition-colors">Disclosure</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors">SEBI Portal</a></li>
              <li><a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors">AMFI India</a></li>
              <li><a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors">SEBI SCORES</a></li>
              <li><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors">RBI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gray-400" />
                <a href="mailto:care@finofii.com" className="text-gray-600 hover:text-amber-600 transition-colors">care@finofii.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400" />
                <a href="tel:+919311361888" className="text-gray-600 hover:text-amber-600 transition-colors">+91 93113 61888</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gray-400 mt-0.5" />
                <span className="text-gray-600">Sector 135, Noida 201301</span>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>CIN: U74999UP2021PTC140844</span>
              <span>GSTIN: 09AAECF4170H1ZM</span>
              <span>Startup India: DIPP80252</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>₹2,800 Cr Investments</span>
              <span>•</span>
              <span>1,000+ Businesses</span>
              <span>•</span>
              <span>BSE StAR MF Platform</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
            <p className="text-[11px] text-gray-600 text-center leading-relaxed">
              <strong className="text-gray-700">Disclaimer:</strong> Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance is not indicative of future returns. All investments via SEBI-registered AMCs through BSE StAR MF.
            </p>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            © 2025 Finofiii Fintech Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
