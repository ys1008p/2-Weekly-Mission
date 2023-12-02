import { useIsGnbFixed } from '@/contexts/LayoutContext';
import { useSetUser, useUser } from '@/contexts/UserContext';
import { getUser } from '@/pages/shared/api';
import { useEffect } from 'react';
import Account from '../Account';
import Cta from '../Cta';
import Logo from '../Logo';

function Gnb() {
  const user = useUser();
  const setUser = useSetUser();
  const isGnbFixed = useIsGnbFixed();
  console.log(isGnbFixed);

  useEffect(() => {
    async function fetchUser() {
      const response = await getUser();
      setUser(response);
    }

    fetchUser();
  }, []);

  return (
    <nav className='bgc-blue gnb'>
      <div className='wrap gnb__container'>
        <Logo />
        {user ? <Account user={user} /> : <Cta className='gnb__signin'>로그인</Cta>}
      </div>
    </nav>
  );
}

export default Gnb;
