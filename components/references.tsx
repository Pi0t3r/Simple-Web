import Banner from './UI/Banner';


const referencesList = [
    {
        name:'Wiśniewscy'
    },
    {
        name:'Leon & Maria Kowalscy'
    },
    {
        name:'Jan Wójcik'
    },

]
export default function References() {
  return (
    <div className='bg-accentDarker'>
      <Banner title='Referencje' />
      {referencesList.map((reference, index) => (
        <div key={index} className='p-5 text-secondary border-b-2 border-accent '>
            <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos porro aliquid laboriosam voluptates alias, cum, minima cupiditate laudantium quis eius mollitia eum expedita rem!</p>
            <span className='text-accent text-2xl'>{reference.name}</span>
        </div>
      ))}
    </div>
  );
}
