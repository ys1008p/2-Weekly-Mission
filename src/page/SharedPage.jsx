import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import FolderUser from '../components/FolderUser';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import useAsync from '../hook/useAsync';

function SharedPage() {
  const [cardList, setCardList] = useState([]);
  const [profileImg, setProfileImg] = useState(null);
  const [profileEmail, setProfileEmail] = useState('');

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
    setCardList(links);
  };

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
        <header>
          <Nav profileEmail={profileEmail} profileImg={profileImg} />
          <FolderUser/>
        </header>
        <div className="main">
          <SearchBar />
          <CardList
            cardList={cardList}
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default SharedPage;
