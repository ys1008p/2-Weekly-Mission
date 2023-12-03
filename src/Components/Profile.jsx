import React from "react";
import "../css/Profile.css";
import profile from "../images/profile.svg";
function ProfileEmail({ userData }) {
  return (
    <div className="Profile">
      <a href="/">
        <img src={profile} alt="사람" />
      </a>
      <p>{userData.email}</p>
    </div>
  );
}
function Profile({ userData, folderData }) {
  return (
    <div className="ProfileContainer">
      <img src={userData.profileImageSource} alt="프로필이미지" />
      <h2>{userData.name}</h2>
      <p>{folderData?.folder?.name}</p>
    </div>
  );
}

export { Profile, ProfileEmail };
