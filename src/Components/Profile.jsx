import React from "react";
import "../css/Profile.css";
function ProfileEmail({ userData }) {
  const alt = `${userData.name} 프로필 이미지`;
  return (
    <div className="Profile">
      <img src={userData.profileImageSource} alt={alt} />
      <p>{userData.email}</p>
    </div>
  );
}
function Profile({ folderData }) {
  return (
    <div className="ProfileContainer">
      <img
        src={folderData.folder.owner.profileImageSource}
        alt="프로필이미지"
      />
      <h2>{folderData.folder.owner.name}</h2>
      <p>{folderData?.folder?.name}</p>
    </div>
  );
}

export { Profile, ProfileEmail };
