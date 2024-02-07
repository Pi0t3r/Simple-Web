import Form from './UI/Form';
import List from './UI/List';
export default function Footer() {
  return (
    <footer className='bg-accentDarker text-accent lg:flex border-t-2 border-accent'>
      <List />
      <Form />
    </footer>
  );
}
