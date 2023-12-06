import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./SharedPage";
import FolderPage from "./FolderPage";
import { Link } from "react-router-dom";

function DummyComponent() {
  return (
    <>
      <Link to="/shared">
        <button>shard</button>
      </Link>
      <Link to="/folder">
        <button>folder</button>
      </Link>
    </>
  );
}

function AllPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DummyComponent />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllPage;
