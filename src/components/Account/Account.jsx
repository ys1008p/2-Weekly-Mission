import './style.css';

function Account({ user }) {
  const { email, profileImageSource } = user;
  return (
    <div className="account">
      <img className="account__img" src={profileImageSource} alt="유저 프로필" />
      <span className="account__email">{email}</span>
    </div>
  );
}

export default Account;
