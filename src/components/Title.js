import "./Style.css";
import { useState, useEffect } from "react";

function Title() {

  const [folderData, setFolderData] = useState();
  const fetchUserProfile = async () => {
    try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
      const data = await response.json();
      setFolderData(data);
    } catch (error) {
      console.error('프로필 데이터를 불러오는 중 에러 발생:', error);
    }
  };
  
  useEffect(() => {
    fetchUserProfile();
  },[]);


  return (
    <div className="Title">
      {folderData && (
      <div>
        <img className="UserProfileImg" src={folderData.folder.owner.profileImageSource} alt="프로필 이미지" />
        <p className="UserName">{folderData.folder.owner.name}</p>
        <p className="BookMark">{folderData.folder.name}</p>
      </div>
  )}
  </div>
  );
}

export default Title;