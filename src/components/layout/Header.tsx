import { useGetRequest } from '@/hooks/useRequest';
import { useEffect, useState } from 'react';

import Logo from '@/assets/images/icon/logo.svg';

import Profile from '@/components/profile/Profile';

const Header = () => {
  const [user, setUser] = useState(null);

  const getUserProfile = async () => {
    let result;
    try {
      result = await useGetRequest('/api/sample/user');
    } catch (error) {
      return;
    }

    setUser(result);
  };

  useEffect(() => {
    getUserProfile().catch(() => {});
  }, []);

  return (
    <header>
      <div>
        <a href="/">
          <img className="logo" src={Logo} alt="로고" />
        </a>
        {user === null ? (
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
};

export default Header;
