import Gnb from "components/Gnb";
import "./App.css";
import Profile from "components/Profile";
import Folder from "pages/Folder";
import Footer from "components/Footer";
import { useContext, useState } from "react";
import { useFetcher } from "hooks/useFetcher";
import { AuthContext } from "contexts/AuthContext";
import { getFolder, getUser } from "utils/api";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { setAuthData } = useContext(AuthContext);
  const { data: auth } = useFetcher("auth", getUser);
  const { data: folder } = useFetcher("folder", getFolder);

  const loginClick = async () => {
    setIsLogin(true);
    setAuthData(auth);
  };

  return (
    <div className="App">
      <Gnb isLogin={isLogin} onClick={loginClick} />
      {isLogin && <Profile folder={folder} />}
      <Folder folder={isLogin ? folder?.links : []} />
      <Footer />
    </div>
  );
}

export default App;
