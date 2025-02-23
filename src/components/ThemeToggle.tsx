import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 p-5 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:shadow-3xl transform transition-all duration-300 z-50 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-800"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative w-7 h-7"
      >
        <motion.div
          initial={false}
          animate={{ opacity: theme === 'dark' ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Moon className="w-7 h-7" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Sun className="w-7 h-7" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}