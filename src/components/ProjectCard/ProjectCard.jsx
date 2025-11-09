import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/ProjectCard.css';

const ProjectCard = ({ projectData, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`single-project-card ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`}>
      <motion.div 
        className={`project-card-content ${isExpanded ? 'expanded' : ''}`}
        layout
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        
        {/* État initial - Vue centrée */}
        {!isExpanded && (
          <motion.div 
            className="card-initial-view"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image du projet */}
            <motion.div 
              className="card-image-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={projectData.image} 
                alt={projectData.title}
                className="card-image-preview"
              />
            </motion.div>
            
            <h3 className="card-title-center">{projectData.title}</h3>
            <div className="card-divider"></div>
            
            <motion.button 
              className="card-details-button" 
              onClick={toggleExpanded}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Détails du projet
            </motion.button>
          </motion.div>
        )}

        {/* État étendu - Vue avec layout horizontal */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="card-expanded-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="card-left-section">
                {/* Image du projet - complètement visible */}
                <motion.div 
                  className="card-image-expanded-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <img 
                    src={projectData.image} 
                    alt={projectData.title}
                    className="card-image-expanded"
                  />
                </motion.div>

                <div className="card-skills-container">
                  {projectData.skills?.map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="card-skill-badge"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="card-right-section">
                <motion.h3 
                  className="card-title-right"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {projectData.title}
                </motion.h3>
                <motion.div 
                  className="card-divider-right"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                ></motion.div>
                
                <motion.div 
                  className="card-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  dangerouslySetInnerHTML={{ __html: projectData.description }}
                />
                
                <motion.div 
                  className="card-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {projectData.link?.url ? (
                    <a href={projectData.link.url} target="_blank" rel="noopener noreferrer">
                      <u>{projectData.link.text}</u>
                    </a>
                  ) : (
                    <u>{projectData.link}</u>
                  )}
                </motion.div>
                
                <motion.button 
                  className="card-return-button" 
                  onClick={toggleExpanded}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Retour
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
