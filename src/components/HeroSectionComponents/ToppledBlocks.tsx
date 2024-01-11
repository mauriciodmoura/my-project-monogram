import useScrollEffect from '@/hooks/useScrollEffect';
import React from 'react';

const ToppledBlocks: React.FC = () => {
  const { ref, scrollEffect } = useScrollEffect();
  const blueBlockTransform = `translateY(${scrollEffect * 100}px) rotate(${scrollEffect * -16.91}deg)`;
  const redBlockTransform = `translateY(${scrollEffect * 200}px) rotate(${scrollEffect * 14.16}deg)`;
  const yellowBlockTransform = `translateY(${scrollEffect * 300}px) rotate(${scrollEffect * -58.55}deg)`;

  return (
    <div ref={ref} className="relative w-full mt-[8rem] h-[50rem]">
      <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocBlue left-[13rem] transition-transform duration-500" style={{ transform: blueBlockTransform }}></div>
      <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocRed left-[-5.8rem] top-[20rem] transition-transform duration-500" style={{ transform: redBlockTransform }}></div>
      <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocYellow right-[-10rem] top-[25rem] transition-transform duration-500" style={{ transform: yellowBlockTransform }}></div>
    </div>
  );
};

export default ToppledBlocks;
