"use client";
import React from "react";
import ImageCard from "@/Animations/ImageCard";

const About = () => {
  return (
    <>
      <style jsx>{`
        #work::before {
          content: "";
          position: absolute;
          width: 100%;
          background-image: url(/assets/rip.f6d7c4dd.svg);
          background-size: cover;
          transform: rotate(-180deg);
          z-index: -1;
        }

        /* Mobile (default) */
        #work::before {
          bottom: -20vw; /* deeper offset for small screens */
          height: 80px; /* smaller height */
        }

        /* Small tablets */
        @media (min-width: 640px) {
          #work::before {
            bottom: -15vw;
            height: 100px;
          }
        }

        /* Tablets / Medium devices */
        @media (min-width: 768px) {
          #work::before {
            bottom: -12vw;
            height: 120px;
          }
        }

        /* Desktops / Large devices */
        @media (min-width: 1024px) {
          #work::before {
            bottom: -10vw;
            height: 150px;
          }
        }

        /* Extra large screens */
        @media (min-width: 1280px) {
          #work::before {
            bottom: -12vw;
            height: 180px;
          }
        }
      `}</style>

      <div className="container lg:mt-90 text-[#333333] tracking-tight relative">
        <div
          id="imagery"
          className="max-w-[80%] mx-auto flex flex-col lg:flex-row gap-[6vw] items-center lg:items-start"
        >
          {/* Left Text */}
          <div
            id="imglef"
            className="text-center lg:text-left w-full lg:w-auto mt-6 sm:mt-10 lg:mt-0 py-12 lg:py-20"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-none max-w-[90%] mx-auto lg:mx-0">
              We are <i className="font-mazius text-[#ff9800]">Chankaya,</i>{" "}
              <br />
              crafting{" "}
              <span className="font-mazius text-[#ff9800]">
                Unforgettable
              </span>{" "}
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

          {/* Right Images (hidden until lg) */}
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

        <div id="work"></div>
      </div>
    </>
  );
};

export default About;
