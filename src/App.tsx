import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import portfolioData from './data/portfolio.json';
import { ProjectCard } from './components/ProjectCard';
import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-space transition-colors duration-500">    
        <ThemeToggle/>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
          <div className="text-center relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mb-12 mx-auto"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 absolute inset-0 animate-pulse" />
              <img
                src={portfolioData.profile.image}
                alt={portfolioData.profile.name}
                className="w-48 h-48 rounded-full relative z-10 object-cover"
              />
            </motion.div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-7xl font-bold mb-6 tracking-tighter"
            >
              {portfolioData.profile.name}
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl text-gray-600 dark:text-gray-300 mb-12"
            >
              {portfolioData.profile.title}
            </motion.h2>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-8"
            >
              {Object.entries(portfolioData.profile.social).map(([platform, link], index) => (
                <motion.a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="transform hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-4 bg-gray-100 dark:bg-gray-900 rounded-full"
                >
                  {platform === 'github' && <Github className="w-8 h-8" />}
                  {platform === 'linkedin' && <Linkedin className="w-8 h-8" />}
                  {platform === 'twitter' && <Twitter className="w-8 h-8" />}
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="w-12 h-12 animate-bounce" />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-4 bg-gray-50 dark:bg-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-center mb-24 tracking-tighter"
            >
              Mes Projets
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <AnimatePresence>
                {portfolioData.projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-center mb-24 tracking-tighter"
            >
              Mes Compétences
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {portfolioData.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="px-10 py-4 bg-gray-100 dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;