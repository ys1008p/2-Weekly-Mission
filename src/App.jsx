import Gnb from "./Components/Gnb";
import Profile from "./Components/Profile";
import SearchBar from "./Components/SearchBar";
import FavoriteList from "./Components/FavoriteList";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { getFavorites } from "./api";

function App() {
  const [folder, setFolder] = useState([]);

  const handleFolder = async () => {
    const { folder } = await getFavorites();
    setFolder(folder);
  };

  useEffect(() => {
    handleFolder();
  }, []);

  return (
    <>
      <div>
        <Gnb />
      </div>
      <div>
        <Profile owner={folder.owner} name={folder.name} />
        <SearchBar />
        <div>
          {folder?.map((links) => {
            return <FavoriteList key={links.id} links={links} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
