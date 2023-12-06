import "../styles/nav.css";
import logoImg from "../img/logo.jpg";

function Nav({ userType }) {
  const { email, profileImageSource } = userType;

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img src={logoImg} alt="로고이미지" className="logo" />
        </a>
        <a className="cta cta-short" href="signin.html">
          <img src={profileImageSource} alt="회원이미지" className="userImg" />
          <span className="userEmail">{email}</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
