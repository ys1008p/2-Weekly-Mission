import logo from "../assets/logo.svg";

const Navbar = ({ loginClick, isLogin, loginInfo }) => {
  const { email, profileImageSource } = loginInfo;
  return (
    <div className="nav-background">
      <nav>
        <img className="logo-mobile" src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <div className="user-info">
            <img className="profile" src={profileImageSource} alt="user profile" />
            <p className="email">{email}</p>
          </div>
        ) : (
          <button className="cta cta-short" onClick={loginClick}>
            <span>로그인</span>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
