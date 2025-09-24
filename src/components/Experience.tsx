"use client";

import { AnimatedSection } from "./AnimatedSection";

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer (Intern)",
      company: "Personal Projects & Learning",
      period: "2023 - Present",
      description:
        "Worked on small app development projects, API integration, and CRUD operations. Gained hands-on experience with Flutter framework and mobile app development.",
      skills: ["Flutter", "Dart", "API Integration", "Firebase", "Supabase"],
    },
    {
      title: "Arduino Developer",
      company: "IoT Projects",
      period: "2022 - 2023",
      description:
        "Developed voice-controlled home automation systems using Arduino Uno. Created projects for controlling fans, lights, and other appliances through voice commands.",
      skills: ["Arduino", "C++", "IoT", "Hardware Programming"],
    },
    {
      title: "Computer Science Student",
      company: "Dhaka International University",
      period: "2021 - Present",
      description:
        "Pursuing B.Sc. in Computer Science & Engineering. Learning core programming concepts, data structures, algorithms, and software development principles.",
      skills: [
        "C",
        "C++",
        "Data Structures",
        "Algorithms",
        "Software Engineering",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My journey in software development and technology
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-sky-500">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full animate-pulse-slow"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={index * 0.2}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 animate-bounce-slow"></div>

                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="block md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 0.2}
            >
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full animate-pulse-slow"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-600 to-sky-500"></div>

                <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/6 w-24 h-24 bg-sky-500/5 dark:bg-sky-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-500/5 dark:bg-indigo-400/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-500/5 dark:bg-purple-400/10 rounded-full animate-spin-slow"></div>
      </div>
    </section>
  );
};

export default Experience;
