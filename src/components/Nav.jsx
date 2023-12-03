import { User } from "./User.jsx";
import logo from "../assets/logo.svg";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <User />
    </div>
  );
};

export { Nav };
