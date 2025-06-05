import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

const skills: Skill[] = [
  // Frontend
  { 
    name: 'React', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', 
    proficiency: 85, 
    category: 'frontend' 
  },
  { 
    name: 'TypeScript', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', 
    proficiency: 80, 
    category: 'frontend' 
  },
  { 
    name: 'Next.js', 
    icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', 
    proficiency: 75, 
    category: 'frontend' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', 
    proficiency: 82, 
    category: 'frontend' 
  },
  {
    name: 'Vue.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
    proficiency: 70,
    category: 'frontend'
  },
  {
    name: 'Redux',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    proficiency: 78,
    category: 'frontend'
  },
  // Backend
  { 
    name: 'Node.js', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', 
    proficiency: 80, 
    category: 'backend' 
  },
  { 
    name: 'Python', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', 
    proficiency: 78, 
    category: 'backend' 
  },
  { 
    name: 'PostgreSQL', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', 
    proficiency: 75, 
    category: 'backend' 
  },
  { 
    name: 'MongoDB', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', 
    proficiency: 77, 
    category: 'backend' 
  },
  {
    name: 'Express.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    proficiency: 79,
    category: 'backend'
  },
  {
    name: 'FastAPI',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
    proficiency: 72,
    category: 'backend'
  },
  // Tools & DevOps
  { 
    name: 'Git', 
    icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', 
    proficiency: 85, 
    category: 'tools' 
  },
  { 
    name: 'Docker', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', 
    proficiency: 75, 
    category: 'tools' 
  },
  { 
    name: 'AWS', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', 
    proficiency: 70, 
    category: 'tools' 
  },
  {
    name: 'Kubernetes',
    icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
    proficiency: 65,
    category: 'tools'
  },
  // AI/ML
  {
    name: 'TensorFlow',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    proficiency: 70,
    category: 'ai'
  },
  {
    name: 'PyTorch',
    icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
    proficiency: 65,
    category: 'ai'
  },
  {
    name: 'Scikit-learn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    proficiency: 75,
    category: 'ai'
  },
  {
    name: 'OpenCV',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg',
    proficiency: 68,
    category: 'ai'
  }
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      className="card-glass p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 relative">
          <motion.img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 text-right text-sm text-text/70">
        {skill.proficiency}%
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{
  title: string;
  skills: Skill[];
  delay: number;
}> = ({ title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold heading-gradient">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const toolsSkills = skills.filter((skill) => skill.category === 'tools');

  return (
    <section id="skills" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold heading-gradient mb-4">Technical Skills</h2>
        <p className="text-text/80 max-w-2xl mx-auto">
          Here's an overview of my technical skills and proficiency levels in various technologies and tools.
        </p>
      </motion.div>

      <div className="space-y-16">
        <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0} />
        <SkillCategory title="Backend Development" skills={backendSkills} delay={0.2} />
        <SkillCategory title="Tools & Technologies" skills={toolsSkills} delay={0.4} />
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-text/80 mb-6">
          Always learning and exploring new technologies to stay up-to-date with the latest trends.
        </p>
        <motion.a
          href="/resume.pdf"
          className="btn-primary inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Full Resume</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Skills; 