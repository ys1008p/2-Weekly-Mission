import { ButtonLink } from '../components/common/Button';
import title from '../assets/images/notFound-404.svg';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-content'>
        <img src={title} alt='404' />
        <h1 className='not-found-title'>PAGE NOT FOUND</h1>
        <ButtonLink path={'/'} className='btn-not-found' text='GO HOME' />
      </div>
    </div>
  );
};

export default NotFound;
