import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../../styles/Carousel.css';

const SimpleProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <div className="simple-carousel-container">
      {/* Navigation par points */}
      <div className="carousel-navigation">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Container principal de la carte */}
      <div className="carousel-main-container">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="carousel-card-wrapper"
        >
          <ProjectCard 
            projectData={projects[currentIndex]} 
            isActive={true}
          />
        </motion.div>
      </div>

      <div className="carousel-arrows">
        <button
          className="carousel-arrow left"
          onClick={goToPrevious}
          disabled={isTransitioning}
        >
          &lt;
        </button>
        <button
          className="carousel-arrow right"
          onClick={goToNext}
          disabled={isTransitioning}
        >
          &gt;
        </button>
      </div>

      {/* Indicateur de progression */}
      <div className="carousel-counter">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  );
};

export default SimpleProjectCarousel;
