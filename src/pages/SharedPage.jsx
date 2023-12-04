import { Nav } from "../components/Nav.jsx";
import { Header } from "../components/Header.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { CardList } from "../components/CardList.jsx";
import { Footer } from "../components/Footer.jsx";
import { useGetFolderData } from "../api/useGetFolderData.js";
import { FolderDataContext } from "../util/FolderDataContext.js";
import "../styles/MainSection.css";

function SharedPage() {
  const folderData = useGetFolderData();

  return (
    <>
      <Nav />
      <FolderDataContext.Provider value={folderData}>
        <Header />
        <div className="main-section">
          <SearchBar />
          <CardList />
        </div>
      </FolderDataContext.Provider>
      <Footer />
    </>
  );
}

export { SharedPage };
