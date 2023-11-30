import "./nav.css";
import logo from "../images/logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="gnb">
        <a href="index.html">
          <img
            className="logo-img"
            src={logo}
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </a>
        <a class="cta cta-short" href="signin.html">
          <span>로그인</span>
        </a>
      </div>
    </nav>
  );
}
export default Nav;
