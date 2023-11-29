// import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/Global.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Bookmark from "./components/Bookmark";

function App() {
  return (
    <div>
      <Header />
      <Bookmark />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
