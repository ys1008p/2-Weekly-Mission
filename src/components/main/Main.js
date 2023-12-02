import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "./Main.css";
import { getData } from "../api/api";
import MainHeader from "./MainHeader";
export function Main() {
  const [folderDatas, setFolderDatas] = useState({});
  const [ownerDatas, setOwnerDatas] = useState({});
  const [links, setLinks] = useState([]);
  const getLinks = async () => {
    try {
      const result = await getData("sample/folder");
      // console.log("Main", result);
      const linksData = result.folder.links;
      const foldersData = result.folder;
      const ownerData = result.folder.owner;

      setFolderDatas(foldersData);
      setLinks(linksData);
      setOwnerDatas(ownerData);
    } catch (e) {
      console.log(`getLinks에서 ${e} 오류`);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <MainHeader ownerDatas={ownerDatas} folderDatas={folderDatas} />
      <div className="main-wrapper">
        <SearchBar />
        <div className="card-wrapper">
          {links.map((link) => {
            return (
              <>
                <Card key={link.id} link={link} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
