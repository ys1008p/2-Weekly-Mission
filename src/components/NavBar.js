import { useState, useEffect } from "react";
import { getUser } from "../api.js";
import "../css/NavBar.css";
import Button from "./Button";
import Linkbrary from "../assets/Linkbrary.png";

function NavBar() {
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userImg, setUserImg] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await getUser();
      const { email, ...rest } = await response;

      if (email !== null) {
        setIsLogin(true);
        setUserEmail(email);
        setUserImg(rest.profileImageSource);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <header className="header">
      <div className="header__navi">
        <div className="header__navi-frame">
          <div className="header__navi--logo btn">
            <a href="/">
              <img src={Linkbrary} alt="Linkbrary" />
            </a>
          </div>
          {isLogin ? (
            <div className="header__navi--user">
              <img src={userImg} alt={userImg}></img>
              <h3>{userEmail}</h3>
            </div>
          ) : (
            <Button
              onClick={handleLogin}
              className="header__navi--login btn"
              name="로그인"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
