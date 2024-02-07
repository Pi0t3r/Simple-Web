import Banner from '@/app/components/UI/Banner';
import Project from '@/app/components/UI/Projects';
export default function Projects() {
  const list = [
    {
      id: 'section_nadmorski',
      href: '#section_nadmorski',
      title: 'Projekt nadmorski',
      images: [
        '/assets/img/project-1.webp',
        '/assets/img/project-2.webp',
        '/assets/img/project-3.webp',
        '/assets/img/project-4.webp',
        '/assets/img/project-5.webp',
      ],
    },
    {
      id: 'section_nadwislanska',
      href: '#section_nadwislanska',
      title: 'ulica Nadwiślańska',
      images: [
        '/assets/img/project-2-1.webp',
        '/assets/img/project-2-2.webp',
        '/assets/img/project-2-3.webp',
        '/assets/img/project-2-4.webp',
        '/assets/img/project-2-5.webp',
      ],
    },
    {
      id: 'section_house',
      href: '#section_house',
      title: 'Dom przy jeziorze',
      images: [
        '/assets/img/project-3-1.webp',
        '/assets/img/project-3-2.webp',
        '/assets/img/project-3-3.webp',
        '/assets/img/project-3-4.webp',
        '/assets/img/project-3-5.webp',
      ],
    },
  ];
  return (
    <section className='bg-accentDarker pb-10'>
      <Banner title='Nasze projekty' />

      <ul className='text-center p-10 text-accent text-2xl leading-10 md:flex md:justify-between'>
        {list.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className='hover:text-secondary transition duration-300'
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {list.map((item, index) => (
        <Project
          key={index}
          id={item.id}
          images={item.images}
          title={item.title}
        />
      ))}
    </section>
  );
}
