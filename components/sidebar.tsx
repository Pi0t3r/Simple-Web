import {iSidebar} from '@/types/types';
export function Sidebar({isOpen}: iSidebar) {
  return (
    <aside className={`${isOpen ? '' : 'bg-primary text-secondary absolute inset-0 z-50 flex items-center justify-center leading-10'}`}>
      <ul className='group uppercase'>
        <li>główna</li>
        <li>usługi</li>
        <li>projekty</li>
        <li>kontakt</li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </aside>
  );
}
