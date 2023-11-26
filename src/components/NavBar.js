import "../css/NavBar.css";
import Button from "./Button";
import Linkbrary from "../assets/Linkbrary.png";

function NavBar() {
  return (
    <header className="header">
      <div className="header__navi">
        <div className="header__navi-frame">
          <div className="header__navi--logo btn">
            <a href="/">
              <img src={Linkbrary} alt="Linkbrary" />
            </a>
          </div>
          <Button className="header__navi--login btn" name="로그인" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
