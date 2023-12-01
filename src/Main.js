import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SharedPage from "./pages/Shared/SharedPage";
import FolderPage from "./pages/Folder/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/folder" />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
