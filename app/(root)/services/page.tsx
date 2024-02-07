'use client';
import Banner from '@/app/components/UI/Banner';
import Service from '@/app/components/UI/Service';
import ServiceList from '@/app/components/UI/ServicesList';


const List = [
  {
    image: '/assets/img/service-1.webp',
    title: 'Generalny remont',
    alt:'Two men working'
  },
  {
    title: 'Remonty kuchni',
  },
  {
    image: '/assets/img/service-2.webp',
    title: 'Wnętrza',
    alt:'Two men working'
  },
  {
    title: 'Podłogi',
  },
  {
    title: 'Remont łazienki',
  },
];
export default function Services() {
  return (
    <section className='bg-accent'>
      <Banner title='Nasze usługi'/>
      {List.map((list, index) => (
        <div key={index}>
          <Service image={list.image} alt='' title={list.title} />
        </div>
      ))}
      <ServiceList />
    </section>
  );
}
