import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Database, HardDrive, Wrench, Code } from 'lucide-react';

const skillsData = {
  'Data Analysis': {
    icon: Database,
    skills: ['Python', 'SQL', 'Excel', 'Exploratory Data Analysis', 'Data Cleaning'],
    emoji: '📊'
  },
  'Data Visualization': {
    icon: BarChart3,
    skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Dashboard Design'],
    emoji: '📈'
  },
  'Machine Learning': {
    icon: Brain,
    skills: ['Logistic Regression', 'Classification Models', 'Feature Engineering', 'Model Evaluation'],
    emoji: '🤖'
  },
  'Databases': {
    icon: HardDrive,
    skills: ['MySQL', 'Joins', 'Aggregations', 'Window Functions'],
    emoji: '🗄️'
  },
  'Libraries': {
    icon: Code,
    skills: ['Pandas', 'NumPy', 'Scikit-learn'],
    emoji: '🧰'
  },
  'Tools': {
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
    emoji: '🛠️'
  }
};

export const Skills: React.FC = () => {
  const SkillCard: React.FC<{ category: string; data: any; index: number }> = ({ category, data, index }) => {
    const Icon = data.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1 
        }}
        whileHover={{ 
          translateY: -6,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
          borderColor: "rgba(59, 130, 246, 0.3)"
        }}
        className="relative bg-card border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 group"
        style={{ 
          backgroundColor: '#111827',
          borderColor: 'rgba(255,255,255,0.08)',
          borderRadius: '16px'
        }}
      >
        {/* Category Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center space-x-2">
              <span>{category}</span>
              <span className="text-lg">{data.emoji}</span>
            </h3>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-2">
          {data.skills.map((skill: string, skillIndex: number) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 + skillIndex * 0.05 
              }}
              className="flex items-center space-x-2 text-muted group-hover:text-white transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <span className="text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>

        {/* Hover Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
        />
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            SKILLS
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Technologies I use to turn raw data into insights
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, data], index) => (
            <SkillCard 
              key={category} 
              category={category} 
              data={data} 
              index={index} 
            />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card border border-border rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.values(skillsData).reduce((acc, curr) => acc + curr.skills.length, 0)}+
              </div>
              <div className="text-muted">Total Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                6
              </div>
              <div className="text-muted">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                1+
              </div>
              <div className="text-muted">Year Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
