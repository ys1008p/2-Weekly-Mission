import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import '../../components/root.css';
import AddLinkBar from '../../components/AddLinkBar';
import Nav from '../../components/Nav';
import TabMenu from '../../components/TabMenu';
import SearchBar from '../../components/SearchBar';
import MainTitle from '../../components/MainTitle';
import AddFolder from '../../components/AddFolder';
import CardList from '../../components/CardList';
import useAsync from '../../hook/useAsync';
function FolderPage() {
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState('');
  const [cardList, setCardList] = useState([]);
  const [folderMenu, setFolderMenu] = useState([]);
  const [menuActive, setMenuActive] = useState('all');
  const [btnOption, setBtnOption] = useState(false);
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const [data, setData] = useState(null);

  const [getProfile] = useAsync('/users', '/1', '', '');
  const [getFolderMenu] = useAsync('/users', '/1', '/folders', '');
  const [getFolderAll] = useAsync('/users', '/1', '/links', '');
  const [getFolderData] = useAsync(
    '/users',
    '/1',
    '/links?folderId=',
    menuActive
  );

  const handleLoadProfile = async () => {
    const { data } = await getProfile();
    setProfileImg(data[0].image_source);
    setProfileEmail(data[0].email);
  };

  const handleLoadFolderMenu = async () => {
    const { data } = await getFolderMenu();
    setFolderMenu(data);
  };

  const handleLoadFolderData = async (options) => {
    if (options !== 'all') {
      const { data } = await getFolderData(options);
      setCardList(data);
    } else {
      const { data } = await getFolderAll();
      setCardList(data);
    }
  };

  const handleClick = (item) => {
    setMenuActive(item.id);
    setBtnOption(true);
    setTitle(`${item.name !== '전체' ? item.name : ''}`);
  };

  const handleMouseOver = (e) => e.currentTarget.classList.add('active');

  const handleMouseOut = (e) => e.currentTarget.classList.remove('active');

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolderMenu();
    setPosition('static');
    setData('created_at');
  }, []);

  useEffect(() => {
    handleLoadFolderData(menuActive);
  }, [menuActive]);

  return (
    <>
      <Helmet>
        <title>FolderPage</title>
      </Helmet>
      <div className="container">
        <header>
          <Nav
            profileImg={profileImg}
            profileEmail={profileEmail}
            position={position}
          />
          <AddLinkBar />
        </header>
        <div className="main">
          <SearchBar />
          <TabMenu
            menu={folderMenu}
            handleClick={handleClick}
            menuActive={menuActive}
            btnOption={btnOption}
          />
          <MainTitle
            title={title}
            btnOption={btnOption}
            menuActive={menuActive}
          />
          <CardList
            links={cardList}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            data={data}
          />
          <AddFolder />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FolderPage;
