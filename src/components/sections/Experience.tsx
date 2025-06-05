import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
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
  },
];

const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-4 relative`}
    >
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 z-0" />

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative z-10`}>
        <div className="card-glass p-6 space-y-4">
          <div className="space-y-2">
            <span className={`px-3 py-1 text-sm rounded-full ${
              item.type === 'work' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
            }`}>
              {item.type === 'work' ? 'Work Experience' : 'Education'}
            </span>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-primary">{item.organization}</p>
            <p className="text-sm text-text/70">{item.period}</p>
          </div>
          <ul className="space-y-2">
            {item.description.map((point, i) => (
              <li key={i} className="text-text/80 flex items-start">
                <span className="mr-2 text-primary">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="w-4 h-4 bg-primary rounded-full relative z-20 md:absolute md:left-1/2 md:-translate-x-1/2" />
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
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Experience & Education</h2>
            <p className="text-text/80 max-w-2xl mx-auto">
              My professional journey and academic background in technology and software development.
            </p>
          </div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 