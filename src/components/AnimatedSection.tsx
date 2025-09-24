"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "slide-up" | "slide-in-left" | "slide-in-right" | "fade-in";
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    switch (animation) {
      case "slide-up":
        return "animate-slide-up";
      case "slide-in-left":
        return "animate-slide-in-left";
      case "slide-in-right":
        return "animate-slide-in-right";
      case "fade-in":
        return "animate-pulse-slow";
      default:
        return "animate-slide-up";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-800 ${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};
