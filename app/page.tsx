'use client';
import {motion} from 'framer-motion';
import About from './components/about';
import References from './components/references';
export default function Home() {
  return (
    <section>
      <div className='bg-hero-small bg-cover bg-center w-full h-[70vh] shadow-[inset_0px_1000px_75px_200px_#000000a6] text-secondary flex flex-col items-center justify-center'>
        <motion.h2
          className='capitalize font-medium text-2xl md:text-4xl text-center'
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 1, type: 'tween'}}
        >
          nowicki aranżacja wnętrz
        </motion.h2>
        <motion.p
          className='text-center mb-40 md:text-xl'
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 1, type: 'tween'}}
        >
          Mieszkania jak ze snu w nowej odsłonie
        </motion.p>
      </div>
      <About />
      <References />
    </section>
  );
}
