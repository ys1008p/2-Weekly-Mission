import logoImg from './logo.svg';
import './Gnb.css';
import Profile from '../Profile/Profile';
import LoginButton from '../LoginButton/LoginButton';
function Gnb({ profile }) {
  const didLogin = !!profile.id;
  return (
    <nav className="navContainer">
      <div className="nav">
        <a href="index.html">
          <img src={logoImg} className="logo-img" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {didLogin ? <Profile profile={profile} /> : <LoginButton />}
      </div>
    </nav>
  );
}

export default Gnb;
