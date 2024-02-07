'use client';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Sidebar} from './sidebar';

import Links from './Links';
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='bg-primary w-full flex items-center justify-between'>
      <nav className='w-full'>
        <ul className='flex items-center justify-between p-5 text-secondary'>
          <li>
            <h1 className='text-mainColor'>Nowicki Aranżacja Wnętrz</h1>
          </li>
          <li onClick={handleClick} className='z-50 md:hidden'>
            {open ? <CloseIcon /> : <MenuIcon />}
          </li>
        </ul>
      </nav>
      <nav className='hidden md:block w-full pr-10'>
          <Links setOpen={setOpen} styles='flex justify-between w-full text-secondary capitalize'/>
      </nav>
      <Sidebar isOpen={open} setOpen={setOpen} />
    </div>
  );
}
