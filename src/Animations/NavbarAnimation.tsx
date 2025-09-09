import React from "react";

const NavbarAnimation = () => {
  return (
    <div className="">
      <span className="absolute py-0 bottom-0 right-0 h-[1.5px] w-full bg-black transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-0"></span>
      {/* line1 (default hidden, expands on hover) */}
      <span className="absolute py-0 bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] delay-300 group-hover:w-full"></span>
  </div>
  );
};

export default NavbarAnimation;
