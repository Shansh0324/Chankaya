"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  imageUrl: string;
  transform?: string;
  className?: string;
  alt?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  transform = "translate(0%, 0%) rotate(0deg)",
  className = "",
  alt = "Image card"
}) => {
  const baseClasses = "absolute w-[27vw] h-[40vw] rounded-[1vw] bg-cover bg-center  hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-lg";
  // const baseClasses = "absolute w-[27vw] h-[40vw] rounded-[1vw] bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-lg";

  return (
    <div
      className={cn(baseClasses, className)}
      style={{
        backgroundImage: `url('${imageUrl}')`,
        transform: transform,
      }}
      aria-label={alt}
    ></div>
  );
};

export default ImageCard;