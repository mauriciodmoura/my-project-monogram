import React, { useEffect, useRef, useState } from 'react';
import ScoreIndicator from '../../../../public/assets/svg/score.svg';
import Lines from '@/components/BackgroundLines';

const ScoresSection: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const scoreRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateCount = () => {
    if (count < 100) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    const scoreObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount();
        }
      });
    });

    if (scoreRef.current) {
      scoreObserver.observe(scoreRef.current);
    }

    return () => {
      if (scoreRef.current) {
        scoreObserver.unobserve(scoreRef.current);
      }
    };
  }, [count, updateCount]);

  return (
    <section className="flex flex-col items-center bg-greyDark relative mb">
      <Lines />
      <div
        className="flex flex-col gap-[10rem] items-center py-[8rem] lg:py-[12rem] px-[8rem] mx-auto relative mt-[-8.5rem]"
        ref={scoreRef}
      >
        <div className="card absolute top-0 left-0 right-0 mx-auto w-[calc(100%-6rem)] 2xl:w-full h-full rounded-[6.8rem]"></div>
        <h3 className="text-center font-black text-[3.5rem] sm:text-[5rem] lg:text-8xl text-greenLight z-10 -tracking-h3">
          top audit scores
        </h3>
        <div className="score grid grid-cols-2 lg:grid-cols-4 gap-[6.7rem]">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              className={`score__item reveal h-fit lg:h-[21rem] w-full lg:w-[21rem] flex justify-center text-[3rem] lg:text-[6.3rem] font-bold p-[2rem] lg:p-0 relative ${
                i + 1 === 3 ? 'opacity-50' : 'opacity-100'
              } ${count > 0 ? 'active' : ''}`}
              key={i}
            >
              <ScoreIndicator
                className={`w-[210%] max-w-[33rem] absolute top-0 left-1/2 m-auto bottom-0 -translate-x-2/4 ${
                  i + 1 === 3 ? 'opacity-60' : 'opacity-100'
                }`}
              />
              <p className="m-auto">{count}</p>
            </div>
          ))}
        </div>
        <p className="flex flex-col max-w-[74rem] gap-[3rem] font-normal text-[1.8rem] sm:text-[2rem] lg:text-[2.6rem] text-greySoft leading-[1.8] lg:leading-[4.2rem] mix-blend-color-dodge">
          <span className="text-center lg:text-left">
            Search engines, business stakeholders, and end-users gauge a website’s value using metric tools 
            like Google Lighthouse, which measures site performance, SEO, and accessibility.
          </span>
          <span className="text-center lg:text-left">
            Performance is one of the most difficult scores to get to 100. 
            This is especially true in a time when users demand JavaScript-heavy, 
            highly-interactive web experiences.
          </span>
          <span className="text-center lg:text-left">
            A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, 
            promises higher search-engine ranking and a more positive, responsive end-user experience.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ScoresSection;
