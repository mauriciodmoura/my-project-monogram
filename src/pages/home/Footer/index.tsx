import React from 'react';
import Heart from '../../../../public/assets/svg/heart.svg';
import Lines from '@/components/BackgroundLines';

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-greyDark relative mb">
      <Lines/>
      <div className="flex flex-col items-center gap-[3.5rem] my-[15rem] relative">
        {/* Footer */}
        <p className="text-white px-[6rem] text-[1.5rem] lg:text-[2.4rem] text-center">
          This is a design test by Maurício de Moura for Monogram.
        </p>
        {/* Thanks for the opportunity */}
        <Heart className="animate-pulse" />
      </div>
    </section>
  );
};

export default Footer;