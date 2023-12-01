import { useEffect, useState } from "react";
import { Routes,Route} from 'react-router-dom';
import { getUserData} from "./apis/loginApi.js";
import FolderPage from "./pages/FolderPage.js"
import SharedPage from "./pages/SharedPage.js"


function App() {
  const [email, setEmail] = useState();

  const handleEmailLoad = async () => {
    const { email } = await getUserData();
    setEmail(email);
  };


  useEffect(() => {
    handleEmailLoad();
  }, []);

  return (
    <div>
        <Routes>
          <Route path="/" element={<SharedPage email={email} />} />
          <Route path="shared" element={<SharedPage email={email}/>} />
          <Route path="folder" element={<FolderPage email={email} />} />
        </Routes>
    </div>
  );
}

export default App;
