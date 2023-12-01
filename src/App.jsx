import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FolderPage from './pages/folder/FolderPage';
import SharedPage from './pages/shared/SharedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/shared' element={<SharedPage />} />
        <Route path='/folder' element={<FolderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
