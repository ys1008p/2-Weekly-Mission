import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Test from "./components/Test";
import SharedPage from "./components/Page/SharedPage";
import FolderPage from "./components/Page/FolderPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/shared" element={<SharedPage/>} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
