import {Basic} from '@/types/types';
export default function Banner({title}: Basic) {
  return (
    <div className='bg-accent text-secondary block w-full p-5 py-8 text-3xl font-medium md:text-center'>
      <p>{title}</p>
    </div>
  );
}
