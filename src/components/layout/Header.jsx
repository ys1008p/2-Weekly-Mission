import '@pages/landing/landing.css';

import Gnb from './Gnb';

function Header({ children }) {
  return (
    <header className='bgc-blue'>
      <Gnb></Gnb>
      {children}
    </header>
  );
}

export default Header;
