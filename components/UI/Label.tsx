import {iLabel} from '@/types/types';
export default function Label({label, type, isRequired}: iLabel) {
  return (
    <div>
      <label className='flex flex-col'>
        <span className='mb-2'>{label}</span>
        <input type={type} required={isRequired} className='bg-none border-b mb-5'/>
      </label>
    </div>
  );
}
