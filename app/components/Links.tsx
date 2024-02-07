import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {MouseEventHandler} from 'react';
import {iLinks} from '@/types/types';

const links = [
  {
    href: '/',
    title: 'główna',
  },
  {
    href: '/services',
    title: 'usługi',
  },
  {
    href: '/projects',
    title: 'projekty',
  },
  {
    href: '#contact',
    title: 'Kontakt',
  },
];
export default function Links({setOpen, styles}: iLinks) {
  const pathname = usePathname();
  const handleClickLink: MouseEventHandler<HTMLAnchorElement> = () => {
    setOpen(false);
  };
  return (
    <ul className={styles}>
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <li key={index} className='my-5'>
            <Link href={link.href} passHref onClick={handleClickLink}>
              <span
                onClick={handleClickLink}
                className={`${isActive ? 'text-accent' : ''} hover:text-accentDarker transition-colors `}
              >
                {link.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
