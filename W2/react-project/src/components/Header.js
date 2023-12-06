import { useState, useEffect } from "react";
import "../styles/Header.css";
//import profileImageSource from "../assets/profile.png";
import logo from "../assets/logo.svg";
//import Search from "./Search"
import linkIcon from "../assets/link.svg";


function InputAddLink(){
  const inputPlaceHolder ="링크를 추가해 보세요" 
  const inputIcon = linkIcon

  return (
    <section className="header-input-structure">
      <div className="header-input-box">
      <form className="header-add-box">
      <img src={inputIcon} alt="searchButton" />
        <input className="header-input" type="text" placeholder={inputPlaceHolder} />
        </form> 
         
        <button className="header-add-button">추가하기</button>
        
      </div>
    </section>
  )
}


function Header(){
 const [profileData, setProfileData] = useState(null);
 const [page, setPage] = useState(1);
 
 useEffect(()=>{
   fetch(`https://bootcamp-api.codeit.kr/api/sample/user?page=${page}`)
  .then (async (response)=>{
    const data = await response.json()
    setProfileData(data)
  })
  // .then((data)=>{
    
  //   });
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
       <InputAddLink/>
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