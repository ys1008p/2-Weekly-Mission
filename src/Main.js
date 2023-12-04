import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FolderPage from './components/pages/FolderPage';
import SharedPage from './components/pages/SharedPage';
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
