import { getUser } from './fetchApi';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Gnb from './shared/Gnb';
import Footer from './shared/Footer';

// Gnb, AddLinkBar, SearchBar, Footer 갖춘 기본 레이아웃
function Layout() {
  const [profile, setProfile] = useState({
    id: 0,
    created_at: '',
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });

  async function handleLoadProfile() {
    const { data } = await getUser();
    setProfile(data[0]);
  }

  useEffect(() => {
    handleLoadProfile();
  }, []);

  return (
    <>
      <Gnb profile={profile} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
