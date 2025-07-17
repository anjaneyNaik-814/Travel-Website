import React, { useState } from 'react';
import { Menu, X, Mountain, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'destination' | 'package' | 'contact') => void;
  onHome: () => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onHome, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', page: 'home' as const },
    { label: 'Treks', page: 'home' as const },
    { label: 'Contact', page: 'contact' as const },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={onHome}
          >
            <Mountain className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">TripConnect</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.page === 'home' ? onHome() : onNavigate(item.page)}
                className={`text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.page ? 'text-green-600 border-b-2 border-green-600' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+919876543210"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.page === 'home' ? onHome() : onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left ${
                    currentPage === item.page 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+919876543210"
                className="block w-full bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;