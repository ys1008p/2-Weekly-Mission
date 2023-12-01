import { useEffect, useState } from "react";
import { getProfile, getFolder } from "../api";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [profile, setProfile] = useState();
  const [folder, setFolder] = useState({});
  const [links, setLinks] = useState([]);

  const loadProfile = async () => {
    try {
      const { profileImageSource, email } = await getProfile();
      setProfile({ profileImageSource, email });
    } catch (error) {
      console.log(error);
    }
  };

  const loadFolder = async () => {
    try {
      const { folder } = await getFolder();
      setFolder(folder);
      setLinks(folder.links);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProfile();
    loadFolder();
  }, []);

  return (
    <>
      <Navigation profile={profile} />
      {Object.keys(folder).length === 0 || <Header folder={folder} />}
      <Main links={links} />
      <Footer />
    </>
  );
}

export default App;
