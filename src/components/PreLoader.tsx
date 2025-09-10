"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

// Words to cycle through
const words = [
  "Hello",
  "Namaste",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

// Proper easing type
const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

// Animation variants
const opacity: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

const slideUp: Variants = {
  initial: { top: 0 },
  enter: { top: 0, transition: { duration: 0.8, ease } },
  exit: { top: "-100vh", transition: { duration: 0.8, ease, delay: 0.2 } },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  // Track window size
  useEffect(() => {
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  // Cycle through words
  useEffect(() => {
    if (index === words.length - 1) return;
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 1000 : 150);
    return () => clearTimeout(timer);
  }, [index]);

  // SVG Paths
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height + 300} 0 ${dimension.height}  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease, delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#141516] z-[9999]"
    >
      {dimension.width > 0 && (
        <>
          {/* Greeting Text */}
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute flex items-center text-white text-[clamp(24px,4vw,42px)] z-10 pointer-events-none"
          >
            {words[index]}
          </motion.p>

          {/* Animated SVG curve */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#141516"
              stroke="none"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
