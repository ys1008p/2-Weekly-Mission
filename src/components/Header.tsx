import Gnb from './Gnb';

function Header({ children }) {
  return (
    <header>
      <Gnb></Gnb>
      {children}
    </header>
  );
}

export default Header;
