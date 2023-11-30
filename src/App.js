import { useEffect, useState } from 'react';
import { getFolder, getUser } from './components/Api';
import Layout from './components/Layout';

function App() {
  const [folder, setFolder] = useState({
    folder: {
      id: 0,
      name: '',
      owner: {
        id: 0,
        name: '',
        profileImageSource: '',
      },
      links: [],
    },
    count: 0,
  });
  const [profile, setProfile] = useState({
    id: 0,
    name: '',
    email: '',
    profileImageSource: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleLoadLinks() {
    try {
      setIsLoading(true);
      const { folder } = await getFolder();
      setFolder(folder);
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

  if (!profile.profileImageSource) return;

  return <Layout folder={folder} profile={profile} />;
}

export default App;
