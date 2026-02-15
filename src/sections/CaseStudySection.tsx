import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Clock, Target, BarChart3, Download, ExternalLink, Github } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const caseStudyData = {
    title: "Transaction Fraud Detection Dashboard",
    subtitle: "Real-time fraud detection system for financial transactions",
    metrics: [
      { value: "100K+", label: "Transactions Analyzed", icon: BarChart3 },
      { value: "95%", label: "Detection Accuracy", icon: Target },
      { value: "40%", label: "Manual Review Time Reduced", icon: Clock },
      { value: "78%", label: "Night-time Fraud Pattern Discovery", icon: TrendingUp }
    ],
    problem: "Financial institutions were struggling with high false positive rates in fraud detection, leading to excessive manual review times and poor customer experience.",
    approach: [
      "Implemented Isolation Forest and Local Outlier Factor algorithms for anomaly detection",
      "Created time-based risk scoring system focusing on transaction patterns",
      "Built interactive Power BI dashboard with real-time monitoring capabilities",
      "Developed automated alert system for high-risk transactions"
    ],
    results: [
      "Reduced false positives by 35% while maintaining 95% detection accuracy",
      "Decreased manual review time from 45 minutes to 15 minutes per case",
      "Identified critical pattern: 78% of fraudulent transactions occurred between 10 PM - 6 AM",
      "Enabled proactive monitoring with automated risk scoring"
    ],
    technologies: ["Python", "scikit-learn", "Power BI", "SQL", "Pandas", "NumPy", "Isolation Forest"],
    githubUrl: "https://github.com/adityabharti83/fraud-detection-dashboard"
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
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Case Study
          </h2>
        </div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400">
          {caseStudyData.title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {caseStudyData.subtitle}
        </p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {caseStudyData.metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center"
            >
              <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Problem Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800"
      >
        <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
          The Problem
        </h3>
        <p className="text-lg text-red-800 dark:text-red-200 leading-relaxed">
          {caseStudyData.problem}
        </p>
      </motion.div>

      {/* Approach */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Our Approach
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudyData.approach.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {approach}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
      >
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6">
          Results & Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudyData.results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <p className="text-green-800 dark:text-green-200 leading-relaxed">
                {result}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-3">
          {caseStudyData.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Dashboard Preview Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Preview
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="text-center space-y-4">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto" />
            <p className="text-gray-500 dark:text-gray-400">
              Interactive Power BI Dashboard Preview
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Real-time fraud detection metrics and visualizations
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white"
      >
        <h3 className="text-2xl font-bold mb-4">
          Want to See the Full Implementation?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Explore the complete source code, documentation, and detailed methodology 
          behind this fraud detection system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={caseStudyData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-semibold transition-all duration-300">
            <Download className="w-5 h-5" />
            <span>Download Case Study PDF</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
