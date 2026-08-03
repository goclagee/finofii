import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/treasury", label: "Treasury Management" },
    { path: "/founders", label: "Founders Wealth" },
    { path: "/family-office", label: "Family Office" },
    { path: "/capital", label: "Capital" },
    { path: "/about", label: "About Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <img 
              src="/logo.png" 
              alt="Finofii MFO" 
              className="h-14 w-auto hover:opacity-90 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive(link.path)
                    ? "text-amber-700 bg-amber-50"
                    : "text-gray-700 hover:text-amber-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://platform.finofii.com/app/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
              data-testid="login-button"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-amber-700"
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-amber-700 bg-amber-50"
                    : "text-gray-700 hover:text-amber-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://platform.finofii.com/app/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 mt-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-bold text-center hover:from-amber-700 hover:to-amber-800 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
