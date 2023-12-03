import { fetchGetRequest } from '@/utils/api';
import { useEffect, useState } from 'react';

import Logo from '@/assets/images/icon/logo.svg';

import Profile from '@/components/profile/Profile';

const Header = () => {
  const [user, setUser] = useState(null);

  const getUserProfile = async () => {
    let result;
    try {
      result = await fetchGetRequest('/api/sample/user');
    } catch (error) {
      return;
    }

    setUser(result);
  };

  useEffect(() => {
    void getUserProfile();
  }, []);

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
