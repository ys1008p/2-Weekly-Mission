import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';
import Footer from './components/commons/Footer';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
