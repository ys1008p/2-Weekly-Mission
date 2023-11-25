import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "../assets/Search.svg";
import "./Main.css";
// import { getFolders } from "./api.js";
export function Main() {
  const [folderDatas, setFolderDatas] = useState({});
  const [ownerDatas, setOwnerDatas] = useState({});
  const [links, setLinks] = useState([]);
  const getLinks = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const result = await response.json();
      const linksData = [...result.folder.links];
      const foldersData = result.folder;
      const ownderData = { ...result.folder.owner };
      setFolderDatas(foldersData);
      setLinks(linksData);
      setOwnerDatas(ownderData);
    } catch (e) {
      console.log(`getLinks에서 ${e} 오류`);
    }
  };
  useEffect(() => {
    getLinks();
    console.log("useEffect실행");
  }, []);

  return (
    <>
      <div class="main-header">
        <div class="main-hearder_profile">
          <img
            className="main-header_profile_img"
            src={ownerDatas.profileImageSource}
          />
          <div className="main-header_profile_name">@{ownerDatas.name}</div>
        </div>
        <span className="main-header_folder-name">{folderDatas.name}</span>
      </div>
      <div className="main-wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder="링크를 입력해주세요"
        />
        <img src={Search} />
        <div className="card-wrapper">
          {links.map((link) => {
            return (
              <>
                <Card link={link} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
