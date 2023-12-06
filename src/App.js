
import { Routes,Route} from 'react-router-dom';
import FolderPage from "./pages/FolderPage.js"
import SharedPage from "./pages/SharedPage.js"


function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<FolderPage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
    </div>
  );
}

export default App;
