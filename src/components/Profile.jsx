import React from "react";
import avatar from "assets/images/Avatar.png";

const Profile = ({ folder }) => {
  return (
    <div className="profile">
      <img
        className="profileImg"
        src={folder?.owner.profileImageSource || avatar}
        alt="avatar"
      />
      <span className="userName">{folder?.owner.name || "@codeit"}</span>
      <span className="fav">{folder?.name || "⭐️ 즐겨찾기"}</span>
    </div>
  );
};

export default Profile;
