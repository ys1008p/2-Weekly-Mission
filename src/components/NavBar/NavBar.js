import './NavBar.css';
import LinkbraryLogo from '../../assets/logo.svg';
import userData from '../../user-mock.json';
import Cta from '../atoms/Cta/Cta';
import UserInfo from '../atoms/UserInfo/UserInfo';

export default function NavBar() {
  const { email, profileImageSource } = userData;
  const isExist = true;
  return (
    <nav className="NavBar">
      <a href="/" className="NavBar-home-link">
        <img src={LinkbraryLogo} alt="홈페이지로 가는 로고이미지" />
      </a>
      {isExist ? (
        <UserInfo userEmail={email} userProfileImg={profileImageSource} />
      ) : (
        <a href="/signin" className="NavBar-login-link">
          <Cta isShort>
            <span>로그인</span>
          </Cta>
        </a>
      )}
    </nav>
  );
}
