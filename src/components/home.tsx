import '../index.css';

const Home = () => {
  return (
    <div className='h-screen flex flex-col text-center justify-evenly bg-brown'>
      
      <div className='mt-[10%] mb-10'>
        <h1 className='font-bold tracking-wider lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl'>PORTFOLIO</h1>
        <h2 className='font-bold mt-10 tracking-wider lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl'>VISUAL MERCHANDISING</h2>
      </div>

      <div className='mb-10'>
        <h3 className='font-bold lg:text-2xl md:text-xl sm:text-lg xs:text-md'>CARLOS BORREGA</h3>
      </div>
    </div>
  );
};

export default Home;
