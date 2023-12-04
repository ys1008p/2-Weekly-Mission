import { useEffect, useState } from "react";
import "./css/Main.css";
import { getFolderData } from "./Components/Api";
import LinkCard from "./Components/LinkCard";
import search from "./images/search.svg";
import { Profile } from "./Components/Profile";

function Main() {
  const [folderData, setFolderData] = useState(null);

  const dataLoad = async () => {
    try {
      let result = await getFolderData();
      result.folder.links.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setFolderData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <main>
      <div>{folderData && <Profile folderData={folderData} />}</div>
      <div className="searchBar">
        <input type="search" placeholder="링크를 검색해 보세요" />
        <img src={search} alt="돋보기" />
      </div>
      {folderData && <LinkCard linkData={folderData} />}
    </main>
  );
}
export default Main;
