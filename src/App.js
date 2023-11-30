import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';
import FolderPage from './pages/FolderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="*" element={<div>잘못된 페이지입니다.</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
