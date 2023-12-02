import { useEffect, useState } from "react";
import "./App.css";
import { getUserProfile } from "../api";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

function App() {
  const [isSignin, setIsSignin] = useState(true);
  const [userName, setUserName] = useState("");
  const [userProfileImgSrc, setUserProfileImgSrc] = useState("");
  const [userFolderName, setUserFolderName] = useState("");
  const [userFolderProfileImgSrc, setUserFolderProfileImgSrc] = useState("");
  const [folderOwnerName, setFolderOwnerName] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);

  const userProfileLoad = async (path = "sample/user") => {
    const { email, profileImageSource } = await getUserProfile(path);
    setUserName(email);
    setUserProfileImgSrc(profileImageSource);
  };

  const userFolderLoad = async (path = "sample/folder") => {
    const { folder } = await getUserProfile(path);
    setUserFolderProfileImgSrc(folder.owner.profileImageSource);
    setFolderOwnerName(folder.owner.name);
    setUserFolderName(folder.name);
    setFolderLinks(folder.links);
  };

  useEffect(() => {
    userProfileLoad();
    userFolderLoad();
  }, [isSignin]);

  return (
    <div className="App">
      <Nav
        isSignin={isSignin}
        userName={userName}
        userProfileImgSrc={userProfileImgSrc}
      />
      <Header
        userFolderProfileImgSrc={userFolderProfileImgSrc}
        folderOwnerName={folderOwnerName}
        userFolderName={userFolderName}
      />
      <Main folderLinks={folderLinks} />
      <Footer />
    </div>
  );
}

export default App;
