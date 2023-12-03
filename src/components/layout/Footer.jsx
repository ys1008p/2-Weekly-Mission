import { Link } from 'react-router-dom';
import { FOOTER_SOCIAL_LIST } from '../../store/common';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <h2 className='visually-hidden'>footer</h2>
        <div className='copyright'>©codeit - 2023</div>
        <div>
          <ul className='corporate-list'>
            <li className='corporate-list-item'>
              <Link to={'/privacy'}>Privacy Policy</Link>
            </li>
            <li className='corporate-list-item'>
              <Link to={'/faq'}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className='social'>
          <ul className='social-list'>
            {FOOTER_SOCIAL_LIST.map((item) => (
              <li key={item.id} className='social-list-item'>
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={item.label}
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
