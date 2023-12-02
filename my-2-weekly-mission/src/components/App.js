import { GetProfileInformationLinks } from "../api";
import { GetFolderInformationLinks } from "../api";
import ProfileSection from "./ProfileSection";
import FolderList from "./FolderList";
import { useEffect, useState } from "react";

function App() {
  const [userProfile, setUserProfile] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const [folderProfile, setFolderProfile] = useState({
    id: 0,
    name: "",
    owner: {
      id: 0,
      name: "",
      profileImageSource: "",
    },
    links: [],
    count: 0,
  });

  const handleLoad = async () => {
    const user = await GetProfileInformationLinks();
    setUserProfile(user);
    console.log(user);

    const { folder } = await GetFolderInformationLinks();
    setFolderProfile(folder);
    console.log(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div>
        <ProfileSection items={userProfile} />
      </div>
      <div>
        <FolderList items={folderProfile} />
      </div>
    </div>
  );
}

export default App;
