"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export function Typewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
  className = "",
}: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = phrases[currentPhraseIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          setIsDeleting(true);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          return;
        }
      }
    }, isDeleting ? deletingSpeed : currentText === phrases[currentPhraseIndex] ? delayBetween : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[4px] h-[1em] bg-accent ml-2 rounded-full"
      />
    </span>
  );
}
