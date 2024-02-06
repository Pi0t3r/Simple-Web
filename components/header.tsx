'use client';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {Sidebar} from './sidebar';
import Link from 'next/link';
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='bg-primary w-full'>
      <nav>
        <ul className='flex items-center justify-between p-5 text-secondary'>
          <li>
            <h1 className='text-mainColor'>Nowicki Aranżacja Wnętrz</h1>
          </li>
          <li onClick={handleClick} className='z-50'>
            {open ? <CloseIcon /> : <MenuIcon />}
          </li>
        </ul>
      </nav>
      <Sidebar isOpen={open} setOpen={setOpen} />
    </div>
  );
}
