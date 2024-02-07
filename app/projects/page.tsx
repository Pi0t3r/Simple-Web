import Project from '@/components/UI/Projects';
export default function Projects() {
  return (
    <section className='bg-accentDarker'>
      <h4 className='bg-accent text-secondary text-3xl p-5 font-semibold'>
        Nasze projekty
      </h4>

      <ul className='text-center p-10 text-accent text-2xl leading-10'>
        <li>
          <a href='#section_nadmorski'>Projekt nadmorski</a>
        </li>
        <li>
          <a href='#section_nadwislanska'>ulica Nadwiślańska</a>
        </li>
        <li>
          <a href='#section_house'>Dom przy jeziorze</a>
        </li>
      </ul>
      <Project id='section_nadmorski' title='Projekt nadmorski' images={[
        '/assets/img/project-1.webp','/assets/img/project-2.webp','/assets/img/project-3.webp',
        '/assets/img/project-4.webp', '/assets/img/project-5.webp',
      ]} />
    </section>
  );
}
