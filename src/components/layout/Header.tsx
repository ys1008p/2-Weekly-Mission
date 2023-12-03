import Logo from '@/assets/images/icon/logo.svg';
import Profile from '@/components/profile/Profile';
import { useAuth } from '@/contexts/AuthContexts';

const Header = () => {
  const user = useAuth();

  return (
    <header>
      <div>
        <a href="/">
          <img className="logo" src={Logo} alt="로고" />
        </a>
        {user ? (
          <Profile user={user} />
        ) : (
          <a href="/">
            <button type="button" className="btn-gradient login">
              로그인
            </button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
