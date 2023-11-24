import logoImg from './logo.svg';
import './Gnb.css';
function Gnb() {
  return (
    <>
      <nav className="navContainer">
        <div className="nav">
          <a href="index.html">
            <img src={logoImg} className="logo-img" alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          <a href="#">유저 프로필</a>
        </div>
      </nav>
    </>
  );
}

export default Gnb;
