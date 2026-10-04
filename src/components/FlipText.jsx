import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['Quests', 'Illustrations'];

export default function FlipText({ className = '' }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentWord = WORDS[wordIndex];

  return (
    <span className={`inline-flex flip-text-container ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          className="inline-flex highlight-blue"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {currentWord.split('').map((char, index) => (
            <motion.span
              key={`${currentWord}-${index}`}
              className="inline-block cursor-pointer"
              style={{ transformStyle: 'preserve-3d', display: 'inline-block' }}
              initial={{ rotateX: -90, opacity: 0, y: 8 }}
              animate={{
                rotateX: hoveredIndex === index ? 360 : 0,
                opacity: 1,
                y: hoveredIndex === index ? -8 : 0,
              }}
              exit={{ rotateX: 90, opacity: 0, y: -8 }}
              transition={{
                duration: 0.4,
                delay: hoveredIndex === index ? 0 : index * 0.045,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
