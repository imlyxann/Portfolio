import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../hooks/useTheme'; // Importation du hook

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { theme } = useTheme(); // Utilisation du hook pour accéder au thème

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500"
      whileHover={{ scale: 1.05 }}
    >
      <div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-90'
            : 'bg-gradient-to-b from-transparent via-white/50 to-white opacity-0 group-hover:opacity-90'
        } transition-opacity duration-500 z-10`}
      />

      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          title={project.title}
          className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-500"
        />
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex flex-col justify-end p-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <h3
          className={`text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          } transform translate-y-8`}
        >
          {project.title}
        </h3>
        <p
          className={`mb-10 transform translate-y-8 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4 mb-10 transform translate-y-8">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className={`${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
