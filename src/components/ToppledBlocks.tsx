import React, { useState, useEffect, useRef } from 'react';

const ToppledBlocks: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollEffect, setScrollEffect] = useState(0);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setScrollEffect(entry.isIntersecting ? 1 : 10);
      },
      { threshold: 0.1 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const blueBlockTransform = `rotate(${scrollEffect * -16.91}deg)`;
  const redBlockTransform = `rotate(${scrollEffect * 14.16}deg)`;
  const yellowBlockTransform = `rotate(${scrollEffect * -58.55}deg)`;

  return (
    <div ref={ref} className="relative w-full mt-32 h-100 sm:h-200 z-10">
      {/* Blocks */}
      <div className="absolute w-64 h-11 sm:w-128 sm:h-22 rounded-md sm:rounded-lg bg-blockBlue left-26 sm:left-52 transition-transform duration-500" style={{ transform: blueBlockTransform }}></div>
      <div className="absolute w-64 h-11 sm:w-128 sm:h-22 rounded-md sm:rounded-lg bg-blockRed -left-12 sm:-left-23 top-40 sm:top-80 transition-transform duration-500" style={{ transform: redBlockTransform }}></div>
      <div className="absolute w-64 h-11 sm:w-128 sm:h-22 rounded-md sm:rounded-lg bg-blockYellow left-60 sm:left-120 top-48 sm:top-100 transition-transform duration-500" style={{ transform: yellowBlockTransform }}></div>
    </div>
  );
};

export default ToppledBlocks;
