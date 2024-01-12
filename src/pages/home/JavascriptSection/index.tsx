import Image from 'next/image';
import Title from '@/components/Title';
import Arrow from '../../../../public/assets/svg/squiggly-arrow.svg';
import Lines from '@/components/BackgroundLines';
import Square from '../../../../public/assets/svg/Orange-square.svg'
import TypingAnimation from '@/components/TypingAnimation';

const JavascriptSection: React.FC = () => {
  return (
  <section className="mt-0 text-center relative xl:container px-24 mx-auto z-20 bg-greyDark md:bg-[transparent] py-10 md:py-0">
    <div className="bg-greyDark absolute w-[100vw] h-[75%] xl:h-[55%] lg:max-h-[55rem] bottom-0 left-2/4 -translate-x-2/4">
      <Lines />
    </div>
    <div className="flex justify-center relative">
      <Square className="absolute z-0 blur-xs" />
      <Arrow className="absolute mt-104 ml-384" />
    </div>
    <div className="pt-32 flex flex-col items-center relative">
      <Title Tag="h2" Text="javascript" className="text-white lg:-tracking-h1" />
      <p className="text-base font-light text-white leading-base max-w-[57.8rem] mt-[4.4rem] mb-[9rem]">
        Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, 
        such as Algolia and Next.js.
      </p>
      <div className="relative flex justify-center items-center z-10">
        <Image
          src="/assets/img/computer.png"
          alt="retroComputer"
          width={810}
          height={808}
          layout="fixed"
          className="relative"
        />
        <div className="absolute inset-0 flex justify-center md:mt-10 lg:mt-14 -z-10">
          <TypingAnimation />
        </div>
      </div>
    </div>
  </section>

  );
};

export default JavascriptSection;