import Label from './Label';
export default function Form() {
  return (
    <form action='' className='flex flex-col p-5'>
      <Label label='Imię' type='text'/>
      <Label label='Nazwisko' type='text'/>
      <Label label='E-mail*' type='email' isRequired/>
      <Label label='Telefon' type='tel'/>
      <Label label='Adres' type='text'/>
      <input type="submit" value='Wyślij' className='border p-2' />
    </form>
  );
}
