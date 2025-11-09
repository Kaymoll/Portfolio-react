import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>&copy; 2025 - Portfolio de Camille Lucidarme</p>
      <motion.div 
        className="footer-links"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/camillelucidarme/"
            style={{ color: '#959ECB', textDecoration: 'none' }}
            whileHover={{ color: '#7c8ee7', y: -1 }}
          >
            LinkedIn
          </motion.a> |{' '}
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Kaymoll"
            style={{ color: '#959ECB', textDecoration: 'none' }}
            whileHover={{ color: '#7c8ee7', y: -1 }}
          >
            Github
          </motion.a> |{' '}
          <motion.a
            href="mailto:camillelcd7@gmail.com"
            style={{ color: '#959ECB', textDecoration: 'none' }}
            whileHover={{ color: '#7c8ee7', y: -1 }}
          >
            E-mail
          </motion.a>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
