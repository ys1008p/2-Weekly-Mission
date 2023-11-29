import { useEffect } from 'react';
import { useSetUser, useUser } from '../contexts/UserContext';
import { getUser } from '../pages/shared/api';
import Account from './Account/Account';
import Cta from './Cta';
import Logo from './Logo';
function Gnb() {
  const user = useUser();
  const setUser = useSetUser();

  useEffect(() => {
    async function fetchUser() {
      const response = await getUser();
      console.log(response);
      setUser(response);
      console.log(user);
    }

    fetchUser();
  }, []);

  return (
    <nav className="bgc-blue gnb">
      <div className="wrap gnb__container">
        <Logo />
        {user ? <Account user={user} /> : <Cta className="gnb__signin">로그인</Cta>}
      </div>
    </nav>
  );
}

export default Gnb;
