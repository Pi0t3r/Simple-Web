'use client';
import {useState, useEffect} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {LazyMotion, m, domAnimation} from 'framer-motion';
export default function BtnBackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleToScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleToScroll);
    return () => {
      window.removeEventListener('scroll', handleToScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        animate={isVisible ? {opacity: 1} : {opacity: 0}}
        transition={{duration: 1}}
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 bg-accentDarker text-secondary w-12 h-12 rounded-full border-secondary border-2 ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <KeyboardArrowUpIcon
          style={{
            width:40,
            height: 40,
          }}
        />
      </m.button>
    </LazyMotion>
  );
}
