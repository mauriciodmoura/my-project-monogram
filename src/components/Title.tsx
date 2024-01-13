import { TitleProps } from '@/types/title';
import React from 'react';

const Title: React.FC<TitleProps> = ({ Tag, Text, className }) => {
  return (
    <div className="title font-black text-7xl sm:text-8xl lg:text-9xl">
      {/* Title */}
      {React.createElement(Tag, { className: `leading-1 lg:leading-title ${className}` }, Text)}
    </div>
  );
};

export default Title;
