import Logo from '@/assets/images/icon/logo.svg';
import Profile from '@/components/profile/Profile';

interface HeaderProps {
  user: {
    email: string;
    profileImageSource: string;
  };
}

const Header = ({ user }: HeaderProps) => (
  <header>
    <div>
      <a href="/">
        <img className="logo" src={Logo} alt="로고" />
      </a>
      <Profile user={user} />
    </div>
  </header>
);

export default Header;
