import style from './Account.module.css';

function Account({ user }) {
  const { email, profileImageSource } = user;
  return (
    <div className={style.container}>
      <img className={style.img} src={profileImageSource} alt='유저 프로필' />
      <span className={style.email}>{email}</span>
    </div>
  );
}

export default Account;
