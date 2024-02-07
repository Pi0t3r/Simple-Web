import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ListItem from './ListItem';
export default function List() {
  return (
    <ul className='text-center p-14'>
      <span className='text-3xl'>Kontakt</span>
      <li>
        <ListItem
          icon={<HomeIcon />}
          info='ul. Witrynowa 1
01-001 Warszawa, Polska'
        />
      </li>
      <li>
        <ListItem icon={<MailOutlineIcon />} info='info@mojastrona.pl' />
      </li>
      <li>
        <ListItem icon={<PhoneAndroidIcon />} info='123-456-789' />
      </li>
    </ul>
  );
}
