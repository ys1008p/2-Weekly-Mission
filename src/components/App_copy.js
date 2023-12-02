import Header_copy from "../components/Header_copy";
import Main_copy from "../components/Main_copy";
import Footer from "../components/Footer";
import "../components/reset.css";
import "../components/root.css";
import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/users";

function App_copy() {
  const [cardList, setCardList] = useState([]);
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState("");
  const [folderMenu, setFolderMenu] = useState([]);

  const [profileIsLoading, profileError, getProfileAsync] = useAsync(
    `${BASE_URL}/1`
  );
  const [folderIsLoading, folderError, getFolderAsync] = useAsync(
    `${BASE_URL}/1/links`
  );
  const [folderMenuIsLoading, folderMenuError, getFolderMenuAsync] = useAsync(
    `${BASE_URL}/1/folders`
  );
   
  const handleLoadProfile = async () => {
    const result = await getProfileAsync();
    if (!result) return;

    const { data } = result;
    setProfileImg(data[0].image_source);
    setProfileEmail(data[0].email);

    return [profileIsLoading, profileError];
  };

  const handleLoadFolder = async () => {
    const result = await getFolderAsync();
    if (!result) return;

    const { data } = result;
    setCardList(data);

    return [folderIsLoading, folderError];
  };

  const handleLoadFolderMenu = async () => {
    const result = await getFolderMenuAsync();
    if (!result) return;

    const { data } = result;
    setFolderMenu(data);

    return [folderMenuIsLoading, folderMenuError];
  };

  const handleMouseOver = (e) => e.currentTarget.classList.add("active");

  const handleMouseOut = (e) => e.currentTarget.classList.remove("active");



  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
    handleLoadFolderMenu();
  }, []);
 
  return (
    <div className="container">
      <Header_copy
        className="header"
        profileEmail={profileEmail}
        profileImg={profileImg}
      />
      <Main_copy
        className="main"
        links={cardList}
        menu={folderMenu}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {/* <Footer className="footer" /> */}
    </div>
  );
}

export default App_copy;
