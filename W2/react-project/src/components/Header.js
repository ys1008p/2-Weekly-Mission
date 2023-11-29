import "../styles/Header.css";

import profile from "../assets/profile.png";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src={logo} alt="Linkbrary logo to home page" />
          </a>
          <div className="profile-contents">
            <img className="profile-image" src={profile} alt="profile-Image" />
            <p className="profile-email">Codeit@codeit.com</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
