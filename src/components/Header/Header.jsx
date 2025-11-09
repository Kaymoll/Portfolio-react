import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = ({ isDarkTheme, toggleTheme }) => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="logo"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Camille Lucidarme
      </motion.div>
      
      <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    </motion.header>
  );
};

export default Header;
