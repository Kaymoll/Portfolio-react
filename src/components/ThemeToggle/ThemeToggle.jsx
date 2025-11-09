import { motion } from 'framer-motion';

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
  return (
    <motion.div 
      className="toggle-switch"
      whileTap={{ opacity: 0.8 }}
    >
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={!isDarkTheme}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </motion.div>
  );
};

export default ThemeToggle;
