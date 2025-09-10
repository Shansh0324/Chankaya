"use client";

import React, { useState, useEffect } from "react";

interface PopupContent {
  title: string;
  titleAccent?: string;
  description: string[];
  impactTitle?: string;
  impactItems?: string[];
}

interface BentoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: PopupContent;
}

const BentoPopup: React.FC<BentoPopupProps> = ({ isOpen, onClose, content }) => {
  const [isClosing, setIsClosing] = useState(false);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Match the animation duration
  };

  // Handle ESC key press and body scroll management
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closePopup();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEscKey);
        // Restore original overflow or set to auto
        document.body.style.overflow = originalOverflow || 'auto';
      };
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Ensure scroll is always restored
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`popup-overlay fixed inset-0 z-50 flex items-center justify-center p-4 ${isClosing ? 'closing' : ''}`}
      onClick={closePopup}
    >
      <div 
        className={`popup-content relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="close-button absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
        >
          <svg 
            className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center text-white">
          <h2 className="text-4xl font-mazius mb-6 text-white">
            {content.title}
            {content.titleAccent && (
              content.title === "W" ? (
                <span className="text-[#ff9800]">a</span>
              ) : content.title === "Loved" ? (
                <> <span className="text-[#ff9800]">{content.titleAccent}</span></>
              ) : (
                <> <span className="text-[#ff9800]">{content.titleAccent}</span></>
              )
            )}
            {content.title === "W" && "rmth"}
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            {content.description.map((paragraph, index) => (
              <p key={index} className="font-montreal" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            
            {content.impactTitle && content.impactItems && (
              <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-mazius text-[#ff9800] mb-3">{content.impactTitle}</h3>
                <ul className="space-y-2 text-left font-montreal">
                  {content.impactItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#ff9800] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoPopup;