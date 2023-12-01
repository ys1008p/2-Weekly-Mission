import "./Style.css";
import logoImg from "../img/logo.png";
import { Link } from "react-router-dom";

function Header({ userData, userProfile }) {
  return (
    <header>
      <div className="header_inner">
        <Link to="/">
          <h1>
            <img src={logoImg} alt="Logo" />
          </h1>
        </Link>

        {userData ? (
          <p className="userdata">
            <img src={`${userProfile.img}`} alt="userimg" />
            {`${userProfile.email}`}
          </p>
        ) : (
          <Link to="/signin">로그인</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
