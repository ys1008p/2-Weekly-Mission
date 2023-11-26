import { useEffect, useState } from 'react';
import { getFolder, getUser } from './components/Api';
import Layout from './components/Layout';

function App() {
  const [items, setItems] = useState({});
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLoadLinks() {
    try {
      setIsLoading(true);
      const { folder } = await getFolder();
      setItems(folder);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  async function handleLoadProfile() {
    const profile = await getUser();
    setProfile(profile);
  }
  useEffect(() => {
    handleLoadLinks();
    handleLoadProfile();
  }, []);

  if (!items.links) return;

  return <Layout items={items} profile={profile}></Layout>;
}

export default App;
