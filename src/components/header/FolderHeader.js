import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { getData } from "../api/api";
import LoginButton from "./LoginButton";
export function FolderHeader() {
  const [profileDatas, setProfileDatas] = useState({
    id: 0,
    created_at: "",
    name: "",
    image_source: "",
    email: "",
    auth_id: "",
  });

  const getUserData = async () => {
    try {
      const result = await getData("users/1");
      const { id, created_at, name, image_source, email, auth_id } =
        result.data[0];

      setProfileDatas((prevProfileDatas) => ({
        ...prevProfileDatas,
        id: id,
        created_at: created_at,
        name: name,
        image_source: image_source,
        email: email,
        auth_id: auth_id,
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
        <div class="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        {profileDatas.auth_id ? (
          <div className="header-profile">
            <img
              className="header-profile_profile-img"
              src={profileDatas.image_source}
            />
            <p className="header-profile_profile-name">{profileDatas.email}</p>
          </div>
        ) : (
          <LoginButton />
        )}
      </nav>
    </div>
  );
}

export default FolderHeader;
