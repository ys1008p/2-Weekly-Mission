import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
        {/* <Route path="*" element="ErrorPage" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
