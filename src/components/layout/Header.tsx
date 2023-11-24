import Logo from '@/assets/images/icon/logo.svg';
import Profile from '@/components/profile/Profile';

const Header = () => (
  <header>
    <div>
      <a href="/">
        <img className="logo" src={Logo} alt="로고" />
      </a>
      <Profile />
    </div>
  </header>
);

export default Header;
