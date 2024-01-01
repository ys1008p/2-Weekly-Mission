import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import AddLinkBar from '../components/AddLinkBar';
import Nav from '../components/Nav';
import TabMenu from '../components/TabMenu';
import SearchBar from '../components/SearchBar';
import ButtonOption from '../components/ButtonOption';
import AddFolder from '../components/AddFolder';
import CardList from '../components/CardList';
import useAsync from '../hook/useAsync';

function FolderPage() {
  const [cardList, setCardList] = useState([]);
  const [folderMenu, setFolderMenu] = useState([]);
  const [menuActive, setMenuActive] = useState('all');
  const [btnOption, setBtnOption] = useState(false);
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const [data, setData] = useState(null);

  const [getFolderMenu] = useAsync('/users', '/1', '/folders', '');
  const [getFolderAll] = useAsync('/users', '/1', '/links', '');
  const [getFolderData] = useAsync(
    '/users',
    '/1',
    '/links?folderId=',
    menuActive
  );

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

  useEffect(() => {
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
            position={position}
          />
          <AddLinkBar menu={folderMenu}/>
        </header>
        <div className="main">
          <SearchBar />
          <TabMenu
            menu={folderMenu}
            handleClick={handleClick}
            menuActive={menuActive}
            btnOption={btnOption}
          />
          <ButtonOption
            title={title}
            cardList={cardList}
            btnOption={btnOption}
            menuActive={menuActive}
            menu={folderMenu}
          />
          <CardList
            cardList={cardList}
            data={data}
            menu={folderMenu}
          />
          <AddFolder />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default FolderPage;
