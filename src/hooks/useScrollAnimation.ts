import { useState, useEffect } from 'react';

const useScrollAnimation = (startPosition: number, speed: number) => {
  const [position, setPosition] = useState(startPosition);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newPosition = Math.max(0, startPosition - scrollY * speed);
      setPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [startPosition, speed]);

  return position;
};

export default useScrollAnimation;
