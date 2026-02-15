import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalData';

const timelineData = [
  {
    type: 'education' as const,
    title: 'B.Tech in Computer Engineering',
    organization: 'Pimpri Chinchwad College of Engineering',
    period: '2021 – 2025',
    location: 'Pune, Maharashtra',
    description: 'Specialized in Computer Engineering with focus on data structures and algorithms.',
    color: 'blue' as const
  },
  {
    type: 'experience' as const,
    title: 'Project Intern',
    organization: 'Physics Wallah',
    period: 'Nov 2024 – Apr 2025',
    location: 'Remote',
    description: 'Developed Flask/Django applications with personalization, scalability, and optimized deployment.',
    color: 'green' as const
  },
  {
    type: 'certification' as const,
    title: 'Data Analytics Professional Certification',
    organization: 'AccioJobs',
    period: 'January 2026',
    location: 'Online',
    description: 'Comprehensive data analytics program covering Python, SQL, Power BI, and machine learning fundamentals.',
    color: 'purple' as const
  },
  {
    type: 'certification' as const,
    title: 'Data Science Pro Certification',
    organization: 'Physics Wallah',
    period: '2024',
    location: 'Online',
    description: 'Advanced data science program with focus on practical applications and real-world projects.',
    color: 'purple' as const
  },
  {
    type: 'certification' as const,
    title: 'HackerRank 5-Star Rating',
    organization: 'HackerRank',
    period: '2024',
    location: 'Online',
    description: 'Achieved 5-star rating in Python and SQL programming challenges.',
    color: 'purple' as const
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'education': return GraduationCap;
    case 'experience': return Briefcase;
    case 'certification': return Award;
    default: return GraduationCap;
  }
};

const getColorClass = (color: string) => {
  switch (color) {
    case 'blue': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
    case 'green': return 'bg-green-500/20 text-green-500 border-green-500/30';
    case 'purple': return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
    default: return 'bg-primary/20 text-primary border-primary/30';
  }
};

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-card">
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
            My academic journey and professional development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = getIcon(item.type);
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${getColorClass(item.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
                    }}
                    className={`ml-20 md:ml-0 md:w-5/12 bg-background border border-border rounded-xl p-6 transition-all duration-300 ${
                      isLeft ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {item.organization}
                        </p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClass(item.color)}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 mb-3 text-sm text-muted">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
