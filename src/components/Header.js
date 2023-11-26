import '../components/Header.css';
import logo from '../assets/logo.svg';
import { useState, useEffect } from 'react';
import { getProfile, getFolder } from '../api';

function Header({ className }){
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState(null);
  const [folderUserProfile, setFolderUserProfile] = useState(null);
  const [folderUserName, setFolderUserName] = useState('');
  const [folderName, setFolderName] = useState('');

  const handleLoadProfile = async (options) => {
    const { email, profileImageSource } = await getProfile(options);
    setProfileEmail(email);
    setProfileImg(profileImageSource);
  }

  const handleLoadFolder = async (options) => {
    const { folder } = await getFolder(options);
    setFolderName(folder.name);
    setFolderUserName(folder.owner?.name);
    setFolderUserProfile(folder.owner?.profileImageSource);
  }

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
  }, [])

  return (
    <header className={className}>
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
          <a href="signin.html" className="cta cta-short">
            <span>로그인</span>
          </a>}
        </div>
      </nav> 
      <div className="folder-info">
        <img className="user-profile" src={folderUserProfile} alt="폴더 사용자 프로필 이미지" />
        <p className="user-name">
          {folderUserName}
        </p>
        <p className="name">
          {folderName}
        </p>
      </div>
    </header>
  )
}

export default Header;