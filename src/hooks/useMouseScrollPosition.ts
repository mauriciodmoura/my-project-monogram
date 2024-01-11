import { useState, useEffect } from 'react';

const useMouseScrollPosition = (pathPoints: { x: number; y: number }[]) => {
  const [mousePosition, setMousePosition] = useState(pathPoints[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
      const acceleratedScrollLength = pathPoints.length + 150;
      const pointIndex = Math.min(
        Math.floor(scrollPercentage * acceleratedScrollLength),
        pathPoints.length - 1
      );
      setMousePosition(pathPoints[pointIndex]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathPoints]);

  return mousePosition;
};

export default useMouseScrollPosition;
