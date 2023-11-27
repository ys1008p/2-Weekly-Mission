import Cta from './Cta';
import Logo from './Logo';

function Gnb() {
  return (
    <nav className="bgc-blue gnb">
      <div className="wrap gnb__container">
        <Logo />
        <Cta className="gnb__signin">로그인</Cta>
      </div>
    </nav>
  );
}

export default Gnb;
