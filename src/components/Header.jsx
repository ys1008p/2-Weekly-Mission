import React from "react";
import "../css/Header.css";

function Header({ folderData }) {
  const owner = folderData.owner || {};
  return (
    <header>
      <div className="user">
        <div className="myInfo">
          <div className="myImgBg">
            <img className="myImg" src={owner.profileImageSource} />
          </div>
          <span>{owner.name}</span>
        </div>
        <div>{folderData.name}</div>
      </div>
    </header>
  );
}

export default Header;
