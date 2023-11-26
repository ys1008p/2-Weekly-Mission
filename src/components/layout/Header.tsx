import Logo from '@/assets/images/icon/logo.svg';
import Profile from '@/components/profile/Profile';

interface User {
  email: string;
  profileImageSource: string;
}

interface HeaderProps {
  user: User | undefined;
}

const Header = ({ user }: HeaderProps) => (
  <header>
    <div>
      <a href="/">
        <img className="logo" src={Logo} alt="로고" />
      </a>
      {user === undefined ? (
        <a href="/">
          <button type="button" className="btn-gradient login">
            로그인
          </button>
        </a>
      ) : (
        <Profile user={user} />
      )}
    </div>
  </header>
);

export default Header;
