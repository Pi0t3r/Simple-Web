import {iServiceListArray} from '@/types/types';
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
      <h5 className='p-5 text-3xl'>Zakres usług</h5>
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
