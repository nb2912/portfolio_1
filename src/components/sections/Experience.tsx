import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
  skills?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Senior Software Engineer',
    organization: 'Tech Innovators Inc.',
    period: '2022 - Present',
    description: [
      'Lead a team of 5 developers in building scalable web applications',
      'Implemented microservices architecture reducing system latency by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
    type: 'work',
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Full Stack Developer',
    organization: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client projects using React and Node.js',
      'Integrated AI/ML features improving user engagement by 25%',
      'Collaborated with UX team to implement responsive designs',
    ],
    type: 'work',
    skills: ['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow']
  },
  {
    title: 'Master of Computer Science',
    organization: 'Tech University',
    period: '2018 - 2020',
    description: [
      'Specialized in Artificial Intelligence and Machine Learning',
      'Published research paper on Neural Networks',
      'GPA: 3.9/4.0',
    ],
    type: 'education',
    skills: ['Machine Learning', 'Neural Networks', 'Python', 'Research']
  },
  {
    title: 'Bachelor of Computer Science',
    organization: 'State University',
    period: '2014 - 2018',
    description: [
      'Major in Computer Science with minor in Mathematics',
      "Dean's List all semesters",
      'Led University Coding Club',
    ],
    type: 'education',
    skills: ['Algorithms', 'Data Structures', 'Java', 'C++']
  },
];

const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-4 relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline line with animated gradient */}
      <motion.div 
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2 z-0"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative z-10`}>
        <motion.div 
          className="card-glass p-6 space-y-4 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="space-y-2 relative">
            <motion.span 
              className={`inline-block px-3 py-1 text-sm rounded-full ${
                item.type === 'work' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.type === 'work' ? 'Work Experience' : 'Education'}
            </motion.span>
            <h3 className="text-xl font-bold heading-gradient">{item.title}</h3>
            <p className="text-primary">{item.organization}</p>
            <p className="text-sm text-text/70">{item.period}</p>
          </div>

          <ul className="space-y-2 relative">
            {item.description.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="text-text/80 flex items-start"
              >
                <span className="mr-2 text-primary">•</span>
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Skills tags */}
          {item.skills && (
            <div className="flex flex-wrap gap-2 pt-2 relative">
              {item.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Animated timeline dot */}
      <motion.div
        className="w-4 h-4 relative z-20 md:absolute md:left-1/2 md:-translate-x-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full h-full bg-primary rounded-full"
          whileHover={{ scale: 1.2 }}
          animate={isHovered ? {
            boxShadow: '0 0 0 8px rgba(78, 205, 196, 0.2)',
          } : {
            boxShadow: '0 0 0 0px rgba(78, 205, 196, 0.2)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              My Journey
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold heading-gradient">Experience & Education</h2>
            <p className="text-text/80 max-w-2xl mx-auto text-lg">
              A timeline of my professional journey and academic achievements in technology and software development.
            </p>
          </div>

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="text-center space-y-2">
              <h4 className="text-3xl font-bold text-primary">4+</h4>
              <p className="text-text/70">Years Experience</p>
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-3xl font-bold text-primary">20+</h4>
              <p className="text-text/70">Projects Completed</p>
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-3xl font-bold text-primary">10+</h4>
              <p className="text-text/70">Technologies Mastered</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 