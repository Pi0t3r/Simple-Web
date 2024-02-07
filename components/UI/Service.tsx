import { iService } from '@/types/types';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Service({image, alt, title}: iService) {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className='relative w-full'>
      {image && isVisible ? (
        <Image src={image} alt={alt} width={450} height={450} />
      ) : null}
      <LazyMotion features={domAnimation}>
        <div className='bg-accentDarker border-b border-accent p-5'>
          <m.h4
            initial={{x: -100, opacity: 0}}
            animate={isVisible ? {x: 0, opacity: 1} : {}}
            transition={{delay: 0.5, duration: 1, type: 'tween'}}
            className='text-accent'
          >
            {title}
          </m.h4>
          <m.p
            initial={{x: -100, opacity: 0}}
            animate={isVisible ? {x: 0, opacity: 1} : {}}
            transition={{delay: 1, duration: 1, type: 'tween'}}
            className='text-secondary mt-2 text-sm'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam
            ab dolor iusto laboriosam mollitia vitae, illo quibusdam, minus
            dolorum inventore quisquam consectetur nihil fugiat.
          </m.p>
        </div>
      </LazyMotion>
    </div>
  );
}
