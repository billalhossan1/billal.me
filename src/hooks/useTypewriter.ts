"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = ({
  words,
  speed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 2000,
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          // Deleting characters
          setCurrentText(currentWord.substring(0, currentText.length - 1));

          if (currentText.length === 1) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          // Typing characters
          setCurrentText(currentWord.substring(0, currentText.length + 1));

          if (currentText === currentWord) {
            setIsPaused(true);
          }
        }
      },
      isPaused ? delayBetweenWords : isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    isPaused,
    words,
    speed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return currentText;
};
