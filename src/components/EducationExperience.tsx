import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';

const educationData = {
  degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
  institution: "Pimpri Chinchwad College of Engineering",
  period: "2021 – 2025",
  location: "Pune, Maharashtra"
};

const experienceData = [
  {
    title: "Data Analytics Projects",
    description: "Developed interactive dashboards and performed data analysis on real-world datasets using Python, SQL, and Power BI.",
    tools: ["Python", "SQL", "Power BI", "Excel"]
  },
  {
    title: "Machine Learning Implementation",
    description: "Built classification models and predictive analytics solutions for fraud detection and customer behavior analysis.",
    tools: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    title: "Dashboard Development",
    description: "Created comprehensive BI dashboards with real-time data visualization and business intelligence insights.",
    tools: ["Power BI", "DAX", "Data Modeling", "ETL"]
  }
];

const certificationData = [
  {
    title: "Data Analytics Professional Certification",
    organization: "AccioJobs",
    period: "January 2026",
    location: "Completed offline in Pune",
    description: "Comprehensive data analytics program covering Python, SQL, Power BI, and machine learning fundamentals."
  },
  {
    title: "Data Science Pro Certification",
    organization: "Physics Wallah",
    period: "2024",
    location: "Online",
    description: "Advanced data science program with focus on practical applications and real-world projects."
  },
  {
    title: "HackerRank 5-Star Rating",
    organization: "HackerRank",
    period: "2024",
    location: "Online",
    description: "Achieved 5-star rating in Python and SQL programming challenges."
  }
];

export const EducationExperience: React.FC = () => {
  return (
    <section id="education-experience" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Education & Experience
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Academic background and professional development in data analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background border border-border rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {educationData.degree}
                </h4>
                <p className="text-primary font-medium mb-3">
                  {educationData.institution}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-muted">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{educationData.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{educationData.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background border border-border rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="border-l-2 border-accent/30 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-accent/20 text-accent rounded-lg text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background border border-border rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certificationData.map((cert, index) => (
                <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-purple-500 font-medium mb-2">
                    {cert.organization}
                  </p>
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center space-x-2 text-muted">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{cert.location}</span>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
