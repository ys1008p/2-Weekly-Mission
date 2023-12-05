import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import useAsync from "../hook/useAsync";
import Header from "./Header";
import Main from "./Main";
import Footer from "../../components/Footer";
import "../../components/root.css";

function SharedPage() {
  const [cardList, setCardList] = useState([]);
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState("");
  const [folderUserProfile, setFolderUserProfile] = useState(null);
  const [folderUserName, setFolderUserName] = useState("");
  const [folderName, setFolderName] = useState("");

  const [getProfileSample] = useAsync('/sample/user', '', '', '');
  const [getFolderSample] = useAsync('/sample/folder', '', '', '');

  const handleLoadProfile = async () => {
    const { email, profileImageSource } = await getProfileSample();
    setProfileImg(profileImageSource);
    setProfileEmail(email);
  };

  const handleLoadFolder = async () => {
    const { folder } = await getFolderSample();
    const { links } = folder;
    setFolderName(folder.name);
    setFolderUserName(folder?.owner?.name);
    setFolderUserProfile(folder?.owner?.profileImageSource);
    setCardList(links);
  };

  const handleMouseOver = (e) => e.currentTarget.classList.add("active");

  const handleMouseOut = (e) => e.currentTarget.classList.remove("active");

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
  }, []);

  return (
    <>
      <Helmet>
        <title>SharedPage</title>
      </Helmet>
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
        <Footer />
      </div>
    </>
  );
}

export default SharedPage;
