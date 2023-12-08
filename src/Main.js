import { useEffect, useState } from "react";
import { getFolderData } from "./Components/Api";
import { LinkCard } from "./Components/LinkCard";
import { Profile } from "./Components/Profile";
import SearchBar from "./Components/SearchBar";

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
      <SearchBar />
      {folderData && <LinkCard linkData={folderData.folder} />}
    </main>
  );
}
export default Main;
