import React from 'react';
import Lines from '@/base-components/BackgroundLines';
import ReactIcon from '../../../../public/assets/svg/react.svg';
import SvelteIcon from '../../../../public/assets/svg/svelte.svg';
import NextIcon from '../../../../public/assets/svg/next.svg';
import VueIcon from '../../../../public/assets/svg/vue.svg';

const FallingLogosSection: React.FC = () => {
  return (
    <section className="bg-greyDark my-0 pb-[1rem] relative z-10">
      <Lines />
      <div className="grid grid-cols-4 justify-center h-full max-w-[128rem] mx-auto">
        <div className="flex flex-col items-center pt-[7.5rem] md:pt-[25rem]">
          <ReactIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[5.5rem] mb-[12rem] md:mb-[35.7rem] drop-shadow-white" />
          <SvelteIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[5.5rem] opacity-40 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center pt-[10rem] md:pt-[38rem]">
          <NextIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[7.5rem] mb-[15rem] md:mb-[50rem] drop-shadow-white" />
          <ReactIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[5.5rem] opacity-10 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center pt-[18rem] md:pt-[72rem]">
          <VueIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[6.5rem] opacity-40 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center">
          <NextIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[7.5rem] mb-[13rem] md:mb-[40rem] drop-shadow-white" />
          <ReactIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[5.5rem] mb-[18rem] md:mb-[58rem] drop-shadow-white" />
          <SvelteIcon className="w-[70%] animate-pulse md:w-[auto] md:h-[5.5rem] opacity-10 drop-shadow-white" />
        </div>
      </div>
    </section>
  );
};


export default FallingLogosSection;