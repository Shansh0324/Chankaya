"use client";

import React from "react";
import Image from "next/image"; // ✅ Next.js optimized Image

interface BentoCardProps {
  id: string;
  imageSrc: string;   // Path or remote URL
  imageAlt: string;
  labelText: string;
  accentText: string;
  accentPosition: "before" | "after" | "middle";
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
  onClick,
}) => {
  // Handle text label rendering with accent
  const renderLabel = () => {
    switch (accentPosition) {
      case "before":
        return (
          <>
            <span className="text-[#ff9800]">{accentText}</span> {labelText}
          </>
        );
      case "after":
        return (
          <>
            {labelText} <span className="text-[#ff9800]">{accentText}</span>
          </>
        );
      case "middle":
        return (
          <>
            {labelText}
            <span className="text-[#ff9800]">{accentText}</span>
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
      {/* ✅ Next.js Image for better LCP & optimization */}
      <Image
        src={imageSrc.startsWith("http") ? imageSrc : `/${imageSrc}`} 
        alt={imageAlt}
        width={400}   // required by next/image
        height={300}  // adjust based on design
        className="w-full h-auto object-cover rounded-lg"
      />
      <span className="bento-label pointer-events-none">{renderLabel()}</span>
    </div>
  );
};

export default BentoCard;
