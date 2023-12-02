import Header_copy from "../components/Header_copy";
import Main_copy from "../components/Main_copy";
import Footer from "../components/Footer";
import "../components/reset.css";
import "../components/root.css";
import { useEffect, useState } from "react";
import { getProfile, getFolder, getFolderMenu, getFolderList } from "../api";

function App_copy() {
  const [cardList, setCardList] = useState([]);
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState("");
  const [folderMenu, setFolderMenu] = useState([]);
  const [menuActive, setMenuActive] = useState('all');

  const handleLoadProfile = async () => {
    const { data } = await getProfile();
    setProfileImg(data[0].image_source);
    setProfileEmail(data[0].email);
  };

  const handleLoadFolderMenu = async () => {
    const { data } = await getFolderMenu();
    setFolderMenu(data);
  };

  const handleLoadFolder = async (options) => {
    if(options !== 'all') {
      const { data } = await getFolderList(options);
      setCardList(data);
    }else{
      const { data } = await getFolder();
      setCardList(data);
    }
  };

  const BASE_URL = "https://bootcamp-api.codeit.kr/api/users/1";
  async function getFolderList(menuActive) {
    try{
      const respones = await fetch(`${BASE_URL}/links?folderId=${menuActive}`);
      if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
      
      const result = await respones.json();
      return result;
    }catch(error){
      console.log(error);
    }
  }

  const handleMouseOver = (e) => e.currentTarget.classList.add("active");

  const handleMouseOut = (e) => e.currentTarget.classList.remove("active");

  const handleClick = (item) => {
    setMenuActive(item);
  }
 
  useEffect(() => {
    handleLoadProfile();
    handleLoadFolderMenu();
    handleLoadFolder(menuActive);
  }, [menuActive]);
 
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
        menuActive={menuActive}
        handleClick={handleClick}
      />
      <Footer className="footer" />
    </div>
  );
}

export default App_copy;
