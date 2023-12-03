import { useIsGnbFixed } from '@/contexts/LayoutContext';
import { useUser } from '@/contexts/UserContext';
import Account from '../Account';
import Cta from '../Cta';
import Logo from '../Logo';

function Gnb() {
  const user = useUser();

  const isGnbFixed = useIsGnbFixed();
  const gnbStatus = `${isGnbFixed ? 'gnb' : 'gnb-static'}`;

  return (
    <nav className={`bgc-blue ${gnbStatus}`}>
      <div className='wrap gnb__container'>
        <Logo />
        {user ? <Account user={user} /> : <Cta className='gnb__signin'>로그인</Cta>}
      </div>
    </nav>
  );
}

export default Gnb;
