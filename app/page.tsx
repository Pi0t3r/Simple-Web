'use client';
import {motion} from 'framer-motion';
export default function Home() {
  return (
    <section className='bg-hero-small bg-cover bg-center w-full h-[70vh] shadow-[inset_0px_-1px_75px_200px_#000000a6] text-secondary flex flex-col items-center justify-center'>
      <motion.div initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: 'tween' }}>
        <h2 className='capitalize font-medium text-2xl text-center'>
          nowicki aranżacja wnętrz
        </h2>
        <p className='text-center mb-40'>
          Mieszkania jak ze snu w nowej odsłonie
        </p>
      </motion.div>
    </section>
  );
}
