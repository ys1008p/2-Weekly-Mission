import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import { getApiItems } from "./services/api";
import "./styles/index.css";
function App() {
  const [loadingError, setLoadingError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const handleLoginStatusInfo = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getApiItems("sample/user");
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const userLoginInfo = result;
    if (userLoginInfo) {
      setIsLogin(true);
      setLoginInfo(userLoginInfo);
    }
  };
  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getApiItems("sample/folder");
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const { folder } = result;
    setItems(folder.links);
    setSelectedFolder(folder);
  };
  useEffect(() => {
    handleLoad();
    handleLoginStatusInfo();
  }, []);

  return (
    <>
      <Header isLogin={isLogin} selectedFolder={selectedFolder} loginInfo={loginInfo} />
      <main>
        <div className="wrapper">
          <SearchBar />
          <CardList handleCardClick={handleCardClick} items={items} />
        </div>
      </main>
      <Footer />
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

export default App;
