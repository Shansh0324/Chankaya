"use client";

import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="realtive  -z-10 py-[6vw]">
        <div className="container bg-[#F2F2F2] min-h-screen py-[2.5vw] absolute ">
          {/* 🔹 Top Left Text Section (unchanged) */}
          <div className="text-top-left px-35 leading-none py-[10vw] ">
            <div className="flex items-center justify-start gap-8 leading-none text-[9vw] tracking-tight ">
              <h1>
                <i className="font-mazius text-[#ff9800]">Visual</i> Expe
                <i className="font-mazius text-[#ff9800]">r</i>ience
              </h1>
            </div>
            <p className="text-[1.2vw] text-[#979898] uppercase tracking-wide p-2">
              solutions delivered <i className="font-mazius text-[#ff9800]">with</i> excellence
            </p>
          </div>

          {/* 🔹 Bento Grid Section */}
          <div className="bento-grid">
            <div className="bento-item bento1">
              <img
                src="assets/img4.png"
                alt="Abstract Metallic Sculpture"
              />
              <span className="bento-label">True <span className="text-[#ff9800]">Beauty</span></span>
            </div>
            <div className="bento-item bento2">
              <img
                src="assets/image.png"
                alt="Neon Number 3"
              />
              <span className="bento-label">Real <span className="text-[#ff9800]">View</span></span>
            </div>
            <div className="bento-item bento3">
              <img
                src="assets/img5.png"
                alt="Futuristic Human Portrait"
              />
              <span className="bento-label">W<span className="text-[#ff9800]">a</span>rmth</span>
            </div>
            <div className="bento-item bento4">
              <img
                src="assets/img6.png"
                alt="Virtual Reality Experience"
              />
              <span className="bento-label"><span className="text-[#ff9800]">Loved</span> Moments</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
