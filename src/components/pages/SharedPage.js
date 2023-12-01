import Footer from '../shared/Footer/Footer';
import Gnb from '../shared/Gnb/Gnb';
import SearchBar from '../shared/SearchBar/SearchBar';

export default function SharedPage() {
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

  return (
    <>
      <Gnb />
      <SearchBar />
      <Footer />
    </>
  );
}
