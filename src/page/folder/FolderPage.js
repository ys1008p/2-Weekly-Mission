import Footer from "../../components/Footer";
import "../../components/reset.css";
import "../../components/root.css";
import { useEffect, useState } from "react";
import { getFolder, getFolderList } from "../../api";
import Header from './Header';
import Main from './Main';
import useAsync from "../hook/useAsync";

function FolderPage() {
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState("");
  const [cardList, setCardList] = useState([]);
  const [folderMenu, setFolderMenu] = useState([]);
  const [menuActive, setMenuActive] = useState('all');
  const [btnOption, setBtnOption] = useState(false);
  const [title, setTitle] = useState('');

  const [loadingProfile, errorProfile, getProfile] = useAsync('/users/1');
  const [loadingFolderMenu, errorFolderMenu, getFolderMenu] = useAsync('/users/1/folders'); 

  const handleLoadProfile = async () => {
    const { data } = await getProfile();
    setProfileImg(data[0].image_source);
    setProfileEmail(data[0].email);

    return [loadingProfile, errorProfile];
  };

  const handleLoadFolderMenu = async () => {
    const { data } = await getFolderMenu();
    setFolderMenu(data);

    return [loadingFolderMenu, errorFolderMenu];
  };

  const handleClick = (item) => {
    setMenuActive(item.id);
    setBtnOption(true);
    setTitle(`${item.name !== '전체' ? item.name : ""}`);
  }

  const handleMouseOver = (e) => e.currentTarget.classList.add("active");

  const handleMouseOut = (e) => e.currentTarget.classList.remove("active");

  const handleLoadFolder = async (options) => {
    if(options !== 'all') {
      const { data } = await getFolderList(options);
      setCardList(data);
    }else{
      const { data } = await getFolder();
      setCardList(data);
    }
  };

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolderMenu();
  },[])

  useEffect(() => {
    handleLoadFolder(menuActive);
  }, [menuActive]);

  return (
    <div className="container">
      <Header 
        className="header"
        profileImg={profileImg}
        profileEmail={profileEmail}
      />
      <Main
        className="main"
        links={cardList}
        menu={folderMenu}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        menuActive={menuActive}
        handleClick={handleClick}
        btnOption={btnOption}
        title={title}
      />
      <Footer className="footer"/>
    </div>
  );
}

export default FolderPage;
