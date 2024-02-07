import {iSidebar} from '@/types/types';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import {MouseEventHandler} from 'react';
export function Sidebar({isOpen, setOpen}: iSidebar) {
  const handleClickLink: MouseEventHandler<HTMLAnchorElement> = () => {
    setOpen(false);
  };
  return (
    <aside
      className={`bg-primary text-secondary absolute inset-0 z-40 flex flex-col items-center justify-center leading-10 transition duration-700 text-xl  ${
        isOpen ? 'translate-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav>
        <ul className='group uppercase'>
          <li className='my-5'>
            <Link href='/' passHref onClick={handleClickLink}>
              główna
            </Link>
          </li>
          <li className='my-5'>
            <Link href='/services' passHref onClick={handleClickLink}>
              usługi
            </Link>
          </li>
          <li className='my-5'>
            <Link href='/projects' passHref onClick={handleClickLink}>
              projekty
            </Link>
          </li>
          <li className='my-5'>
            <Link href='#contact' passHref onClick={handleClickLink}>
              kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <ul className='flex w-1/2 justify-evenly mt-10'>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </aside>
  );
}
