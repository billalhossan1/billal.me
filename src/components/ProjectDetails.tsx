"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectDetailsProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    features: string[];
    challenges?: string[];
    solutions?: string[];
    githubLink: string;
    demoLink: string;
    type: string;
    images?: string[];
    timeline?: string;
    role?: string;
    teamSize?: number;
    achievements?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl max-h-[90vh] w-full mx-4 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Section */}
              <div className="bg-gradient-to-br from-blue-600 to-sky-500 text-white p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-white/20 rounded-full mb-3">
                      {project.type}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                      {project.longDescription || project.description}
                    </p>
                  </div>
                </div>
                
                {/* Project Meta Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                  {project.timeline && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-200 mb-1">Timeline</h4>
                      <p className="text-white">{project.timeline}</p>
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-200 mb-1">My Role</h4>
                      <p className="text-white">{project.role}</p>
                    </div>
                  )}
                  {project.teamSize && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-200 mb-1">Team Size</h4>
                      <p className="text-white">{project.teamSize} members</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Key Features */}
                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full mr-3"></span>
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </section>

                    {/* Technology Stack */}
                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full mr-3"></span>
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </section>

                    {/* Achievements */}
                    {project.achievements && project.achievements.length > 0 && (
                      <section>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                          <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full mr-3"></span>
                          Key Achievements
                        </h3>
                        <div className="space-y-3">
                          {project.achievements.map((achievement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700"
                            >
                              <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Project Images/Screenshots */}
                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full mr-3"></span>
                        Project Screenshots
                      </h3>
                      {project.images && project.images.length > 0 ? (
                        <div className="space-y-4">
                          {/* Main Image Display */}
                          <div className="relative">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                              <Image
                                src={project.images[activeImageIndex]}
                                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                                width={800}
                                height={320}
                                className="w-full h-80 object-cover"
                              />
                              {/* Fallback placeholder */}
                              <div className="hidden w-full h-80 bg-gradient-to-br from-blue-100 to-sky-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                  <svg className="w-16 h-16 text-blue-400 dark:text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <p className="text-gray-500 dark:text-gray-400">Loading Screenshot...</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Navigation Arrows */}
                            {project.images.length > 1 && (
                              <>
                                <button
                                  onClick={() => setActiveImageIndex((prev) => 
                                    prev === 0 ? project.images!.length - 1 : prev - 1
                                  )}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => setActiveImageIndex((prev) => 
                                    prev === project.images!.length - 1 ? 0 : prev + 1
                                  )}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </>
                            )}

                            {/* Image Counter */}
                            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                              {activeImageIndex + 1} / {project.images.length}
                            </div>
                          </div>

                          {/* Thumbnail Gallery */}
                          {project.images.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                              {project.images.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => setActiveImageIndex(index)}
                                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                    activeImageIndex === index
                                      ? 'border-blue-500 scale-105'
                                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                                  }`}
                                >
                                  <Image
                                    src={image}
                                    alt={`${project.title} thumbnail ${index + 1}`}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
                          <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-sky-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center mb-4">
                            <div className="text-center">
                              <svg className="w-16 h-16 text-blue-400 dark:text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="text-gray-500 dark:text-gray-400">Project Screenshots</p>
                              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Coming Soon</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </section>

                    {/* Challenges & Solutions */}
                    {project.challenges && project.solutions && (
                      <section>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                          <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full mr-3"></span>
                          Challenges & Solutions
                        </h3>
                        <div className="space-y-4">
                          {project.challenges.map((challenge, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                            >
                              <div className="mb-3">
                                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  Challenge
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{challenge}</p>
                              </div>
                              {project.solutions && project.solutions[index] && (
                                <div>
                                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Solution
                                  </h4>
                                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.solutions[index]}</p>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View Source Code
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;