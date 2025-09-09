"use client";
import React, { useState, useEffect } from 'react';

interface StylizedLetter {
  word: string;
  positions: number[];
}

interface TypewriterEffectProps {
  words: string[];
  stylizedLetters?: StylizedLetter[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  stylizedLetters = [],
  typeSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 1000,
  loop = true
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Remove characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => 
            loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      } else {
        // Add characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords, loop]);

  const renderStylizedText = (text: string) => {
    const currentWord = words[currentWordIndex];
    const stylizedConfig = stylizedLetters.find(config => config.word === currentWord);
    
    if (!stylizedConfig || stylizedConfig.positions.length === 0) {
      return text;
    }

    return text.split('').map((char, index) => {
      const isStylized = stylizedConfig.positions.includes(index);
      return (
        <span
          key={`${currentWordIndex}-${index}`}
          className={isStylized ? 'font-mazius' : ''}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <span className="inline-block">
      {renderStylizedText(currentText)}
    </span>
  );
};

export default TypewriterEffect;