import React from 'react';
import Image from 'next/image';
import useMouseScrollPosition from '@/hooks/useMouseScrollPosition';
import pathPoints from '@/utils/pathPoints';

const MouseLine: React.FC = () => {
  const mousePosition = useMouseScrollPosition(pathPoints);

  return (
    <>
      <div className="relative mt-16 ml-107">
        {/* Mouse */}
        <Image
          src="/assets/svg/computer-mouse-scrollwheel.svg"
          alt="Mouse"
          style={{ position: 'absolute', left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
          width={27}
          height={36}
        />
      </div>
      <div className="relative -mt-6 ml-100">
        {/* Line */}
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
