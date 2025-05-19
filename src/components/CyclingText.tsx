
import React, { useState, useEffect } from 'react';

interface CyclingTextProps {
  textOptions: string[];
  interval?: number;
  className?: string;
}

const CyclingText: React.FC<CyclingTextProps> = ({ 
  textOptions, 
  interval = 3000, 
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [textOptions, interval]);

  return (
    <span className={`transition-opacity duration-500 ${className}`}>
      {textOptions[currentIndex]}
    </span>
  );
};

export default CyclingText;
