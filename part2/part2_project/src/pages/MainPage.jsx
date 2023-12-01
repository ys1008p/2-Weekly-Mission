import { BrowserRouter } from "react-router-dom";
import SharedPage from "../SharedPage";
import FolderPage from "./FolderPage";

function AllPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllPage;
