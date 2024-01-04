import Account from '@/components/Account';
import Cta from '@/components/Cta';
import Logo from '@/components/Logo';
import { useIsGnbFixed } from '@/contexts/LayoutContext';
import { useUser } from '@/contexts/UserContext';

function Gnb() {
  const user = useUser();

  const isGnbFixed = useIsGnbFixed();
  const gnbStatus = `${isGnbFixed ? 'gnb' : 'gnb-static'}`;

  return (
    <nav className={`bgc-blue ${gnbStatus}`}>
      <div className='wrap gnb__container'>
        <Logo />
        {user ? <Account /> : <Cta className='gnb__signin'>로그인</Cta>}
      </div>
    </nav>
  );
}

export default Gnb;
