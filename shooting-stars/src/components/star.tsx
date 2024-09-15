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
    }, 4000); // Reduce star frequency by increasing duration
    return () => clearInterval(interval);
  }, []);

  const resetStar = () => {
    setPosition({
      x: Math.random() * width,
      y: Math.random() * height,
      delay: Math.random() * 8, // Increase delay for fewer stars at once
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
