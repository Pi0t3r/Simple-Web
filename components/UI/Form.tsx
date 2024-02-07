import Label from './Label';
const fields = [
  {
    label: 'Imię',
    type: 'text',
  },
  {
    label: 'Nazwisko',
    type: 'text',
  },
  {
    label: 'E-mail*',
    type: 'email',
    isRequired: true,
  },
  {
    label: 'Telefon',
    type: 'tel',
  },
  {
    label: 'Adres',
    type: 'text',
  },
];
export default function Form() {
  return (
    <form action='' className='flex flex-col p-5'>
      {fields.map((field, index) => (
        <Label key={index} {...field} />
      ))}

      <input type='submit' value='Wyślij' className='border p-2' />
    </form>
  );
}
