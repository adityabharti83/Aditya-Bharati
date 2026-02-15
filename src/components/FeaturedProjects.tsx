import React from 'react';
import { motion } from 'framer-motion';
import { Github, BarChart3, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { projects } from '../data/personalData';

const getProjectIcon = (title: string) => {
  if (title.toLowerCase().includes('fraud')) return Shield;
  if (title.toLowerCase().includes('sales') || title.toLowerCase().includes('retail')) return BarChart3;
  return TrendingUp;
};

export const FeaturedProjects: React.FC = () => {
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
    const Icon = getProjectIcon(project.title);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          translateY: -6,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
          borderColor: "rgba(59, 130, 246, 0.3)"
        }}
        className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
        style={{ 
          borderRadius: '16px'
        }}
      >
        {/* Project Image with Overlay */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <Icon className="w-12 h-12 text-white/80 group-hover:text-white transition-colors duration-300" />
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex items-end justify-center pb-4"
          >
            <span className="text-white text-sm font-medium">View Project</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-4">
            {project.description.split('.')[0]}.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-background border border-border rounded-lg text-xs text-muted group-hover:border-primary group-hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-background border border-border rounded-lg text-xs text-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-background hover:bg-primary/10 border border-border hover:border-primary rounded-lg text-muted hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 group-hover:text-white" />
                <span className="text-sm group-hover:text-white">Code</span>
              </motion.a>
            )}
            
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">View</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            SELECTED PROJECTS
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real-world problems I solved using data analysis and machine learning
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
