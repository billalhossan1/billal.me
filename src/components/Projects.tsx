"use client";

import { AnimatedSection } from "./AnimatedSection";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Flutter App",
      description:
        "A complete e-commerce mobile application with product catalog, shopping cart, user authentication, and payment integration.",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase",
        "API Integration",
        "Payment Gateway",
      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "User Auth",
        "Payment Integration",
      ],
      githubLink: "https://github.com/billalhossan1/ecomers-app",
      demoLink: "#",
      type: "Mobile App",
    },
    {
      title: "Tutoring/Online Classes App",
      description:
        "Educational platform for online tutoring with video calling, assignment management, and progress tracking.",
      techStack: ["Flutter", "Supabase", "Video SDK", "Real-time Database"],
      features: [
        "Video Calling",
        "Assignment Management",
        "Progress Tracking",
        "Chat System",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
    },
    {
      title: "Chatting App using Supabase",
      description:
        "Real-time messaging application with group chats, media sharing, and online status indicators.",
      techStack: [
        "Flutter",
        "Supabase",
        "Real-time Database",
        "Authentication",
      ],
      features: [
        "Real-time Messaging",
        "Group Chats",
        "Media Sharing",
        "Online Status",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
    },
    {
      title: "Google Maps Delivery Route App",
      description:
        "Delivery optimization app with route planning, real-time tracking, and delivery status updates.",
      techStack: [
        "Flutter",
        "Google Maps API",
        "GPS Tracking",
        "Route Optimization",
      ],
      features: [
        "Route Planning",
        "Real-time Tracking",
        "Delivery Updates",
        "GPS Navigation",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
    },
    {
      title: "Voice-Control Fan & Light Project",
      description:
        "IoT project using Arduino Uno for voice-controlled home automation including fans, lights, and appliances.",
      techStack: ["Arduino Uno", "C++", "Voice Recognition", "IoT", "Sensors"],
      features: [
        "Voice Commands",
        "Home Automation",
        "Sensor Integration",
        "Remote Control",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "IoT Project",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Contact Form",
        "SEO Optimized",
      ],
      githubLink: "https://github.com/billalhossan1",
      demoLink: "#",
      type: "Web Application",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on that showcase my
              skills and passion for development
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 0.1}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group relative">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>

                {/* Project Type Badge */}
                <div className="relative p-6 pb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full mb-4 animate-bounce-slow">
                    {project.type}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:scale-105 transition-transform duration-200"
                          >
                            {feature}
                          </span>
                        ))}
                      {project.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.githubLink}
                      className="flex-1 text-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-sky-600 transition-all transform hover:scale-105"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View More Button */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow">
              View More Projects
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-40 h-40 bg-blue-500/5 dark:bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/12 w-32 h-32 bg-sky-500/5 dark:bg-sky-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-indigo-500/5 dark:bg-indigo-400/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-purple-500/5 dark:bg-purple-400/10 rounded-full animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default Projects;
