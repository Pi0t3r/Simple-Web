import {iProjects} from '@/types/types';
import Image from 'next/image';
export default function Project({id, title, images}: iProjects) {
  return (
    <div id={id} className='border-t-2 border-accent pb-10'>
      <div>
        <h5 className='text-accent text-2xl p-5'>{title}</h5>
        <p className='text-secondary p-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          illum modi quasi numquam voluptatem aperiam consequatur error ut unde,
          ipsum porro sequi suscipit quos expedita aliquam. Iste quasi saepe
          eius.
        </p>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === images.length - 1
                ? 'md:col-span-2 md:text-center md:w-1/2 md:mx-auto'
                : ''
            }
          >
            <Image
              src={image}
              alt='Image interior house'
              width={400}
              height={400}
              style={{width: '100%', marginTop: 10, maxHeight: '300px'}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
