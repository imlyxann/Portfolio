import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="group relative overflow-hidden rounded-3xl bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500"
>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10" />
    
    {/* Image Container */}
    <div className="aspect-[16/10] overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
        src={project.image}
        alt={project.title}
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
      <h3 className="text-5xl font-bold mb-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        {project.title}
      </h3>
      <p className="text-gray-200 mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-xl">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-4 mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
        {project.tags.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group/link flex items-center justify-center gap-2 w-full py-3 bg-white text-black hover:bg-gray-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150 text-xl font-medium rounded-xl"
      >
        View Project
        <ExternalLink className="w-6 h-6 transition-transform duration-300 group-hover/link:translate-x-1" />
      </motion.a>
    </motion.div>
  </motion.div>
  );
}