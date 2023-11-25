import Gnb from "components/Gnb";
import "./App.css";
import Profile from "components/Profile";
import Folder from "pages/Folder";
import Footer from "components/Footer";
import { useContext, useState } from "react";
import { useApi } from "hooks/useApi";
import { AuthContext } from "contexts/AuthContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { setAuthData } = useContext(AuthContext);
  const { data: authData } = useApi("auth", "/sample/user");
  const { data: profileData } = useApi("folder", "/sample/folder");

  const loginClick = async () => {
    setIsLogin(true);
    setAuthData(authData);
  };

  return (
    <div className="App">
      <Gnb isLogin={isLogin} onClick={loginClick} />
      {isLogin && <Profile profile={profileData?.folder?.owner} />}
      <Folder folder={isLogin ? profileData?.folder?.links : []} />
      <Footer />
    </div>
  );
}

export default App;
