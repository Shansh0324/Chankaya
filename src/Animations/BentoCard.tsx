"use client";

import React from "react";

interface BentoCardProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  labelText: string;
  accentText: string;
  accentPosition: 'before' | 'after' | 'middle';
  className?: string;
  onClick: (popupKey: string) => void;
}

const BentoCard: React.FC<BentoCardProps> = ({
  id,
  imageSrc,
  imageAlt,
  labelText,
  accentText,
  accentPosition,
  className = "",
  onClick
}) => {
  const renderLabel = () => {
    switch (accentPosition) {
      case 'before':
        return (
          <>
            <span className="text-[#ff9800]">{accentText}</span> {labelText}
          </>
        );
      case 'after':
        return (
          <>
            {labelText} <span className="text-[#ff9800]">{accentText}</span>
          </>
        );
      case 'middle':
        return (
          <>
            {labelText}<span className="text-[#ff9800]">{accentText}</span>rmth
          </>
        );
      default:
        return labelText;
    }
  };

  return (
    <div 
      className={`bento-item cursor-pointer ${className}`} 
      onClick={() => onClick(id)}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
      />
      <span className="bento-label pointer-events-none">
        {renderLabel()}
      </span>
    </div>
  );
};

export default BentoCard;