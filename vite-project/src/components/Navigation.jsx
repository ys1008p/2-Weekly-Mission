import logo from "../../../images/landing/logo.svg";
import "./Navigation.css";

function Navigation({ profile }) {
  return (
    <nav>
      <div className="gnb">
        <a href="/">
          <img className="cta logo" src={logo} alt="로고" />
        </a>
        {profile ? (
          <div className="cta profile">
            <img
              className="profile-logo"
              src={profile.profileImageSource}
              alt="프로필 로고"
            />
            <span className="profile-email">{profile.email}</span>
          </div>
        ) : (
          <a href="../../../signin/index.html">
            <button className="cta login" type="button">
              로그인
            </button>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
