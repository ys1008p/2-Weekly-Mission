import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedPage from './pages/SharedPage/SharedPage';
import FolderPage from './pages/FolderPage/FolderPage';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/shared" element={<SharedPage />} />
            <Route path="/folder" element={<FolderPage />} />
            <Route path="*" element={<div>잘못된 페이지입니다.</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
