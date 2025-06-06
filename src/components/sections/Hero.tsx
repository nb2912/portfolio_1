import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const codeSnippets = [
    {
      language: 'JavaScript',
      code: 'const createInnovation = () => {\n  return passion + creativity;\n}'
    },
    {
      language: 'Python',
      code: 'def solve_problems():\n  return experience + expertise'
    },
    {
      language: 'TypeScript',
      code: 'interface Developer {\n  skills: never[];\n  learning: true;\n}'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,205,196,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(78,205,196,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-section relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="relative inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <span className="relative">Hi, my name is</span>
                  <span className="absolute -right-1 -top-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold"
              >
                <span className="heading-gradient">Nihal</span>
                <span className="block text-text/80 mt-2">Software Engineer</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-text/60"
              >
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'AI/ML Enthusiast',
                      'Problem Solver',
                      'Tech Innovator'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-text/70 text-lg max-w-lg leading-relaxed"
            >
              I build exceptional digital experiences that combine cutting-edge technology
              with intuitive design. Let's create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary group relative overflow-hidden text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline group relative overflow-hidden text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-background">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={snippet.language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="card-glass p-6 mb-6 relative backdrop-blur-xl hover:backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {snippet.language}
                  </span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <pre className="text-sm text-text/90 font-mono bg-black/20 p-4 rounded-lg">
                  <code>{snippet.code}</code>
                </pre>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div className="flex flex-col items-center gap-2">
          <span className="text-text/50 text-sm">Scroll Down</span>
          <motion.svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 