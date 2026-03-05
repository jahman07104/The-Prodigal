import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

/**
 * FloatingAvatar Component
 * 
 * A toggleable floating window that displays the welcome video avatar.
 * Can be opened/closed with a button and repositioned on the screen.
 * 
 * Props:
 * - videoSrc: String - Path to the video file
 */
const FloatingAvatar = ({ videoSrc = '/prodigal-welcome_video.mp4' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Toggle Button - Fixed bottom right */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
              <div className="bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl border-2 border-prodigal-gold relative">
                <p className="text-sm font-semibold whitespace-nowrap">
                  👋 Need help? I'm here to guide you!
                </p>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-prodigal-gold transform rotate-45"></div>
              </div>
            </div>
          )}
          
          <button
            onClick={() => {
              setIsOpen(true);
              setShowTooltip(false);
            }}
            onMouseEnter={() => setShowTooltip(true)}
            className="bg-prodigal-green text-white p-4 rounded-full shadow-2xl hover:bg-prodigal-green/90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-prodigal-gold group"
            aria-label="Open avatar assistant"
          >
            <MessageCircle size={28} className="group-hover:animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-prodigal-gold rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-prodigal-gold rounded-full"></span>
          </button>
        </div>
      )}

      {/* Floating Video Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-prodigal-gold animate-fade-in">
          {/* Header */}
          <div className="bg-prodigal-green text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm">The Prodigal Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close avatar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative bg-gray-900 aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Footer with info */}
          <div className="bg-slate-50 px-4 py-3 text-center">
            <p className="text-xs text-slate-600">
              Need help? Start a consultation to speak with an expert.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAvatar;
