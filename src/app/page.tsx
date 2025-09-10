"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AnimatePresence } from 'framer-motion';
import AIInputBar from "@/components/AIInputBar";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Preloader from "@/components/PreLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
     <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <AIInputBar />
          <About />
          <Gallery />
        </>
      )}
     </>
  );
}
