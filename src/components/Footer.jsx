import React from "react";

/**
 * Footer Component
 * 
 * Site footer with logo, brand name, and copyright.
 * Uses dark background with centered content.
 */
const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 text-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div 
          className="inline-block rounded-full mb-6" 
          style={{ 
            backgroundColor: '#1A1A1A',
            border: '3px solid #B48E2E',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px'
          }}
        >
          <img 
            src="/logo.jpg" 
            alt="The Prodigal Logo" 
            className="rounded-full"
            style={{ 
              height: 'calc(80px * 0.7)', 
              width: 'calc(80px * 0.7)',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Brand Name */}
        <div className="text-4xl font-black tracking-tight mb-2">
          THE PRODIGAL
        </div>
        
        {/* Copyright */}
        <p className="text-slate-600 text-xs uppercase tracking-[0.3em] mt-2">
          Jamaica &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
