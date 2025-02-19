'use client';
import { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 100;
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100; 
        const left = Math.random() * 100;
        const delay = Math.random() * 2; 
        const duration = Math.random() * 5 + 5; 
        newStars.push({ size, top, left, delay, duration });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className={`fixed inset-0 overflow-hidden z-20 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animation: `moveStar ${star.duration}s linear ${star.delay}s infinite, ${isDarkMode ? '' : 'hueRotate 10s linear infinite'}`,
          }}
        />
      ))}
      
    </div>
  );
};

export default StarBackground;