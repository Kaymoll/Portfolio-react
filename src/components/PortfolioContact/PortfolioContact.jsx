import { motion } from 'framer-motion';

const PortfolioContact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="portfolio-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 20px rgba(124, 142, 231, 0.3)", 
        transition: { duration: 0.3 } 
      }}
    >
      <h3>En savoir plus ?</h3>
      <p>Découvrez mes projets depuis mon profil Github ou visiter mon CV pour mieux me connaître</p>

      <motion.div 
        className="portfolio-buttons"
        variants={staggerContainer}
      >
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Kaymoll"
          className="btn-primary"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-block' }}
        >
          🔗 Profil Github
        </motion.a>
        
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kaymoll.github.io/CvCam/"
          className="btn-secondary"
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -3,
            backgroundColor: "var(--border-color)",
            color: "var(--color-btn1)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-block' }}
        >
          🔗 Mon e-CV
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioContact;
