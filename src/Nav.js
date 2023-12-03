import React, { useEffect, useState } from "react";
import linkbrary from "./images/linkbrary.svg";
import "./css/Nav.css";
import { getProfileData, getFolderData } from "./Components/Api";
import { Profile, ProfileEmail } from "./Components/Profile";

function Nav() {
  const [userData, setUserData] = useState(null);
  const [folderData, setFloderData] = useState(null);

  const dataLoad = async (type, state) => {
    let result;
    try {
      state(null);
      result = await type();
      state(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad(getProfileData, setUserData);
    dataLoad(getFolderData, setFloderData);
  }, []);

  return (
    <nav>
      <div className="navContainer">
        <div>
          <img src={linkbrary} alt="로고Linkbrary" />
        </div>
        <div>
          {userData ? (
            <ProfileEmail userData={userData} />
          ) : (
            <button>Login</button>
          )}
        </div>
      </div>
      {userData && folderData && (
        <Profile userData={userData} folderData={folderData} />
      )}
    </nav>
  );
}
export default Nav;
