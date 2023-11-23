import React from "react";
import avatar from "assets/images/Avatar.png";
const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" />
      <span className="userName">@Profile</span>
      <span className="fav">⭐️ 즐겨찾기</span>
    </div>
  );
};

export default Profile;
