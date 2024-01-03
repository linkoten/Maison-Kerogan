import React, { useEffect, useState } from 'react';

const ScrollRevealDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById('brunch');

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;

        // Si l'élément 'brunch' est dans la vue et isVisible est toujours false, setIsVisible à true
        if (targetPosition <= window.innerHeight && targetPosition >= 0 && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appeler handleScroll au montage pour déterminer la visibilité initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      className={`opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`}
      style={{ transitionProperty: 'opacity' }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealDiv;