import { useEffect, useState } from "react";
import { getProfile } from "../api";
import logo from '../assets/logo.svg';
import AddLinkInput from './AddLinkInput';

function Profile(){
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState("");

  const handleLoadProfile = async () => {
    const { data } = await getProfile();
    setProfileImg(data[0].image_source);
    setProfileEmail(data[0].email);
  };

  useEffect(() => {
    handleLoadProfile();
  }, []);
 
  return (
    <header className="header">  
      <nav>
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
        </h1>
        <div className="profile">
          {profileEmail ? 
          <a href="/">
           <img src={profileImg} alt="프로필 이미지" />
           <p className="text mobile-hide">
             {profileEmail}
           </p>
         </a> :
          <a href="signin.html" className="cta">
            <span>로그인</span>
          </a>}
        </div>
      </nav>
      <AddLinkInput />
    </header>
  );
}

export default Profile;
