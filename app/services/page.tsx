'use client';
import Service from '@/components/UI/Service';
import ServiceList from '@/components/UI/ServicesList';

const List = [
  {
    id: 1,
    image: '/assets/img/service-1.webp',
    title: 'Generalny remont',
  },
  {
    id: 2,
    title: 'Remonty kuchni',
  },
  {
    id: 3,
    image: '/assets/img/service-2.webp',
    title: 'Wnętrza',
  },
  {
    id: 4,
    title: 'Podłogi',
  },
  {
    id: 5,
    title: 'Remont łazienki',
  },
];
export default function Services() {
  return (
    <section className='bg-accent'>
      <h3 className='text-secondary font-medium text-3xl p-6'>Nasze usługi</h3>
      {List.map((list) => (
        <div key={list.id}>
          <Service image={list.image} alt='' title={list.title} />
        </div>
      ))}
      <ServiceList />
    </section>
  );
}
