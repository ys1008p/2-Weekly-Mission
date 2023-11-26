import Gnb from "./Components/Gnb";
import Profile from "./Components/Profile";
import SearchBar from "./Components/SearchBar";
import FavoriteList from "./Components/FavoriteList";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { getFavorites } from "./api";
import "./App.css";

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
        <section>
          <div className="folder">
            <SearchBar />
            <div className="cards">
              {folder.links?.map((card) => {
                return <FavoriteList key={card.id} card={card} />;
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
