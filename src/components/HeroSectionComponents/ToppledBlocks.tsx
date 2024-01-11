import useScrollEffect from '@/hooks/useScrollEffect';
import React from 'react';

const ToppledBlocks: React.FC = () => {
  const { ref, scrollEffect } = useScrollEffect();

  const blueBlockTransform = `translate(${(1 - scrollEffect) * 10}px, ${(1 - scrollEffect) * 10}px) rotate(${(1 - scrollEffect) * -16.91}deg)`;
  const redBlockTransform = `translate(${(1 - scrollEffect) * 10}px, ${(1 - scrollEffect) * 10}px) rotate(${(1 - scrollEffect) * 14.16}deg)`;
  const yellowBlockTransform = `translate(${(1 - scrollEffect) * 10}px, ${(1 - scrollEffect) * 10}px) rotate(${(1 - scrollEffect) * -58.55}deg)`;

  return (
    <div ref={ref} className="relative w-full mt-[8rem] h-[50rem] z-10">
      <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blockBlue left-[13rem] transition-transform duration-500" style={{ transform: blueBlockTransform }}></div>
      <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blockRed left-[-5.8rem] top-[20rem] transition-transform duration-500" style={{ transform: redBlockTransform }}></div>
      <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blockYellow right-[-10rem] top-[25rem] transition-transform duration-500" style={{ transform: yellowBlockTransform }}></div>
    </div>
  );
};

export default ToppledBlocks;
