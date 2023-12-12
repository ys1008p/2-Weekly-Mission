import { FadeLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='loading-spinner'>
      <div className='spinner'>
        <FadeLoader color='#ffffff' />
        <h1>LOADING...</h1>
      </div>
    </div>
  );
};

export default Spinner;
