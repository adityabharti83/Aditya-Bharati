import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Clock, Target, BarChart3, ArrowRight, Zap } from 'lucide-react';

export const CaseStudyHighlight: React.FC = () => {
  const caseStudy = {
    title: "Fraud Detection System",
    tagline: "From 100K+ transactions to actionable insights",
    problem: {
      title: "The Challenge",
      description: "Financial institutions were struggling with overwhelming false positives in fraud detection systems. Manual review teams were spending 45+ minutes per case, leading to poor customer experience and operational inefficiencies. The existing system had a 78% false positive rate, causing alert fatigue and missed genuine fraud patterns."
    },
    approach: {
      title: "Our Approach",
      steps: [
        {
          title: "Data Analysis & Feature Engineering",
          description: "Analyzed 100K+ transaction records to identify temporal patterns, behavioral indicators, and risk factors. Discovered that 78% of fraudulent transactions occurred between 10 PM - 6 AM.",
          icon: BarChart3
        },
        {
          title: "Advanced Machine Learning",
          description: "Implemented Isolation Forest and Local Outlier Factor algorithms with time-based risk scoring. Created ensemble method combining multiple models for improved accuracy.",
          icon: TrendingUp
        },
        {
          title: "Real-time Dashboard Development",
          description: "Built interactive Power BI dashboard with automated alerts, risk scoring visualization, and performance monitoring for fraud analysts.",
          icon: Shield
        }
      ]
    },
    results: [
      { 
        metric: "95%", 
        label: "Detection Accuracy", 
        improvement: "+15% from baseline",
        icon: Target,
        description: "Maintained high detection rate while dramatically reducing false positives"
      },
      { 
        metric: "40%", 
        label: "Manual Review Time Reduced", 
        improvement: "From 45 to 15 minutes",
        icon: Clock,
        description: "Significant operational efficiency gain for fraud analysis team"
      },
      { 
        metric: "78%", 
        label: "Night-time Pattern Discovery", 
        improvement: "Previously unknown pattern",
        icon: TrendingUp,
        description: "Enabled targeted monitoring during high-risk periods"
      },
      { 
        metric: "35%", 
        label: "False Positive Reduction", 
        improvement: "Major accuracy improvement",
        icon: Zap,
        description: "Reduced alert fatigue and improved analyst productivity"
      }
    ],
    technologies: ["Python", "scikit-learn", "Power BI", "SQL", "Pandas", "NumPy", "Isolation Forest"]
  };

  return (
    <section id="case-study" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Case Study
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Deep dive into my most impactful data analysis project.
          </p>
        </motion.div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-white">{caseStudy.title}</h3>
              </div>
              <p className="text-accent text-lg font-medium">{caseStudy.tagline}</p>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-red-500">{caseStudy.problem.title}</h4>
              </div>
              <p className="text-white leading-relaxed">{caseStudy.problem.description}</p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white">{caseStudy.approach.title}</h4>
              </div>
              
              <div className="space-y-4">
                {caseStudy.approach.steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-card border border-border rounded-lg flex items-center justify-center">
                        <StepIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-white mb-2">{step.title}</h5>
                        <p className="text-muted leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-accent/10 border border-accent/20 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-accent">Impact & Results</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => {
                  const ResultIcon = result.icon;
                  return (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="bg-card border border-border rounded-xl p-4"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <ResultIcon className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-white">{result.metric}</div>
                          <div className="text-sm text-muted">{result.label}</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted">{result.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Dashboard Preview */}
            <div className="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center"
                >
                  <BarChart3 className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Dashboard</h3>
                <p className="text-muted mb-4">Real-time fraud detection metrics and visualizations</p>
                
                {/* Mock Dashboard Elements */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-background rounded-lg p-3">
                    <span className="text-sm text-muted">Detection Rate</span>
                    <span className="text-lg font-bold text-primary">95%</span>
                  </div>
                  <div className="flex justify-between items-center bg-background rounded-lg p-3">
                    <span className="text-sm text-muted">False Positives</span>
                    <span className="text-lg font-bold text-accent">-35%</span>
                  </div>
                  <div className="flex justify-between items-center bg-background rounded-lg p-3">
                    <span className="text-sm text-muted">Avg Review Time</span>
                    <span className="text-lg font-bold text-white">15 min</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              LIVE DEMO
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
