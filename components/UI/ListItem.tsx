import {iListItem} from '@/types/types';
export default function ListItem({icon, info}: iListItem) {
  return (
    <div className='flex flex-col items-center my-10'>
      <span className='scale-150 mb-5'>{icon}</span>
      <p>{info}</p>
    </div>
  );
}
