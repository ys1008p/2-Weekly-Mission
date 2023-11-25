import Gnb from "components/Gnb";
import "./App.css";
import Profile from "components/Profile";
import Folder from "pages/Folder";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import { getUser, getFolder } from "utils/api";

function App() {
  const [auth, setAuth] = useState({
    user: null,
    isLogin: false,
  });
  const [profile, setProfile] = useState({});

  const loginClick = async () => {
    try {
      const { data } = await getUser();
      setAuth({
        isLogin: true,
        user: data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchUserFolder = async (auth) => {
    if (auth.user === null) return;
    try {
      const {
        data: { folder },
      } = await getFolder();
      setProfile(folder);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserFolder(auth);
  }, [auth]);

  return (
    <div className="App">
      <Gnb auth={auth} onClick={loginClick} />
      <Profile profile={profile} />
      <Folder folder={profile.links} />
      <Footer />
    </div>
  );
}

export default App;
