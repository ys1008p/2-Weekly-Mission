import { useUser } from '@/contexts/UserContext';
import style from './Account.module.css';

function Account() {
  const user = useUser();
  const { email, profileImageSource, image_source } = user;
  return (
    <div className={style.container}>
      <img
        className={style.img}
        src={profileImageSource || image_source}
        alt='유저 프로필'
      />
      <span className={style.email}>{email}</span>
    </div>
  );
}

export default Account;
