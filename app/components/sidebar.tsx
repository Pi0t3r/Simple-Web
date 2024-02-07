import {iSidebar} from '@/types/types';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Links from './Links';

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

  return (
    <aside
      className={`bg-primary text-secondary absolute inset-0 z-40 flex flex-col items-center justify-center leading-10 transition duration-700 text-xl   ${
        isOpen ? 'translate-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav>
          <Links setOpen={setOpen} styles='group uppercase' />
      </nav>
      <ul className='flex w-1/2 justify-evenly mt-10'>
        {social.map((icon, index) => (
          <li key={index}>{icon.icon}</li>
        ))}
      </ul>
    </aside>
  );
}
