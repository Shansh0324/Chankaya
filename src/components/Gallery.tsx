"use client";

import React, { useState } from "react";
import BentoPopup from "../Animations/BentoPopup";
import { bentoPopupData } from "../Animations/bentoPopupData";
import BentoCard from "../Animations/BentoCard";
import { bentoCardsData } from "../Animations/bentoCardsData";
import WrapButton from "../Animations/wrap-button";
import { Globe } from "lucide-react";

const Gallery = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (popupKey: string) => {
    setActivePopup(popupKey);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <section
        id="gallery"
        className="relative pt-[6vw] bg-[#F2F2F2] overflow-visible"
      >
        <div className="container min-h-screen py-[3vw] relative max-w-[85%] mx-auto">
          {/* Top Left Text */}
          <div className="text-left px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 leading-none py-8 sm:py-12 md:py-16 lg:py-[10vw]">
            <div className="flex items-start justify-start gap-2 sm:gap-4 md:gap-6 lg:gap-8 leading-none text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[9vw]  tracking-tight text-[#333333] whitespace-nowrap">
              <h1>
                <i className="font-mazius text-[#ff9800]">How </i> it Wo
                <i className="font-mazius text-[#ff9800]">r</i>ks{" "}
                <span className="font-mazius text-[#ff9800]">?</span>
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.2vw] text-[#979898] uppercase tracking-wide p-2">
              solutions delivered{" "}
              <i className="font-mazius text-[#ff9800]">with</i> excellence
            </p>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {bentoCardsData.map((card) => (
              <BentoCard
                key={card.id}
                id={card.id}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                labelText={card.labelText}
                accentText={card.accentText}
                accentPosition={card.accentPosition}
                className={card.className}
                onClick={openPopup}
              />
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center mt-[4vw] pb-[2vw]">
            <WrapButton href="#" className="mt-8 text-gilroy ">
              <Globe className="animate-spin" />
              Start Your Journey
            </WrapButton>
          </div>

          <div className="border-b-[2px] max-w-[85%] mx-auto py-[2vw]"></div>
        </div>
      </section>

      {/* Popup */}
      {activePopup && bentoPopupData[activePopup] && (
        <BentoPopup
          isOpen={true}
          onClose={closePopup}
          content={bentoPopupData[activePopup]}
        />
      )}
    </>
  );
};

export default Gallery;
