import Gnb from "./components/Gnb";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { getFolders } from "./api";
import "./App.css";

function App() {
  const [folder, setFolder] = useState({ owner: null, name: null });

  useEffect(() => {
    const handleFolder = async () => {
      const { folder } = await getFolders();
      setFolder(folder);
    };
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
                return <CardList key={card.id} card={card} />;
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
