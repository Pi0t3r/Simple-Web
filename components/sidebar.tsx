import {iSidebar} from '@/types/types';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import {MouseEventHandler} from 'react';
import {usePathname} from 'next/navigation';
import {stopCoverage} from 'v8';
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
const social = [
  {
    icon: <FacebookIcon />,
  },
  {
    icon: <InstagramIcon />,
  },
  {
    icon: <TwitterIcon />,
  },
];

export function Sidebar({isOpen, setOpen}: iSidebar) {
  const pathname = usePathname();
  const handleClickLink: MouseEventHandler<HTMLAnchorElement> = () => {
    setOpen(false);
  };
  return (
    <aside
      className={`bg-primary text-secondary absolute inset-0 z-40 flex flex-col items-center justify-center leading-10 transition duration-700 text-xl   ${
        isOpen ? 'translate-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav>
        <ul className='group uppercase'>
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li key={index} className='my-5'>
                <Link href={link.href} passHref onClick={handleClickLink}>
                  <span
                    onClick={handleClickLink}
                    className={`${isActive ? 'text-accent' : ''}`}
                  >
                    {link.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className='flex w-1/2 justify-evenly mt-10'>
        {social.map((icon, index) => (
          <li key={index}>{icon.icon}</li>
        ))}
      </ul>
    </aside>
  );
}
