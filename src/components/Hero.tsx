"use client";

import { AnimatedSection } from "./AnimatedSection";
import { useTypewriter } from "../hooks/useTypewriter";

const Hero = () => {
  const typewriterText = useTypewriter({
    words: [
      "Flutter Developer",
      "Mobile App Developer",
      "Frontend Developer",
      "Software Engineer",
      "Full Stack Developer",
    ],
    speed: 100,
    deleteSpeed: 80,
    delayBetweenWords: 2000,
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-sky-200/40 dark:from-blue-500/20 dark:to-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-200/40 to-purple-200/40 dark:from-sky-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-blue-200/30 dark:from-purple-500/15 dark:to-blue-500/15 rounded-full blur-2xl animate-spin-slower"></div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full opacity-30 animate-float shadow-lg"></div>
      <div
        className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full opacity-30 animate-float shadow-lg"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-bounce-slow shadow-lg"></div>
      <div className="absolute top-32 left-32 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-32 w-10 h-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-40 animate-spin-slow"></div>

      {/* Geometric Patterns */}
      <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-blue-300/30 dark:border-blue-600/30 rotate-45 animate-spin-slower"></div>
      <div className="absolute bottom-1/3 right-10 w-12 h-12 border-2 border-sky-300/30 dark:border-sky-600/30 rotate-12 animate-bounce-slow"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Enhanced Animated Name */}
          <AnimatedSection animation="slide-up">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-sky-600 dark:from-blue-400 dark:via-purple-400 dark:to-sky-400 bg-clip-text text-transparent animate-gradient-x bg-300% filter drop-shadow-sm">
                  Billal Hossan
                </span>
              </h1>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-sky-600/20 blur-xl rounded-lg -z-10 animate-pulse"></div>
            </div>
          </AnimatedSection>

          {/* Enhanced Role with Typewriter Effect */}
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="relative">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 min-h-[1.5em] flex items-center justify-center">
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent relative">
                  {typewriterText}
                  <span className="animate-pulse text-blue-600 dark:text-blue-400 ml-1">
                    |
                  </span>
                </span>
              </h2>
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 via-blue-600/10 to-purple-600/10 blur-lg rounded-lg -z-10"></div>
            </div>
          </AnimatedSection>

          {/* Enhanced Tagline */}
          <AnimatedSection animation="slide-up" delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              I build{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                modern
              </span>
              ,{" "}
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                scalable
              </span>
              , and{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                user-friendly
              </span>{" "}
              mobile and web applications.
            </p>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection animation="slide-up" delay={500}>
            <div className="flex flex-wrap justify-center gap-8 py-8">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "5+", label: "Technologies Mastered" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-200/50 dark:border-gray-600/50">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Enhanced CTA Buttons */}
          <AnimatedSection animation="slide-up" delay={600}>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-sky-500 dark:from-blue-500 dark:via-purple-500 dark:to-sky-400 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Hire Me</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-sky-600 dark:from-blue-600 dark:via-purple-600 dark:to-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 min-w-[200px]"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>View Projects</span>
                  <span className="transform group-hover:translate-y-[-2px] transition-transform duration-300">
                    ↓
                  </span>
                </span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <AnimatedSection animation="fade-in" delay={800}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Scroll Down
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
