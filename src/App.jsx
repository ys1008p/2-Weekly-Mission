import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LayoutStatusProvider } from '@/contexts/LayoutContext';
import { UserProvider } from '@/contexts/UserContext';

import FolderPage from './pages/folder/FolderPage';
import SharedPage from './pages/shared/SharedPage';

function App() {
  return (
    <UserProvider>
      <LayoutStatusProvider>
        <Router>
          <Routes>
            <Route path='/shared' element={<SharedPage />} />
            <Route path='/folder' element={<FolderPage />} />
          </Routes>
        </Router>
      </LayoutStatusProvider>
    </UserProvider>
  );
}

export default App;
