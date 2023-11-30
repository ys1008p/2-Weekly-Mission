import React, { useState, useEffect } from "react";
import "../css/App.css";
import Nav from "./Nav";
import Header from "./Header";
import Search from "./Search";
import CardList from "./CardList";
import Footer from "./Footer";

function App() {
  const [profileData, setProfileData] = useState({});
  const [folderData, setFolderData] = useState({ links: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const userData = await userResponse.json();
        setProfileData(userData);

        const folderResponse = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const folderData = await folderResponse.json();
        setFolderData(folderData.folder);
      } catch (error) {
        console.error("Data fetching error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Nav profileData={profileData} />
      <Header folderData={folderData} />
      <div className="App-container">
        <Search />
        <CardList folderData={folderData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
