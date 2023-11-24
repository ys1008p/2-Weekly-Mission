import { Cards } from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import { getFolder, getUser } from './components/Api';
import Layout from './components/Layout';

function App() {
  const [items, setItems] = useState({});
  const [profile, setProfile] = useState([]);

  async function handleLoadLinks() {
    const { folder } = await getFolder();
    setItems(folder);
  }
  async function handleLoadProfile() {
    const profile = await getUser();
    setProfile(profile);
  }
  useEffect(() => {
    handleLoadLinks();
    handleLoadProfile();
  }, [items]);

  if (!items.links) return;

  return (
    <>
      <Layout items={items} profile={profile}></Layout>
    </>
  );
}

export default App;
