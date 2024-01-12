import React from 'react';
import Title from '@/components/Title';
import BlockGraphic from '@/components/BlockGraphic';
import Wall from '../../../../public/assets/svg/Wall-of-blocks.svg';
import ToppledBlocks from '@/components/ToppledBlocks';

const MarkupSection: React.FC = () => {

    return (
      <section className="flex flex-col items-center relative">
            <BlockGraphic />
        <div className="flex justify-center lg:justify-start xl:container w-full px-24 mx-auto relative">
          <div className="flex flex-col items-center lg:items-start gap-16">
            <div className="flex gap-11">
              <Title Tag="h1" Text="markup" />
            </div>
            <p className="text-[2rem] text-h1 sm:text-[2.4rem] max-w-[48rem] font-light text-greyMedium leading-base text-center lg:text-left">
              When ready for deployment, a static-site generator such as Astro or Next.js 
              is used to compile the website. The end result is a collection of pre-rendered HTML 
              pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.
            </p>
            <ToppledBlocks />          
          </div>
          <div className="hidden z-[-1] xl:flex gap-x-[4.6rem] absolute right-0">
            <div className="pt-[17rem] relative z-10 w-[28rem] h-[63rem]">
              <div className="w-[28rem] h-[47rem] absolute top-[48rem] left-[16.4rem] [backdrop-filter:blur(120px)] rounded-[6.8rem] z-1"></div>
            </div>
            <div className="relative w-[28rem] h-[66rem]">
              <div className="w-full h-full absolute top-[30rem] left-[15.8rem] [backdrop-filter:blur(120px)] rounded-[6.8rem]"></div>
            </div>
          </div>
        </div>
          <div className="bg-white relative w-full overflow-hidden flex justify-center">
          <Wall />
        </div>
      </section>
    );
  };

export default MarkupSection;

