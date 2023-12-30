import { Routes, Route } from "react-router-dom";
import FolderPage from "./pages/FolderPage.tsx";
import SharedPage from "./pages/SharedPage.tsx";
import Footer from "./components/commons/Footer.tsx";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
