import Header from './Header.js'
import Nav from './Nav.js'
import Search from './Search.js'
import Cards from './Cards.js'
import Footer from './Footer.js'
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/App.css'
import { useEffect, useState } from 'react';
import { getUserProfile, getFolderProfile} from '../api.js'

function App() {
  const [profile, setProfile] = useState(null)
  const isSiginin = profile !== null

  const [userProfile, setUserProfile] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: ""
  });

  const [folderProfile, setFolderProfile] = useState({
    id: 0,
    name: "",
    owner: {
      id: 0,
      name: "",
      profileImageSource: ""
    },
    links: [],
    count: 0,
  });

  const handleLoad = async () => {
    const user = await getUserProfile();
    setUserProfile(user);
    setProfile(user)

    const { folder } = await getFolderProfile();
    setFolderProfile(folder);
  };

  useEffect(() => {
    handleLoad()
  }, []);

  return (
    <>
      <Nav userProfile={userProfile} isSiginin={isSiginin} />
      <Header folderProfile={folderProfile} />
      <main className="main">
        <Search />
        <Cards folderProfile={folderProfile} />
      </main>
      <Footer />
    </>
  )
}

export default App;
