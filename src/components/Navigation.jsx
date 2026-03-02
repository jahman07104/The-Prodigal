import React, { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component
 * 
 * Fixed navigation bar that changes appearance based on:
 * - Scroll position (transparent -> white background)
 * - Current page (affects text color)
 * - Mobile/desktop view (hamburger menu on mobile)
 * 
 * Props:
 * - currentPage: String - Current active page ('home', 'insights', 'community')
 * - setCurrentPage: Function - Updates the active page
 * - scrolled: Boolean - Whether user has scrolled past 50px
 * - onConsultClick: Function - Handler for consultation button click
 */
const Navigation = ({ currentPage, setCurrentPage, scrolled, onConsultClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Determine if we should use dark text (scrolled or not on home page)
  const isDarkText = scrolled || currentPage !== "home";
  
  // Navigation links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "insights", label: "Insights" },
    { id: "community", label: "Community" },
  ];
  
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isDarkText 
          ? "bg-white shadow-lg py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <div
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleNavClick("home")}
          aria-label="Navigate to home page"
        >
          <div 
            className="rounded-full" 
            style={{ 
              backgroundColor: '#1A1A1A',
              border: '2.5px solid #B48E2E',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: scrolled ? '48px' : '58px',
              height: scrolled ? '48px' : '58px'
            }}
          >
            <img 
              src="/logo.jpg" 
              alt="The Prodigal Logo" 
              className="rounded-full"
              style={{ 
                height: scrolled ? 'calc(48px * 0.7)' : 'calc(58px * 0.7)', 
                width: scrolled ? 'calc(48px * 0.7)' : 'calc(58px * 0.7)',
                objectFit: 'cover'
              }}
            />
          </div>
          <span
            className={`text-xl font-black tracking-tight ${
              isDarkText ? "text-black" : "text-white"
            }`}
          >
            THE PRODIGAL
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-bold text-sm uppercase transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-prodigal-gold rounded-md px-2 py-1 ${
                currentPage === link.id
                  ? isDarkText
                    ? "text-prodigal-green opacity-100"
                    : "text-prodigal-gold opacity-100"
                  : isDarkText
                  ? "text-slate-600 opacity-80"
                  : "text-white/80 opacity-80"
              }`}
              aria-label={`Navigate to ${link.label} page`}
              aria-current={currentPage === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
          
          {/* Consultation Button */}
          <button
            onClick={onConsultClick}
            className="bg-prodigal-green text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-wider hover:bg-prodigal-green/90 transition-all focus:outline-none focus:ring-2 focus:ring-prodigal-gold focus:ring-offset-2"
            aria-label="Request a consultation"
          >
            Consultation
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-prodigal-gold ${
            isDarkText ? "text-black" : "text-white"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-slate-200 animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left font-bold text-sm uppercase py-3 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-prodigal-gold ${
                  currentPage === link.id
                    ? "bg-prodigal-green text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
                aria-label={`Navigate to ${link.label} page`}
                aria-current={currentPage === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Consultation Button */}
            <button
              onClick={() => {
                onConsultClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-prodigal-green text-white py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider hover:bg-prodigal-green/90 transition-all focus:outline-none focus:ring-2 focus:ring-prodigal-gold"
              aria-label="Request a consultation"
            >
              Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
