import React, { useEffect, useState } from "react";
import linkbrary from "./images/linkbrary.svg";
import "./css/Nav.css";
import { getProfileData } from "./Components/Api";
import { ProfileEmail } from "./Components/Profile";

function Nav() {
  const [userData, setUserData] = useState(null);
  const dataLoad = async () => {
    let result;
    try {
      setUserData(null);
      result = await getProfileData();
      setUserData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <nav>
      <div className="navContainer">
        <img src={linkbrary} alt="로고Linkbrary" />
        <div>
          {userData ? (
            <ProfileEmail userData={userData} />
          ) : (
            <button>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Nav;
