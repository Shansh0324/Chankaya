import React, { useRef } from 'react';
import styles from './style.module.scss';
import { useInView, motion, Variants } from 'framer-motion';
import RoundedButton from '../RoundedButton/RoundedButton';

export default function Description() {
  const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            const isAccentWord = word === "brands" || word === "digital" || word === "Together" || word === "status" || word === "cutting";
            return (
              <span key={index} className={styles.mask}>
                <motion.span 
                  variants={slideUp} 
                  custom={index} 
                  animate={isInView ? "open" : "closed"} 
                  key={index}
                  className={isAccentWord ? "font-mazius text-[#ff9800]" : ""}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <RoundedButton className={styles.button}>
            <p><i className='font-mazius '>About</i> me</p>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}

export const slideUp: Variants = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i }
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 }
  }
};

export const opacity: Variants = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};
