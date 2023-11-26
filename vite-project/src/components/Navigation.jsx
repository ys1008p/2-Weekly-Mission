import logo from "../../../images/landing/logo.svg";
import "./Navigation.css";

const Logo = ({ className }) => (
  <a href="/">
    <img className={className} src={logo} alt="로고" />
  </a>
);

const Profile = ({ className, profile }) => (
  <div className={className}>
    <img
      className="profile-logo"
      src={profile.profileImageSource}
      alt="프로필 로고"
    />
    <span className="profile-email">{profile.email}</span>
  </div>
);

const Login = ({ className, onClick }) => (
  <button className={className} type="button" onClick={onClick}>
    로그인
  </button>
);

function Navigation({ profile }) {
  function handleClick() {
    window.location.href = "../../../signin/index.html";
  }
  return (
    <nav>
      <div className="gnb">
        <Logo className="cta logo" />
        {profile ? (
          <Profile className="cta profile" profile={profile} />
        ) : (
          <Login className="cta login" onClick={handleClick} />
        )}
      </div>
    </nav>
  );
}

export default Navigation;
