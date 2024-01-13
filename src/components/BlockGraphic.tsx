import Image from 'next/image';

const BlockGraphic = () => {
  return (
    <div className="absolute w-[764px] h-[964px] mt-8 lg:ml-280 opacity-20 lg:opacity-100 z-0">
      <div className="relative h-[964px]">
        {/* Rectangle */}
          <Image
            className="absolute mt-0 ml-130"
            src="/assets/svg/rectangle-22-2.svg"
            alt="Rectangle 22"
            width={278}
            height={670}
            layout="fixed"
          />
        {/* Rectangle */}
          <Image
            className="absolute mt-68 ml-0"
            src="/assets/svg/rectangle-23-2.svg"
            alt="Rectangle 23"
            width={280}
            height={629}
            layout="fixed"
          />
        {/* Rectangle */}
          <Image
            className="absolute mt-192 ml-64"
            src="/assets/img/rectangle-24.png"
            alt="Rectangle 24"
            width={280}
            height={479}
            layout="fixed"
          />
        {/* Rectangle */}
          <Image
            className="absolute mt-130 ml-192"
            src="/assets/img/rectangle-25.png"
            alt="Rectangle 25"
            width={280}
            height={662}
            layout="fixed"
          />
      </div>
    </div>
  );
};

export default BlockGraphic;