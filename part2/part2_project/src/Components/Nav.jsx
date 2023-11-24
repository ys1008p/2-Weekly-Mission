import logoImg from "../img/logo.svg";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-bar">
        <a id="logo" href="/">
          <img src={logoImg} alt="LinkBrary logo" />
        </a>
        <a
          className="use_site"
          id="signin"
          href="/signin.html"
          alt="로그인사이트로 이동하는 버튼"
        >
          로그인
        </a>
      </div>
    </nav>
  );
}
