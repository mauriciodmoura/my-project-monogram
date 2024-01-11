import React from 'react';
import Title from '@/base-components/Title';
import RectangleGroup from '@/components/HeroSectionComponents/RectangleGroup';

const MarkupSection: React.FC = () => {
    return (
      <section className="flex flex-col items-center relative">
        <div className="flex justify-center xl:justify-start 2xl:container w-full px-24 mx-auto relative">
          <div className="flex flex-col items-center lg:items-start gap-16">
            <div className="flex gap-11">
              <Title Tag="h1" Text="markup" />
            </div>
            <p className="text-[2rem] sm:text-[2.4rem] max-w-[48rem] font-normal text-[#414141] leading-base text-center xl:text-left">
              When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.
            </p>
            <div className="relative w-full mt-[8rem] h-[50rem]">
              <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocBlue left-[13rem] rotate-[-16.91deg]"></div>
              <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocRed left-[-5.8rem] top-[20rem] rotate-[14.16deg]"></div>
              <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocYellow right-[-10rem] top-[25rem] rotate-[-58.55deg]"></div>
            </div>
          </div>
          <div className="hidden z-[-1] xl:flex gap-x-[4.6rem] absolute right-0">
            <div className="pt-[17rem] relative z-10 w-[28rem] h-[63rem]">
              <div className="w-[28rem] h-[47rem] absolute top-[48rem] left-[16.4rem] [backdrop-filter:blur(120px)] rounded-[6.8rem] z-1"></div>
            </div>
            <RectangleGroup />
            <div className="relative w-[28rem] h-[66rem]">
              <div className="w-full h-full absolute top-[30rem] left-[15.8rem] [backdrop-filter:blur(120px)] rounded-[6.8rem]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default MarkupSection;