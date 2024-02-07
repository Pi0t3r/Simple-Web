import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ListItem from './ListItem';

const list = [
  {
    icon: <HomeIcon />,
    info: 'ul. Witrynowa 1 01-001 Warszawa, Polska',
  },
  {
    icon: <MailOutlineIcon />,
    info: 'info@mojastrona.pl',
  },
  {
    icon: <PhoneAndroidIcon />,
    info: '123-456-789',
  },
];
export default function List() {
  return (
    <ul id='contact' className='text-center p-14'>
      <span className='text-3xl'>Kontakt</span>
      {list.map((item, index) => (
        <li key={index}>
          <ListItem {...item} />
        </li>
      ))}
    </ul>
  );
}
