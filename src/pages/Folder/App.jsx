import Gnb from "../../components/SharedComponent/Gnb";
import AddLink from "../../components/FolderComponent/AddLink";
import SearchBar from "../../components/FolderComponent/SearchBar";
import CardList from "../../components/FolderComponent/CardList";
import Footer from "../../components/SharedComponent/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Gnb />
      </div>
      <div>
        <AddLink />
        <section>
          <div className="folder">
            <SearchBar />
            <CardList />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
