import Image from 'next/image';
import React from 'react';

const BackgroundLines: React.FC = () => {
  return (
    <div className="absolute w-full h-full z-0 opacity-10">
      <div className="grid grid-cols-5 h-full max-w-[128rem] mx-auto">
        {/* first line */}
        <div className="absolute h-full" style={{ width: '2px' }}>
          <Image src="/assets/svg/line.svg" alt="Line" layout="fill" objectFit="cover" />
        </div>
        {/* second line */}
        <div className="absolute h-full" style={{ width: '2px', left: 'calc(50% - 15%)' }}>
          <Image src="/assets/svg/line.svg" alt="Line" layout="fill" objectFit="cover" />
        </div>
        {/* middle line */}
        <div className="absolute left-1/2 h-full" style={{ width: '2px' }}>
          <Image src="/assets/svg/line.svg" alt="Line" layout="fill" objectFit="cover" />
        </div>
        {/* fourth line */}
        <div className="absolute left-1/2 h-full" style={{ width: '2px', left: 'calc(50% + 15%)' }}>
          <Image src="/assets/svg/line.svg" alt="Line" layout="fill" objectFit="cover" />
        </div>
        {/* last line */}
        <div className="absolute h-full" style={{ width: '2px', left: '1580px' }}>
          <Image src="/assets/svg/line.svg" alt="Line" layout="fill" objectFit="cover" />
        </div>
        {/* spacer for responsive design */}
        <div className="absolute h-full" style={{ width: '2px', right: '5%', minWidth: 'calc(100vw - 1280px)' }} />
      </div>
    </div>
  );
};

export default BackgroundLines;
