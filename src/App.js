import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';
import FolderPage from './pages/FolderPage';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/shared" element={<Shared />} />
            <Route path="/folder" element={<FolderPage />} />
            <Route path="*" element={<div>잘못된 페이지입니다.</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
