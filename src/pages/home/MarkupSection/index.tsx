import React from 'react';
import Title from '@/components/Title';
import BlockGraphic from '@/components/BlockGraphic';
import Wall from '../../../../public/assets/svg/wall-of-blocks.svg';
import ToppledBlocks from '@/components/ToppledBlocks';

const MarkupSection: React.FC = () => {

    return (
      <section className="flex flex-col items-center relative z-0">
            <BlockGraphic />
        <div className="flex justify-center lg:justify-start xl:container w-full px-24 mx-auto relative">
          {/* Markup and blocks */}
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
        </div>
        <div className="bg-white relative w-full overflow-hidden flex justify-center items-center">
          <Wall />
        </div>
      </section>
    );
  };

export default MarkupSection;

