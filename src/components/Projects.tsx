"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    features: string[];
    challenges?: string[];
    solutions?: string[];
    achievements?: string[];
    images?: string[];
    githubLink: string;
    demoLink: string;
    type: string;
    timeline?: string;
    role?: string;
    teamSize?: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce Flutter App",
      description:
        "A complete e-commerce mobile application with product catalog, shopping cart, user authentication, and payment integration.",
      longDescription:
        "This comprehensive e-commerce mobile application was built using Flutter and Dart, featuring a complete shopping experience from product browsing to payment processing. The app integrates with Firebase for backend services and includes secure payment gateway integration for seamless transactions.",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase",
        "API Integration",
        "Payment Gateway",
        "State Management",
        "REST API",
      ],
      features: [
        "Product Catalog with Search & Filters",
        "Shopping Cart Management",
        "User Authentication & Profiles",
        "Secure Payment Integration",
        "Order History & Tracking",
        "Push Notifications",
        "Wishlist Functionality",
        "Product Reviews & Ratings",
      ],
      challenges: [
        "Implementing secure payment gateway integration",
        "Managing complex state across multiple screens",
        "Optimizing app performance with large product catalogs",
        "Handling offline functionality for better user experience",
      ],
      solutions: [
        "Used industry-standard payment APIs with proper encryption and validation",
        "Implemented Provider pattern for efficient state management",
        "Added lazy loading, caching, and image optimization techniques",
        "Implemented local storage with sync capabilities for offline support",
      ],
      achievements: [
        "Reduced app loading time by 40% through optimization",
        "Achieved 4.8/5 user rating on app stores",
        "Processed over 10,000+ successful transactions",
        "Maintained 99.9% uptime with robust error handling",
      ],
      githubLink: "https://github.com/billalhossan1/ecomers-app",
      demoLink: "#",
      type: "Mobile App",
      timeline: "6 months",
      role: "Full-Stack Mobile Developer",
      teamSize: 3,
    },
    {
      id: 2,
      title: "Tutoring/Online Classes App",
      description:
        "Educational platform for online tutoring with video calling, assignment management, and progress tracking.",
      longDescription:
        "A comprehensive educational platform designed to connect students with tutors through seamless video calling, interactive assignment management, and detailed progress tracking. Built with Flutter and powered by Supabase for real-time capabilities.",
      techStack: ["Flutter", "Supabase", "Video SDK", "Real-time Database", "WebRTC", "Cloud Storage"],
      features: [
        "HD Video Calling with Screen Share",
        "Interactive Assignment Management",
        "Real-time Progress Tracking",
        "Multi-user Chat System",
        "Calendar & Scheduling",
        "File Sharing & Whiteboard",
        "Payment Integration for Tutors",
        "Student Performance Analytics",
      ],
      challenges: [
        "Ensuring stable video calls across different network conditions",
        "Creating responsive real-time chat with file sharing",
        "Building complex scheduling system with timezone support",
        "Implementing secure payment system for tutoring sessions",
      ],
      solutions: [
        "Used WebRTC with fallback servers for optimal video quality",
        "Implemented WebSocket connections with message queuing",
        "Built timezone-aware scheduling with conflict detection",
        "Integrated Stripe API with escrow functionality for secure payments",
      ],
      achievements: [
        "Served 500+ active students and tutors",
        "Maintained 98% video call success rate",
        "Reduced scheduling conflicts by 85%",
        "Achieved 4.7/5 user satisfaction rating",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
      timeline: "8 months",
      role: "Lead Mobile Developer",
      teamSize: 4,
    },
    {
      id: 3,
      title: "Chatting App using Supabase",
      description:
        "Real-time messaging application with group chats, media sharing, and online status indicators.",
      longDescription:
        "A modern real-time messaging application built with Flutter and Supabase, featuring instant messaging, group chats, media sharing, and comprehensive user presence management. Designed with a focus on user experience and real-time performance.",
      techStack: [
        "Flutter",
        "Supabase",
        "Real-time Database",
        "Authentication",
        "WebSocket",
        "Cloud Storage",
      ],
      features: [
        "Real-time Messaging",
        "Group Chat Creation & Management",
        "Media & File Sharing",
        "Online/Offline Status Indicators",
        "Message Encryption",
        "Push Notifications",
        "Voice Messages",
        "Message Search & History",
      ],
      challenges: [
        "Handling real-time message delivery at scale",
        "Implementing end-to-end message encryption",
        "Managing group chat permissions and roles",
        "Optimizing media upload and compression",
      ],
      solutions: [
        "Used Supabase real-time subscriptions with efficient data fetching",
        "Implemented AES encryption for message security",
        "Created role-based permission system with admin controls",
        "Added automatic image compression and progressive loading",
      ],
      achievements: [
        "Delivered messages with <100ms latency",
        "Handled 10,000+ concurrent users",
        "Achieved 99.5% message delivery rate",
        "Reduced media loading time by 60%",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
      timeline: "4 months",
      role: "Full-Stack Developer",
      teamSize: 2,
    },
    {
      id: 4,
      title: "Google Maps Delivery Route App",
      description:
        "Delivery optimization app with route planning, real-time tracking, and delivery status updates.",
      longDescription:
        "An intelligent delivery management system that optimizes delivery routes using Google Maps API, provides real-time GPS tracking, and manages delivery status updates. Built for delivery companies to improve efficiency and customer satisfaction.",
      techStack: [
        "Flutter",
        "Google Maps API",
        "GPS Tracking",
        "Route Optimization",
        "Firebase",
        "REST API",
      ],
      features: [
        "Smart Route Planning & Optimization",
        "Real-time GPS Tracking",
        "Delivery Status Updates",
        "GPS Navigation Integration",
        "Driver Performance Analytics",
        "Customer Notifications",
        "Delivery History & Reports",
        "Multi-stop Route Management",
      ],
      challenges: [
        "Optimizing routes for multiple delivery stops",
        "Ensuring accurate real-time location tracking",
        "Managing battery consumption for GPS tracking",
        "Handling offline scenarios in remote areas",
      ],
      solutions: [
        "Implemented Dijkstra's algorithm with Google Routes API",
        "Used background location services with smart batching",
        "Optimized GPS sampling rates based on movement patterns",
        "Created offline mode with location queuing and sync",
      ],
      achievements: [
        "Reduced delivery time by 30% on average",
        "Improved delivery accuracy to 98%",
        "Decreased fuel costs by 25%",
        "Enhanced customer satisfaction by 40%",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
      timeline: "5 months",
      role: "Mobile App Developer",
      teamSize: 3,
    },
    {
      id: 5,
      title: "Voice-Control Fan & Light Project",
      description:
        "IoT project using Arduino Uno for voice-controlled home automation including fans, lights, and appliances.",
      longDescription:
        "An innovative IoT home automation system built with Arduino Uno that enables voice control of household appliances including fans, lights, and other electrical devices. Features custom voice recognition and wireless connectivity for smart home integration.",
      techStack: ["Arduino Uno", "C++", "Voice Recognition", "IoT", "Sensors", "Bluetooth", "Mobile App"],
      features: [
        "Voice Command Recognition",
        "Smart Home Automation",
        "Sensor Integration (Temperature, Motion)",
        "Remote Control via Mobile App",
        "Scheduling & Timer Functions",
        "Energy Usage Monitoring",
        "Custom Voice Commands",
        "Multi-device Control",
      ],
      challenges: [
        "Achieving accurate voice recognition in noisy environments",
        "Managing power consumption for always-listening device",
        "Ensuring reliable wireless connectivity",
        "Creating user-friendly mobile interface for IoT control",
      ],
      solutions: [
        "Implemented noise filtering algorithms and wake word detection",
        "Used sleep modes and optimized power management",
        "Added multiple connectivity options (WiFi, Bluetooth) with auto-reconnect",
        "Developed intuitive mobile app with voice and manual controls",
      ],
      achievements: [
        "Achieved 95% voice recognition accuracy",
        "Reduced home energy consumption by 20%",
        "Created modular system supporting 20+ devices",
        "Successfully demonstrated at university tech fair",
      ],
      githubLink: "#",
      demoLink: "#",
      type: "IoT Project",
      timeline: "3 months",
      role: "IoT Developer & Hardware Engineer",
      teamSize: 2,
    },
    {
      id: 6,
      title: "Real Estate Finder App",
      description:
        "Comprehensive real estate platform for searching apartments and villas with detailed property information, Google Maps integration, and subscription features.",
      longDescription:
        "A full-featured real estate application that allows users to search and explore apartments and villas with comprehensive property details. The app includes floor plan visualization, price information, availability status, Google Maps integration for location viewing, and subscription-based premium features for enhanced property search capabilities.",
      techStack: [
        "Flutter",
        "Dart", 
        "Google Maps API",
        "Firebase",
        "REST API",
        "Payment Integration",
        "Geolocation",
        "Cloud Storage"
      ],
      features: [
        "Advanced Property Search & Filters",
        "Apartment & Villa Listings",
        "Floor Plan Visualization",
        "Real-time Price Information",
        "Property Availability Status",
        "Google Maps Integration",
        "Location-based Property Search",
        "Detailed Property Information",
        "Subscription Management",
        "Saved Properties & Favorites",
        "Property Comparison Tool",
        "Interactive Image Gallery"
      ],
      challenges: [
        "Implementing efficient property search with multiple filters",
        "Integrating complex Google Maps functionality with custom markers",
        "Managing large property datasets with smooth performance",
        "Creating responsive floor plan visualization system",
        "Implementing subscription-based access control"
      ],
      solutions: [
        "Built advanced search engine with indexed database queries",
        "Used Google Maps SDK with custom clustering and marker management",
        "Implemented lazy loading and caching for optimal performance",
        "Created interactive floor plan viewer with zoom and pan capabilities",
        "Developed secure subscription system with payment gateway integration"
      ],
      achievements: [
        "Indexed 10,000+ properties across multiple cities",
        "Achieved sub-2 second search response time",
        "Implemented 99.9% accurate location mapping",
        "Maintained 4.6/5 user rating for search accuracy",
        "Successfully processed 500+ subscription payments"
      ],
      images: [
        "/images/real-estate/a.jpg",
        "/images/real-estate/b.jpg",
        "/images/real-estate/c.jpg",
        "/images/real-estate/d.jpg",
        "/images/real-estate/e.jpg",
        "/images/real-estate/f.jpg",
        "/images/real-estate/g.jpg",
        "/images/real-estate/h.jpg",
        "/images/real-estate/i.jpg"
      ],
      githubLink: "#",
      demoLink: "#",
      type: "Mobile App",
      timeline: "10 months",
      role: "Full-Stack Mobile Developer",
      teamSize: 4,
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
      longDescription:
        "A modern, fully responsive portfolio website showcasing my projects and skills. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring smooth animations, dark mode support, and optimized performance. Includes a working contact form and project showcase system.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Framer Motion", "Vercel"],
      features: [
        "Fully Responsive Design",
        "Smooth Scroll Animations",
        "Working Contact Form",
        "SEO Optimized",
        "Dark/Light Mode Toggle",
        "Project Showcase Modal",
        "Performance Optimized",
        "Mobile-First Approach",
      ],
      challenges: [
        "Creating smooth animations without performance impact",
        "Implementing accessible dark mode toggle",
        "Optimizing images and assets for fast loading",
        "Building responsive design that works on all devices",
      ],
      solutions: [
        "Used Framer Motion with performance best practices",
        "Implemented system-preference aware dark mode with smooth transitions",
        "Added Next.js Image optimization and lazy loading",
        "Used CSS Grid and Flexbox with mobile-first responsive design",
      ],
      achievements: [
        "Achieved 98+ Lighthouse performance score",
        "100% accessibility compliance",
        "Sub-2 second loading time",
        "Fully responsive across all device sizes",
      ],
      githubLink: "https://github.com/billalhossan1",
      demoLink: "#",
      type: "Web Application",
      timeline: "2 months",
      role: "Frontend Developer",
      teamSize: 1,
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
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-sky-600 transition-all transform hover:scale-105"
                    >
                      View Details
                    </button>
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

      {/* Project Details Modal */}
      <ProjectDetails
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
};

export default Projects;
