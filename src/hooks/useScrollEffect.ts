import { useState, useEffect, useRef } from 'react';

const useScrollEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollEffect, setScrollEffect] = useState(0);

  useEffect(() => {
    const updateEffect = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const effectValue = Math.max(0, Math.min(1, (window.innerHeight - elementTop) / window.innerHeight));
        setScrollEffect(effectValue);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', updateEffect);
            updateEffect();
          } else {
            window.removeEventListener('scroll', updateEffect);
            setScrollEffect(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('scroll', updateEffect);
    };
  }, []);

  return { ref, scrollEffect };
};

export default useScrollEffect;
