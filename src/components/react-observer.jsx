'use client'

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const reactObserver = () => {
    const { ref: prestationRef, inView: rocketIsVisible } = useInView()

    const animateChildElements = () => {
        if (prestationRef.current) {
          const childElements = prestationRef.current.querySelectorAll('*');
      
          for (let childElement of childElements) {
            childElement.style.opacity = rocketIsVisible ? 1 : 0;
            childElement.style.transform = rocketIsVisible ? 'translate(0)' : 'translate(-100%)';
          }
        }
      };

  useEffect(() => {
    if (rocketIsVisible) {
      animateChildElements();
    }
  }, [rocketIsVisible]);

  console.log(rocketIsVisible)
    return (
        <div>
            
        </div>
    );
};

export default reactObserver;