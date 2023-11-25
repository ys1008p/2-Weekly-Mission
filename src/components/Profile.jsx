import React from "react";
import avatar from "assets/images/Avatar.png";

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" />
      <span className="userName">{profile?.owner?.name || "@codeit"}</span>
      <span className="fav">{profile?.name || "⭐️ 즐겨찾기"}</span>
    </div>
  );
};

export default Profile;
