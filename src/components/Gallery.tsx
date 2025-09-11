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
      <section className="relative py-[6vw]">
        <div className="container bg-[#F2F2F2] min-h-screen py-[2.5vw] relative">
          {/* 🔹 Top Left Text Section (unchanged) */}
          <div className="text-top-left px-35 leading-none py-[10vw] ">
            <div className="flex items-center justify-start gap-8 leading-none text-[9vw] tracking-tight text-[#333333]">
              <h1>
                <i className="font-mazius text-[#ff9800]">How </i> it Wo
                <i className="font-mazius text-[#ff9800]">r</i>ks <span className="font-mazius text-[#ff9800]">?</span>
              </h1>
            </div>
            <p className="text-[1.2vw] text-[#979898] uppercase tracking-wide p-2">
              solutions delivered <i className="font-mazius text-[#ff9800]">with</i> excellence
            </p>
          </div>

          {/* 🔹 Bento Grid Section */}
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
          
          {/* 🔹 Call to Action Button */}
          <div className="flex justify-center mt-[4vw] pb-[2vw]">
            <WrapButton href="#" className="mt-8 text-gilroy ">
              <Globe className="animate-spin" />
              Start Your Journey
            </WrapButton>
          </div>

          <div className="border-b-[2px] max-w-[85%] mx-auto py-[2vw]"></div>
        </div>
      </section>

      {/* 🔹 Reusable Popup Modal */}
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
