import Header from "./Header";
import Main from "./Main";
import Footer from "../../components/Footer";
import "../../components/reset.css";
import "../../components/root.css";
import { useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/sample";

function Shared() {
  const [cardList, setCardList] = useState([]);
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState("");
  const [folderUserProfile, setFolderUserProfile] = useState(null);
  const [folderUserName, setFolderUserName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [profileIsLoading, profileError, getProfileAsync] = useAsync(
    `${BASE_URL}/user`
  );
  const [folderIsLoading, folderError, getFolderAsync] = useAsync(
    `${BASE_URL}/folder`
  );

  const handleLoadProfile = async () => {
    const result = await getProfileAsync();
    if (!result) return;

    const { email, profileImageSource } = result;
    setProfileImg(profileImageSource);
    setProfileEmail(email);

    return [profileIsLoading, profileError];
  };

  const handleLoadFolder = async () => {
    const result = await getFolderAsync();
    if (!result) return;

    const { folder } = result;
    const { links } = folder;
    setFolderName(folder.name);
    setFolderUserName(folder?.owner?.name);
    setFolderUserProfile(folder?.owner?.profileImageSource);
    setCardList(links);

    return [folderIsLoading, folderError];
  };

  const handleMouseOver = (e) => e.currentTarget.classList.add("active");

  const handleMouseOut = (e) => e.currentTarget.classList.remove("active");

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
  }, []);

  return (
    <div className="container">
      <Header
        className="header"
        profileEmail={profileEmail}
        profileImg={profileImg}
        folderUserProfile={folderUserProfile}
        folderUserName={folderUserName}
        folderName={folderName}
      />
      <Main
        className="main"
        links={cardList}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Footer className="footer" />
    </div>
  );
}

export default Shared;
