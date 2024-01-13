import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroGraphic = () => {
  const rectangle24Y = useScrollAnimation(485, 0.5);
  const rectangle25Y = useScrollAnimation(302, 0.8);

  return (
    <div className="absolute w-[764px] h-[964px] mt-8 lg:ml-276 opacity-30 lg:opacity-100 z-0">
      <div className="relative h-[964px]">
        {/* Rectangle 22 */}
        <Image
          className="absolute mt-0 ml-130 blur-xs"
          src="/assets/svg/rectangle-22.svg"
          alt="Rectangle 22"
          width={278}
          height={670}
          layout="fixed"
        />
        {/* Rectangle 23 */}
        <Image
          className="absolute mt-68 ml-0 blur-xs"
          src="/assets/svg/rectangle-23.svg"
          alt="Rectangle 23"
          width={280}
          height={629}
          layout="fixed"
        />
        {/* Rectangle 24 */}
        <div className="absolute" style={{ top: `${rectangle24Y}px`, left: '164px' }}>
          <Image
            src="/assets/svg/rectangle-24.svg"
            alt="Rectangle 24"
            width={280}
            height={479}
            layout="fixed"
          />
        </div>
        {/* Rectangle 25 */}
        <div className="absolute" style={{ top: `${rectangle25Y}px`, left: '484px' }}>
          <Image
            src="/assets/svg/rectangle-25.svg"
            alt="Rectangle 25"
            width={280}
            height={662}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroGraphic;