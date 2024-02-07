import {iProjects} from '@/types/types';
import Image from 'next/image';
export default function Project({id, title, images}: iProjects) {

  return (
    <div id={id}>
      <h5 className='text-accent text-2xl p-5'>{title}</h5>
      <p className='text-secondary p-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum
        modi quasi numquam voluptatem aperiam consequatur error ut unde, ipsum
        porro sequi suscipit quos expedita aliquam. Iste quasi saepe eius.
      </p>

      {images.map((image, index) => (
        <Image
          src={image}
          key={index}
          alt='Image interior house'
          width={400}
          height={400}
          style={{width: '100%', marginTop: 10}}
        />
      ))}
    </div>
  );
}
