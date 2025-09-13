"use client";
import React from "react";
import Description from "../Animations/Description/Description";

const ChooseUs = () => {
  return (
    <section className="mih-h-screen  bg-[#F2F2F2]">
      <div className="container min-h-screen max-w-[85%] mx-auto ">
        <div className="top-text-content">
        <div className="header-text gap-5.5 text-[9vw] tracking-tight text-[#333333]">
          <h1><i className="font-mazius text-[#ff9800]">Why</i> Choose <i className="font-mazius text-[#ff9800]">u</i>s <i className="font-mazius text-[#ff9800]">?</i></h1>
        </div>
        <div className="text-[1.2vw] text-[#979898] uppercase tracking-wide p-2">
            <p>Relevance <i className="text-[#ff9800] font-mazius">with</i> excellence</p>
        </div>
        </div>

        <div className="body-content">
          <Description />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
