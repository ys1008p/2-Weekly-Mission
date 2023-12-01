import { useEffect, useState } from "react";
import { Routes,Route} from 'react-router-dom';
import { getUserData, getFolderData } from "./api";
import HomePage from './pages/HomePage.js';
import FolderPage from "./pages/FolderPage.js";
import SharedPage from "./pages/SharedPage";


function App() {
  const [email, setEmail] = useState();
  const [folder, setFolder] = useState();

  const handleEmailLoad = async () => {
    const { email } = await getUserData();
    setEmail(email);
  };

  const handleFolderLoad = async () => {
    const { folder } = await getFolderData();
    setFolder(folder);
    console.log(folder.links);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFolderLoad();
  }, []);

  return (
    <div>
        <Routes>
          <Route path="/" element={<SharedPage email={email} folder={folder} />} />
          <Route path="shared" element={<SharedPage email={email} folder={folder} />} />
          <Route path="folder" element={<FolderPage email={email} folder={folder} />} />
        </Routes>
    </div>
  );
}

export default App;
