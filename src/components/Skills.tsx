"use client";

import { AnimatedSection } from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const Skills = () => {
  const { elementRef: skillsRef, isVisible: skillsVisible } =
    useScrollAnimation(0.1);
  const { elementRef: techRef, isVisible: techVisible } =
    useScrollAnimation(0.1);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "Dart", level: 90 },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "Cross-platform Development", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Supabase", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "API Integration", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "FVM", level: 80 },
        { name: "Arduino", level: 70 },
        { name: "MS Office", level: 90 },
      ],
    },
  ];

  const techIcons = [
    {
      name: "Flutter",
      image: "/skills/flutter.png",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Dart",
      image: "/skills/dart.png",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "C++",
      image: "/skills/c++.png",
      color: "from-yellow-500 to-orange-400",
    },
    {
      name: "Firebase",
      image: "/skills/firebase.png",
      color: "from-orange-500 to-red-400",
    },
    {
      name: "Supabase",
      image: "/skills/supabase.png",
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "GitHub",
      image: "/skills/github.png",
      color: "from-gray-700 to-gray-500",
    },
    {
      name: "Arduino",
      emoji: "🤖",
      color: "from-teal-500 to-cyan-400",
    },
    {
      name: "VS Code",
      image: "/skills/vs code.png",
      color: "from-blue-600 to-purple-500",
    },
    {
      name: "Git",
      emoji: "🌿",
      color: "from-red-500 to-orange-400",
    },
    {
      name: "CI/CD",
      emoji: "⚙️",
      color: "from-purple-500 to-indigo-400",
    },
    {
      name: "REST API",
      image: "/skills/rest_api.png",
      color: "from-blue-400 to-cyan-300",
    },
    {
      name: "TypeScript",
      image: "/skills/type_script.png",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Node.js",
      emoji: "📗",
      color: "from-green-600 to-green-400",
    },
    {
      name: "MongoDB",
      emoji: "🍃",
      color: "from-green-500 to-green-300",
    },
    {
      name: "Next.js",
      emoji: "⚫",
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "Docker",
      emoji: "�",
      color: "from-blue-500 to-blue-300",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>
        </AnimatedSection>

        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={categoryIndex}
              animation={
                categoryIndex % 2 === 0 ? "slide-in-left" : "slide-in-right"
              }
              delay={categoryIndex * 200}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-sky-500/20 p-8 rounded-xl shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 transform hover:scale-105 hover:border-sky-400/30">
                <h3 className="text-2xl font-bold text-sky-300 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sky-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r from-sky-500 to-blue-400 h-3 rounded-full transition-all duration-1000 ease-out ${
                            skillsVisible ? "" : "w-0"
                          }`}
                          style={{
                            width: skillsVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 200 + skillIndex * 100
                            }ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Rotating Tech Icons */}
        <AnimatedSection animation="slide-up" delay={600}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-sky-300 mb-4">
              Technologies I Master
            </h3>
            <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
              Constantly rotating through the latest technologies to build
              amazing solutions
            </p>

            {/* Enhanced Circular Layout */}
            <div className="relative flex items-center justify-center">
              <div ref={techRef} className="tech-orbit">
                {/* Outer decorative circle */}
                <div className="absolute inset-0 border-2 border-dashed border-sky-400/40 rounded-full animate-spin-slowest opacity-30"></div>

                {/* Middle decorative circle */}
                <div className="absolute inset-8 border border-blue-400/50 rounded-full animate-spin-reverse opacity-40"></div>
                
                {/* Center Circle */}
                <div
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl ${
                    techVisible ? "animate-pulse-slow" : ""
                  } relative overflow-hidden z-30`}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full opacity-50 animate-spin-slow"></div>

                  <span className="relative z-10 text-white text-4xl font-bold animate-bounce-slow">
                    ⚡
                  </span>

                  {/* Pulsing ring */}
                  <div className="absolute inset-0 border-4 border-sky-300/30 rounded-full animate-ping"></div>
                </div>
                
                {/* Technologies in orbit */}
                {techIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`tech-orbit-item ${
                      techVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    } transition-all duration-1000 ease-out cursor-pointer group`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center text-4xl shadow-xl hover:shadow-2xl transform hover:scale-125 transition-all duration-300 border-2 border-sky-400/20 hover:border-sky-300/50 relative overflow-hidden group-hover:animate-bounce`}
                    >
                      {/* Glowing effect */}
                      <div className="absolute inset-0 bg-sky-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {tech.image ? (
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="relative z-10 filter drop-shadow-lg"
                        />
                      ) : (
                        <span className="relative z-10 filter drop-shadow-lg text-4xl">
                          {tech.emoji}
                        </span>
                      )}

                      {/* Ripple effect */}
                      <div className="absolute inset-0 border-2 border-white rounded-full animate-ping opacity-0 group-hover:opacity-50"></div>
                    </div>

                    {/* Tech name label */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold tracking-wider text-sky-200 whitespace-nowrap bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-sky-500/20 transition-all duration-300">
                      {tech.name}
                    </div>
                  </div>
                ))}

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-float opacity-60"></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce-slow opacity-60"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-sky-300 rounded-full animate-pulse-slow opacity-60"></div>
              </div>
            </div>

            {/* Enhanced Tech Badges with Categories */}
            <div className="mt-20 space-y-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-sky-300 mb-8">
                  Additional Technologies
                </h4>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    category: "Frontend",
                    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
                  },
                  {
                    category: "Backend",
                    techs: ["Node.js", "MongoDB", "REST API"],
                  },
                  {
                    category: "Tools",
                    techs: ["VS Code", "Git", "FVM"],
                  },
                ].map((category, categoryIndex) => (
                  <AnimatedSection
                    key={category.category}
                    delay={1000 + categoryIndex * 200}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-sky-500/20 p-6 rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:scale-105 hover:border-sky-400/30">
                      <h5 className="text-lg font-bold text-center text-sky-300 mb-4">
                        {category.category}
                      </h5>
                      <div className="flex flex-wrap justify-center gap-2">
                        {category.techs.map((tech, index) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-300 font-semibold rounded-full shadow-sm hover:shadow-md transform hover:scale-110 transition-all duration-200 border border-sky-400/30 hover:border-sky-300/50 animate-bounce-slow text-sm backdrop-blur-sm"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
