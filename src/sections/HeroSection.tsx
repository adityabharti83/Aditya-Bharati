import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalData';
import { NavigationSection } from '../types';

interface HeroSectionProps {
  onSectionChange?: (section: NavigationSection) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_Bharti_Data_Analyst.pdf';
    link.download = 'Aditya_Bharti_Data_Analyst.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewProjects = () => {
    if (onSectionChange) {
      onSectionChange('projects');
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-[600px] space-y-12">
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Aditya
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
            {personalInfo.title}
          </p>
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Data analyst who transforms complex datasets into actionable business insights. 
          Specialized in fraud detection, predictive modeling, and creating interactive dashboards.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            onClick={viewProjects}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>View My Work</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={downloadResume}
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Download Resume</span>
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {[
          { number: '100K+', label: 'Transactions Analyzed' },
          { number: '40%', label: 'Manual Review Time Reduced' },
          { number: '95%', label: 'Fraud Detection Accuracy' },
          { number: '10+', label: 'Data Projects Completed' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Explore my projects</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};
