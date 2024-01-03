import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserData } from "./services/SharedApi.tsx";
import Header from "./components/commons/Header.tsx";
import FolderPage from "./pages/FolderPage.tsx";
import SharedPage from "./pages/SharedPage.tsx";
import Footer from "./components/commons/Footer.tsx";

function Main() {
  interface UserInfo {
    id: number;
    name: string;
    email: string;
    profileImageSource: string;
  }

  const [user, setUser] = useState<UserInfo>({
    id: 1,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const handleEmailLoad = async () => {
    const data = await getUserData();
    setUser(data);
  };

  useEffect(() => {
    handleEmailLoad();
  }, []);

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<SharedPage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
