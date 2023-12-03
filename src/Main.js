import { useEffect, useState } from "react";
import "./css/Main.css";
import { getFolderData } from "./Components/Api";
import LinkCard from "./Components/LinkCard";

function Main() {
  const [folderData, setFolderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dataLoad = async () => {
    try {
      let result = await getFolderData();
      result.folder.links.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setFolderData(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <main>
      <div className="searchBar">
        <input type="text"></input>
      </div>
      {!isLoading && folderData && <LinkCard linkData={folderData} />}
    </main>
  );
}
export default Main;
