
import { Routes,Route} from 'react-router-dom';
import FolderPage from "./pages/FolderPage.js"
import SharedPage from "./pages/SharedPage.js"
import HomePage from "./pages/HomePage.js";


function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
    </div>
  );
}

export default App;
