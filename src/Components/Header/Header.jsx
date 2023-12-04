import React, { useEffect, useState } from "react";
import { LoginProfile } from "../../api";
import "../../CSS/Landing.css";

export default function Header() {
  const [folderData, setFolderData] = useState(null);

  const fetchData = async () => {
    try {
      const folderResponse = await LoginProfile();

      setFolderData(folderResponse.folder);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="HeaderContainer">
      {folderData && (
        <div className="HeaderBox">
          <img
            src={folderData.owner.profileImageSource}
            alt="유저이미지"
            className="ImgHeader"
          />
          <p className="HeaderText">@{folderData.owner.name}</p>
          <p className="HeaderDescription">{folderData.name}</p>
        </div>
      )}
    </div>
  );
}
