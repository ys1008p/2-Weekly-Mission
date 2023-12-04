import styles from './Header.module.css';

import Logo from '@/assets/images/icon/logo.svg';
import Profile from '@/components/profile/Profile';
import { useAuth } from '@/contexts/AuthContexts';

const Header = () => {
  const user = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href="/">
          <img className={styles.logo} src={Logo} alt="로고" />
        </a>
        {user ? (
          <Profile user={user} />
        ) : (
          <a href="/">
            <button type="button" className={styles['btn-login']}>
              로그인
            </button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
