import React from 'react';
import Star from './star';

const StarField: React.FC = () => {
  const numStars = 10; // Fewer stars
  const width = window.innerWidth;
  const height = window.innerHeight;

  const stars = Array.from({ length: numStars }, (_, i) => (
    <Star key={i} width={width} height={height} />
  ));

  return <div className="star-field">{stars}</div>;
};

export default StarField;
