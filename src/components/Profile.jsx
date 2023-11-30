import React from "react";
import "../css/Profile.css";

function Profile({ profileData }) {
  return (
    <div className="profile">
      {profileData ? (
        <>
          <img className="profileImg" src={profileData.profileImageSource} />
          <span>{profileData.email}</span>
        </>
      ) : (
        <button className="loginBtn">로그인</button>
      )}
    </div>
  );
}

export default Profile;
