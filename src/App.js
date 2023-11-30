import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/shared" element={<Shared />} />
          <Route path="*" element={<div>잘못된 페이지입니다.</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
