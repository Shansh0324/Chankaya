"use client";
import React from "react";
import Image from "next/image";

// Helper function to highlight specific words with italic styling
const highlightKeywords = (text: string) => {
  const highlightWords = ['passionate', 'experts', 'best', 'remarkable', 'adventure'];
  
  return text.split(' ').map((word, wordIndex) => {
    const shouldHighlight = highlightWords.some(keyword => 
      word.toLowerCase().includes(keyword.toLowerCase())
    );
    
    return shouldHighlight ? (
      <span key={wordIndex}>
        <i className="font-mazius text-[#ff9800] text-[4.5vw] sm:text-[3.5vw] lg:text-[1.4vw]">{word}</i>
        {wordIndex < text.split(' ').length - 1 ? ' ' : ''}
      </span>
    ) : (
      <span key={wordIndex}>
        {word}
        {wordIndex < text.split(' ').length - 1 ? ' ' : ''}
      </span>
    );
  });
};

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  textContent: string | string[];
  imagePosition?: "left" | "right";
  className?: string;
  textClassName?: string;
  imageClassName?: string;
  containerClassName?: string;
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  textContent,
  imagePosition = "left",
  className = "",
  textClassName = "",
  imageClassName = "",
  containerClassName = ""
}: ImageTextSectionProps) {
  // Convert textContent to array if it's a string
  const textArray = Array.isArray(textContent) ? textContent : [textContent];

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between pt-[20vw] sm:pt-[15vw] lg:pt-[15vw] gap-[2vw] sm:gap-[3vw] lg:gap-[4vw] max-w-[95%] sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-0 ${containerClassName} ${className}`}>
      {/* Image Section - Show on all devices */}
      <div className={`flex h-[30vw] sm:h-[45vw] lg:h-[36vw] flex-1 justify-center pb-[4vw] sm:pb-[3vw] lg:pb-[2vw] ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"} order-1`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`object-contain w-full h-full max-w-[250px] sm:max-w-[400px] lg:max-w-none ${imageClassName}`}
        />
      </div>

      {/* Text Section */}
      <div className={`w-full lg:w-auto h-full flex-1 flex items-center justify-center ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"} order-2`}>
        <div className={`text-[4.5vw] sm:text-[3.5vw] lg:text-[1.2vw] text-[#333333] tracking-tight leading-relaxed text-left ${textClassName}`}>
          {textArray.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "pt-2 sm:pt-3 lg:pt-4" : ""}>
              {typeof paragraph === 'string' ? highlightKeywords(paragraph) : paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Alternative version with more customization options
export function AdvancedImageTextSection({
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  textContent,
  imagePosition = "left",
  className = "",
  textClassName = "",
  imageClassName = "",
  containerClassName = "",
  imageContainerClassName = "",
  textContainerClassName = "",
  spacing = "pt-[15vw]",
  gap = "gap-[4vw]",
  maxWidth = "max-w-[90%]"
}: ImageTextSectionProps & {
  imageContainerClassName?: string;
  textContainerClassName?: string;
  spacing?: string;
  gap?: string;
  maxWidth?: string;
}) {
  // Convert textContent to array if it's a string
  const textArray = Array.isArray(textContent) ? textContent : [textContent];

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between ${spacing || 'pt-[20vw] sm:pt-[15vw] lg:pt-[15vw]'} ${gap} ${maxWidth} mx-auto px-4 sm:px-6 lg:px-0 ${containerClassName} ${className}`}>
      {/* Image Section - Show on all devices */}
      <div className={`flex h-[30vw] sm:h-[45vw] lg:h-[36vw] flex-1 justify-center pb-[4vw] sm:pb-[5vw] lg:pb-[2vw] ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"} order-1 ${imageContainerClassName}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`object-contain w-full h-full max-w-[250px] sm:max-w-[400px] lg:max-w-none ${imageClassName}`}
        />
      </div>

      {/* Text Section */}
      <div className={`w-full lg:w-auto h-full flex-1 flex items-center justify-center ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"} order-2 ${textContainerClassName}`}>
        <div className={`text-[4.5vw] sm:text-[3.5vw] lg:text-[1.2vw] text-[#333333] tracking-tight leading-relaxed text-left ${textClassName}`}>
          {textArray.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "pt-2 sm:pt-3 lg:pt-4" : ""}>
              {typeof paragraph === 'string' ? highlightKeywords(paragraph) : paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Responsive version with mobile-first approach
export function ResponsiveImageTextSection({
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  textContent,
  imagePosition = "left",
  className = "",
  textClassName = "",
  imageClassName = "",
  containerClassName = "",
  mobileImagePosition = "top" // "top" or "bottom" for mobile
}: ImageTextSectionProps & {
  mobileImagePosition?: "top" | "bottom";
}) {
  // Convert textContent to array if it's a string
  const textArray = Array.isArray(textContent) ? textContent : [textContent];

  // Determine mobile order
  const mobileOrder = mobileImagePosition === "top" ? 
    (imagePosition === "left" ? "order-1" : "order-1") : 
    (imagePosition === "left" ? "order-2" : "order-2");

  const textMobileOrder = mobileImagePosition === "top" ? 
    (imagePosition === "left" ? "order-2" : "order-2") : 
    (imagePosition === "left" ? "order-1" : "order-1");

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between pt-[15vw] gap-[4vw] max-w-[90%] mx-auto ${containerClassName} ${className}`}>
      {/* Image Section */}
      <div className={`h-[50vw] md:h-[36vw] flex-1 flex justify-center ${imagePosition === "left" ? "md:order-1" : "md:order-2"} ${mobileOrder}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`object-contain ${imageClassName}`}
        />
      </div>

      {/* Text Section */}
      <div className={`h-full flex-1 flex items-center justify-center ${imagePosition === "left" ? "md:order-2" : "md:order-1"} ${textMobileOrder}`}>
        <div className={`text-[4vw] md:text-[1.2vw] text-[#333333] tracking-tight px-4 md:px-0 text-left ${textClassName}`}>
          {textArray.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "pt-4" : ""}>
              {typeof paragraph === 'string' ? highlightKeywords(paragraph) : paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
