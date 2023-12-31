import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import SharedPage from './page/SharedPage';
import FolderPage from './page/FolderPage';
import SignupPage from './page/SignupPage';
import SigninPage from './page/SigninPage';
import CardList from './components/CardList';
import PopOver from './components/PopOver';
import Modal from './components/Modal';
import AddLinkBar from './components/AddLinkBar';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate replace to="/folder" />} />
        {/* <Route path="/" element={<FolderPage />} /> */}
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/shared" element={<SharedPage />}></Route>
        <Route path="/folder" element={<FolderPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
