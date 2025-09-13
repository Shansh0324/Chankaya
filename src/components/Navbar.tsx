"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavbarAnimation from "@/Animations/NavbarAnimation";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const topLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useGSAP(() => {
    if (!navRef.current) return;
    
    // Set initial state immediately to prevent flash
    gsap.set(navRef.current, { 
      xPercent: 100,
      visibility: 'visible'
    });
    gsap.set(linksRef.current, {
      autoAlpha: 0,
      x: -20,
    });

    // Create timelines but keep them paused
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
      
    // Mark as initialized
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => {
    // Only allow toggling after initialization
    if (!isInitialized) return;
    
    if (isOpen) {
      tl.current?.reverse();
      iconTl.current?.reverse();
    } else {
      tl.current?.play();
      iconTl.current?.play();
    }
    setIsOpen(!isOpen);
  };

  const sections = ["Solutions", "Connect", "Contact"];

  return (
    <>
      {/* Desktop Navigation */}
      <section className="hidden lg:block">
        <div className="container">
          <nav className="py-6 lg:py-8 relative">
            <div className="flex justify-between items-center max-w-[90%] mx-auto text-[0.8vw] font-semibold text-[#333333] uppercase tracking-wide leading-4">
              <a href="#" className="relative group">
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

      {/* Mobile/Tablet Navigation */}
      <div className="lg:hidden">
        {/* Logo - Fixed positioning */}
        <div className="fixed z-40 top-4 left-4 md:left-6">
          <a href="#" className="cursor-pointer">
            <h1 className="text-xl md:text-2xl text-[#333333]">
              Ch<i className="font-mazius ">a</i>nk<i className="font-mazius ">a</i>y<i className="font-mazius">a</i>
            </h1>
          </a>
        </div>

        {/* Mobile Menu */}
        <nav
          ref={navRef}
          className="fixed z-50 flex flex-col justify-center w-full h-full px-6 uppercase bg-black text-white/80 py-20 gap-y-8"
          style={{ visibility: 'hidden' }}
        >
          <div className="flex flex-col text-4xl gap-y-4 md:text-5xl lg:text-6xl font-gilroy">
            {sections.map((section: string, index: number) => (
              <div 
                key={index} 
                ref={(el: HTMLDivElement | null) => {
                  linksRef.current[index] = el;
                }}
              >
                <a
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                  href="#"
                >
                  {section}
                </a>
              </div>
            ))}
          </div>
        </nav>

        {/* Hamburger Button */}
        <div
          className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-12 h-12 md:w-16 md:h-16 top-4 right-4 md:right-6"
          onClick={toggleMenu}
          style={{
            clipPath: showBurger
              ? "circle(50% at 50% 50%)"
              : "circle(0% at 50% 50%)",
          }}
        >
          <span
            ref={topLineRef}
            className="block w-6 h-0.5 bg-white rounded-full origin-center md:w-8"
          />
          <span
            ref={bottomLineRef}
            className="block w-6 h-0.5 bg-white rounded-full origin-center md:w-8"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
