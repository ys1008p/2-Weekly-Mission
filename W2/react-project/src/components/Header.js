import { useState, useEffect } from "react";
import "../styles/Header.css";
import profile from "../assets/profile.png";
import logo from "../assets/logo.svg";


function Header(){
 const [profileData, setProfileData] = useState(null);
 const [page, setPage] = useState(1);
 
 useEffect(()=>{
  fetch(`https://bootcamp-api.codeit.kr/api/sample/user?page=${page}`)
  .then((response)=>response.json())
  .then((data)=>setProfileData(data));
 }, [page])

return (
    <header>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src={logo} alt="Linkbrary logo to home page" />
          </a>
          <div className="profile-contents">
            <img className="profile-image" src={profileData?.profileImageSource} alt="profile" />
            <p>{profileData?.email}</p>
          </div>
        </div>
      </nav>
    </header>
  );

}

export default Header;

/*
function Header({sendHeader}) {
  

  return (
    <header>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src={logo} alt="Linkbrary logo to home page" />
          </a>
          <div className="profile-contents">
            <img className="profile-image" src={profile} alt="profile" />
            <p>{sendHeader.email}</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
*/