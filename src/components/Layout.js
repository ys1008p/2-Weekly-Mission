import { getUser } from './fetchApi';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Gnb from './shared/Gnb/Gnb';
import Footer from './shared/Footer/Footer';
import SearchBar from './shared/SearchBar/SearchBar';
import AddLinkBar from './shared/AddLinkBar/AddLinkBar';
import Sorting from './Sorting/Sorting';

// Gnb, AddLinkBar, SearchBar, Footer 갖춘 기본 레이아웃
function Layout() {
  const [profile, setProfile] = useState({
    id: 0,
    name: '',
    email: '',
    profileImageSource: '',
  });

  async function handleLoadProfile() {
    const profile = await getUser();
    setProfile({ ...profile });
  }

  useEffect(() => {
    handleLoadProfile();
  }, []);

  return (
    <>
      <Gnb profile={profile} />
      <AddLinkBar />
      <SearchBar />
      <Sorting />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
