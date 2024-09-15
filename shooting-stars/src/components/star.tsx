import React, { useEffect, useState } from 'react';

interface StarProps {
  width: number;
  height: number;
}

const Star: React.FC<StarProps> = ({ width, height }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, delay: 0 });

  useEffect(() => {
    resetStar();
    const interval = setInterval(() => {
      resetStar();
    }, 3000); // shooting star duration
    return () => clearInterval(interval);
  }, []);

  const resetStar = () => {
    setPosition({
      x: Math.random() * width,
      y: Math.random() * height,
      delay: Math.random() * 5,
    });
  };

  return (
    <div
      className="star"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        animationDelay: `${position.delay}s`,
      }}
    />
  );
};

export default Star;
