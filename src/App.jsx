import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LayoutStatusProvider } from '@/contexts/LayoutContext';
import { ModalProvider } from '@/contexts/ModalContext';
import { UserProvider } from '@/contexts/UserContext';

import FolderPage from './pages/folder/FolderPage';
import LandingPage from './pages/landing/LandingPage';
import SharedPage from './pages/shared/SharedPage';

function App() {
  return (
    <ModalProvider>
      <UserProvider>
        <LayoutStatusProvider>
          <Router>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/shared' element={<SharedPage />} />
              <Route path='/folder' element={<FolderPage />} />
            </Routes>
          </Router>
        </LayoutStatusProvider>
      </UserProvider>
    </ModalProvider>
  );
}

export default App;
