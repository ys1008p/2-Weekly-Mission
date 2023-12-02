import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { getData } from "../api/api";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
export function Header() {
  const [profileDatas, setProfileDatas] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const getUserData = async () => {
    try {
      const response = await getData("sample/user");
      // console.log(response, "Header");
      const { id, name, email, profileImageSource } = response;
      setProfileDatas((prevProfileDatas) => ({
        ...prevProfileDatas,
        id: id,
        name: name,
        email: email,
        profileImageSource: profileImageSource,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="header">
      <nav>
        <Logo />
        {profileDatas.name ? (
          <div className="header-profile">
            <img
              className="header-profile_profile-img"
              src={profileDatas.profileImageSource}
            />
            <p className="header-profile_profile-name">{profileDatas.email}</p>
          </div>
        ) : (
          // <a href="signin.html">
          //   <button class="login-button button">로그인</button>
          // </a>
          <LoginButton />
        )}
      </nav>
    </div>
  );
}

export default Header;
