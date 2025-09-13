"use client";
import React from "react";
import Description from "../Animations/Description/Description";
import { ImageTextSection } from "../Animations/ImageTextSection";

const ChooseUs = () => {
  return (
    <>
      <style jsx>{`
        #chooseUs::after {
          content: "";
          bottom: -45px;
          position: absolute;
          width: 100%;
          height: 150px;
          background-image: url(/assets/rip.f6d7c4dd.svg);
          background-size: cover;
          transform: rotate(0deg);
          z-index: 10;
        }
      `}</style>
      <section id="chooseUs" className="min-h-screen bg-[#F2F2F2] pb-[12vw] relative">
        <div className="container min-h-screen max-w-[85%] mx-auto">
          <div className="top-text-content">
            <div className="header-text gap-5.5 text-[9vw] tracking-tight text-[#333333]">
              <h1>
                <i className="font-mazius text-[#ff9800]">Why</i> Choose{" "}
                <i className="font-mazius text-[#ff9800]">u</i>s{" "}
                <i className="font-mazius text-[#ff9800]">?</i>
              </h1>
            </div>
            <div className="text-[1.2vw] text-[#979898] uppercase tracking-wide p-2">
              <p>
                Relevance <i className="text-[#ff9800] font-mazius">with</i>{" "}
                excellence
              </p>
            </div>
          </div>

          <div className="body-content">
            <Description />
          </div>

          <div className="text-section-description">
            <ImageTextSection
              imageSrc="/assets/img9.png"
              imageAlt="Namaste"
              imagePosition="left"
              textContent={[
                "We are a team of passionate travel experts who are dedicated to providing you with the best travel experience. We are a team of passionate travel experts who are dedicated to providing you with the best travel experience. We are a team of passionate travel experts who are dedicated to providing you with the best travel experience.",
                "We are a team of dedicated travel enthusiasts who strive to turn every trip into a remarkable adventure. We are a team of dedicated travel enthusiasts who strive to turn every trip into a remarkable adventure. We are a team of dedicated travel enthusiasts who strive to turn every trip into a remarkable adventure.",
              ]}
            />

            <ImageTextSection
              imageSrc="/assets/img11.avif"
              imageAlt="Namaste"
              imagePosition="right"
              textContent="We are a team of passionate travel experts who are dedicated to providing you with the best travel experience. We are a team of passionate travel experts who are dedicated to providing you with the best travel experience. We are a team of passionate travel experts who are dedicated to providing you with the best travel experience."
            />

            <ImageTextSection
              imageSrc="/assets/img12.avif"
              imageAlt="Namaste"
              imagePosition="left"
              textContent={[
                "We are a team of passionate travel experts who are dedicated to providing you with the best travel experience. We are a team of passionate travel experts who are dedicated to providing you with the best travel experience. We are a team of passionate travel experts who are dedicated to providing you with the best travel experience.",
                "We are a team of dedicated travel enthusiasts who strive to turn every trip into a remarkable adventure. We are a team of dedicated travel enthusiasts who strive to turn every trip into a remarkable adventure. We are a team of dedicated travel enthusiasts who strive to turn every trip into a remarkable adventure.",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
