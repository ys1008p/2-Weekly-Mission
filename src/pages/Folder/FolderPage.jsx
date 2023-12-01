import Gnb from "../../components/BaseComponents/Gnb";
import AddLink from "../../components/Components/AddLink";
import SearchBar from "../../components/Components/SearchBar";
import FolderCardList from "../../components/Components/FolderCardList";
import Footer from "../../components/BaseComponents/Footer";

function FolderPage() {
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
            <FolderCardList />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FolderPage;
