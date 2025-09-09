"use client";
import React from "react";
import NavbarAnimation from "@/Animations/NavbarAnimation";

const Navbar = () => {
  return (
    <section>
      <div className="container">
        <nav className="py-10 relative">
          <div className="flex justify-between items-center max-w-[90%] mx-auto text-[0.8vw] font-semibold text-[#333333] text-transform uppercase tracking-wide leading-4">
            <a
              href="#"
              className="relative group"
            >
              Chankaya
              <NavbarAnimation />
            </a>
            <a href="#" className="relative group">
              Solutions
              <NavbarAnimation />
            </a>
            <a href="#" className="relative group">
              Connect
              <NavbarAnimation />
            </a>
            <a href="#" className="relative group">
              Contact
              <NavbarAnimation />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
