import logoImg from './logo.svg';
import './Gnb.css';
import Profile from '../Profile/Profile';
function Gnb({ profile }) {
  return (
    <>
      <nav className="navContainer">
        <div className="nav">
          <a href="index.html">
            <img src={logoImg} className="logo-img" alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          <Profile profile={profile} />
        </div>
      </nav>
    </>
  );
}

export default Gnb;
