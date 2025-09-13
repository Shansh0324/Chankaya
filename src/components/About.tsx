"use client";
import React from "react";
import ImageCard from "@/Animations/ImageCard";

const About = () => {
  return (
    <>
      <style jsx>{`
        #work::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 150px;
          bottom: -44px;
          left: 0;
          background-image: url(/assets/rip.f6d7c4dd.svg);
          background-size: cover;
          background-repeat: no-repeat;
          transform: rotate(180deg);
          z-index: 2;
        }
      `}</style>

      <div className="relative bg-white text-[#333333] tracking-tight pt-[6vw] sm:pt-10 md:pt-[5vw] lg:pt-72 xl:pt-80 2xl:pt-88">
        <div
          id="imagery"
          className="max-w-[80%] mx-auto flex flex-col lg:flex-row gap-[6vw] items-center lg:items-start"
        >
          {/* Left Text */}
          <div
            id="imglef"
            className="text-center lg:text-left w-full lg:w-auto mt-6 sm:mt-10 lg:mt-0 py-12 lg:py-20 z-5"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-none max-w-[90%] mx-auto lg:mx-0">
              We are <i className="font-mazius text-[#ff9800]">Chankaya,</i>{" "}
              <br />
              crafting{" "}
              <span className="font-mazius text-[#ff9800]">Unforgettable</span>{" "}
              <br />
              journeys across the globe, <br />
              bringing you closer to <br />
              cultures, landscapes, and <br />
              experiences that inspire. <br />
              <span className="font-mazius text-[#ff9800]">
                Explore. Dream. Discover.
              </span>
            </h1>
          </div>

          {/* Right Images */}
          <div
            id="imgrig"
            className="relative hidden lg:flex items-center justify-center w-[60%] h-[300px] mx-auto z-10"
          >
            <ImageCard
              imageUrl="/assets/img1.jpeg"
              transform="translate(-40%,-8%) rotate(-20deg)"
              alt="Travel destination image 1"
            />

            <ImageCard
              imageUrl="/assets/img2.jpeg"
              transform="translate(-15%,0%) rotate(-15deg)"
              alt="Travel destination image 2"
            />

            <ImageCard
              imageUrl="/assets/img3.jpeg"
              transform="translate(20%,10%) rotate(-5deg)"
              alt="Travel destination image 3"
            />
          </div>
        </div>

        {/* Rip divider */}
        <div id="work" className="relative"></div>
      </div>
    </>
  );
};

export default About;
