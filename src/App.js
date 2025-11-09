import { motion } from 'framer-motion';
import './styles/global.css';
import useTheme from './hooks/useTheme';
import Header from './components/Header/Header';
import AnimatedTitle from './components/AnimatedTitle/AnimatedTitle';
import SimpleProjectCarousel from './components/SimpleProjectCarousel/SimpleProjectCarousel';
import { projects } from './data/projects';
import PortfolioContact from './components/PortfolioContact/PortfolioContact';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

      {/* Portfolio Section */}
      <motion.section 
        id="portfolio" 
        className="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <AnimatedTitle />

        {/* Mes projets */}
        <SimpleProjectCarousel projects={projects} />

        {/* Portfolio contact */}
        <PortfolioContact />
      </motion.section>

      {/* Footer */}
      <Footer />

      <Analytics />
    </div>
  );
}

export default App;
