import {iServiceListArray} from '@/types/types';
import Banner from './Banner';
export default function ServiceList() {
  const serviceListArray: iServiceListArray[] = [
    {
      title: 'Przegląd',
      list: ['Projekt i budowa', 'Planowanie', 'Budżetowanie'],
    },
    {
      title: 'Budowa',
      list: [
        'Kontrola jakości',
        'Bezpieczeństwo',
        'Zarządzanie podwykonawcami',
      ],
    },
    {
      title: 'Po budowie',
      list: ['Zezwolenia', 'Dokumentacja', 'Gwarancja'],
    },
  ];
  return (
    <div className='text-secondary w-full text-xl'>
      <Banner title='Zakres usług' />
      {serviceListArray.map((list, index) => (
        <ul key={index} className='list-disc p-7 border-y'>
          <span className='font-semibold'>{list.title}</span>
          {list.list.map((item, index) => (
            <li key={index} className='ml-7 text-base mt-2'>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
