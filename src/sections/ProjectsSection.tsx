import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, TrendingUp, BarChart3, Shield } from 'lucide-react';
import { projects } from '../data/personalData';
import { Project, NavigationSection } from '../types';

interface ProjectsSectionProps {
  onSectionChange?: (section: NavigationSection) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSectionChange }) => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('fraud')) return Shield;
    if (title.toLowerCase().includes('sales') || title.toLowerCase().includes('retail')) return BarChart3;
    return TrendingUp;
  };

  const ProjectCard: React.FC<{ project: Project; index: number; featured?: boolean }> = ({ 
    project, 
    index, 
    featured = false 
  }) => {
    const Icon = getProjectIcon(project.title);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
          featured ? 'lg:col-span-2' : ''
        }`}
      >
        {/* Project Header */}
        <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <Icon className="w-16 h-16 text-white/80" />
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>Featured</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Real-world data analysis projects showcasing fraud detection, retail analytics, 
          and predictive modeling using Python, SQL, and modern BI tools.
        </p>
      </motion.div>

      {/* Featured Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            featured={true}
          />
        ))}
      </motion.div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index + featuredProjects.length} 
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Want to see detailed case studies?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Dive deep into my fraud detection project with detailed methodology, 
          results, and interactive dashboard screenshots.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onSectionChange && onSectionChange('caseStudy')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            View Case Study
          </button>
          <button 
            onClick={() => onSectionChange && onSectionChange('contact')}
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-semibold transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>
    </div>
  );
};
