
import React, { useState, useEffect } from 'react';

interface CyclingTextProps {
  textOptions: string[];
  interval?: number;
  className?: string;
}

const CyclingText: React.FC<CyclingTextProps> = ({ 
  textOptions, 
  interval = 5000, // Changed default to 5 seconds
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const transitionTime = 500; // 500ms for fade transition
    
    const timer = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // Wait for fade out, then change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setIsVisible(true);
      }, transitionTime);
      
    }, interval);
    
    return () => clearInterval(timer);
  }, [textOptions, interval]);

  return (
    <span 
      className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {textOptions[currentIndex]}
    </span>
  );
};

export default CyclingText;
