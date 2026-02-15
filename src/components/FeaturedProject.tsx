import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Shield, TrendingUp } from 'lucide-react';
import { projects } from '../data/personalData';

const getProjectIcon = (title: string) => {
  if (title.toLowerCase().includes('fraud')) return Shield;
  if (title.toLowerCase().includes('sales') || title.toLowerCase().includes('retail')) return BarChart3;
  return TrendingUp;
};

export const FeaturedProject: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="featured-project" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            FEATURED PROJECT
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real-world problems I solved using data analysis and machine learning
          </p>
        </motion.div>

        {/* Featured Project Cards - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const Icon = getProjectIcon(project.title);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
                className="bg-background border border-border rounded-3xl overflow-hidden transition-all duration-300 group cursor-pointer"
                style={{ padding: '32px' }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.description.split('.')[0]}.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-card border border-border rounded-lg text-xs text-muted group-hover:border-primary group-hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-card border border-border rounded-lg text-xs text-muted">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
