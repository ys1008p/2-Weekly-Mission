import Gnb from './shared/Gnb/Gnb';
import Footer from './shared/Footer/Footer';
import { getUser } from './fetchApi';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Gnb, Footer 갖춘 기본 레이아웃
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
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
