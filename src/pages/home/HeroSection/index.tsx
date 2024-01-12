import React from 'react';
import Title from '@/components/Title';
import HeroGraphic from '@/components/HeroGraphic';
import MouseLine from '@/components/MouseLine';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-60 pb-240 flex justify-center lg:justify-start relative xl:container px-8 mx-auto">
          <HeroGraphic />
      <div className="flex flex-col gap-16 z-10">
        <div className="flex gap-[1rem] lg:-tracking-h1 lg:gap-11 flex-col lg:flex-row items-center lg:items-start">
          <Title Tag="h1" Text="jamstack" className="lg:-tracking-h1 font-black"  />
          <p className="leading-[1] -tracking-p lg:leading-title gradient-text font-black text-7xl sm:text-8xl lg:text-9xl bg-gradient-to-r from-orange to-violet bg-clip-border [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            101
          </p>
        </div>
        <p className="lg:pl-24 text-base max-w-[55rem] font-light text-greyLight lg:text-greyLight leading-base text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, 
          tincidunt proin nunc viverra tristique tempor, 
          ipsum. At lectus vel pretium tempor ut dui vivamus sit.
          <MouseLine />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;