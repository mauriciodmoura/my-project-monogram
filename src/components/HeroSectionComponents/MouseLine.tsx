import React from 'react';
import Image from 'next/image';
import useMouseScrollPosition from '@/hooks/useMouseScrollPosition';
import pathPoints from '@/utils/pathPoints';

const MouseLine: React.FC = () => {
  const mousePosition = useMouseScrollPosition(pathPoints);

  return (
    <>
      <div className="relative mt-16 ml-107">
        <Image
          src="/assets/svg/computer-mouse-scrollwheel.svg"
          alt="Mouse"
          style={{ position: 'absolute', left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
          width={27}
          height={36}
        />
      </div>
      <div className="absolute sm:mt-202 s:mt-100 mt-160 lg:mt-168 xl:ml-96 sm:ml-100 ml-100">
        <Image
          src="/assets/svg/mouse-line.svg"
          alt="Line"
          width={80}
          height={540}
          layout="fixed"
        />
      </div>
    </>
  );
};

export default MouseLine;
