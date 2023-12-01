import React, { useEffect, useState } from "react";
import { LoginProfile } from "../../api";

export default function Header() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const folderResponse = await LoginProfile();

      setFolderData(folderResponse.folder);
    };

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
