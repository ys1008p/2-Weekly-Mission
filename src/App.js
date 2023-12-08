import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import SharedPage from './page/SharedPage';
import FolderPage from './page/FolderPage';
import SignupPage from './page/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/shared" element={<SharedPage />}></Route>
        <Route path="/folder" element={<FolderPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
