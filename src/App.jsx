import Gnb from "components/Gnb";
import "./App.css";
import Profile from "components/Profile";
import Folder from "pages/Folder";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      <Gnb />
      <Profile />
      <Folder />
      <Footer />
    </div>
  );
}

export default App;
