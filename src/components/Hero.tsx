"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    setCurrentTime(time);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-20">
      <div className="container leading-none">
        <div className="row ">
          <div className="flex flex-col md:flex-row text-center items-center text-[#333333] gap-4 md:gap-12 max-w-[85%] mx-auto">
            {/* Left big heading */}
            <h1 className="reveal font-gilroy text-[20vw] md:text-[12vw] tracking-tight">
              N<i className="font-mazius">a</i>m<i className="font-mazius">a</i>
              ste
            </h1>

            {/* Right section with evenly spaced blocks - hidden on mobile */}
            <div className="hidden md:flex justify-evenly items-start text-[#979695] max-w-[87%] mx-auto w-full">
              {/* Left block */}
              <div>
                <h5 className="reveal">
                  EXPLORING{" "}
                  <span>
                    <i className="font-mazius text-[#ff9800]">Real</i>
                  </span>
                </h5>
                <h5 className="reveal">BHARAT</h5>
              </div>

              {/* Right block */}
              <div className="text-[1vw] text-right">
                <h5 className="reveal">
                  SERVING GLOBALLY{" "}
                  <span className="text-[#ff9800]">{currentTime}</span>
                </h5>
                <h5 className="reveal">GMT (+5:30)</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <div className="text-[#979695] px-4 text-lg md:text-xl mt-6 max-w-[85%] mx-auto flex relative gap-4 md:gap-8">
          <div className="flex flex-col px-4 md:px-0">
            <p className="text-sm md:text-2xl">
              LET <i className="font-mazius text-lg md:text-3xl text-[#ff9800]">the</i>{" "}
              HUNT TO{" "}
              <i className="font-mazius text-[#ff9800] text-lg md:text-3xl">serach</i>{" "}
              BEGIN <i className="font-mazius text-[#ff9800]">!</i>
            </p>

            <p className="gap-3 text-sm md:text-2xl">ENJOY <i className="font-mazius text-[#ff9800] text-lg md:text-3xl">your</i> VACCATIONS</p>
          </div>

          {/* Bharat text - hidden on mobile */}
          <div className="absolute right-4 md:right-8 lg:-top-29 md:-top-8 hidden md:block">
            <h1 className="text-[15vw] md:text-[11vw] text-[#333333]">
              Bh<i className="font-mazius">a</i>r
              <i className="font-mazius">a</i>t
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
