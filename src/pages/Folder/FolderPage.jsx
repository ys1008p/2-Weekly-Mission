import Gnb from "../../components/BaseComponents/Gnb";
import AddLink from "../../components/Components/AddLink";
import SearchBar from "../../components/Components/SearchBar";
import FolderContainer from "../../components/Components/FolderContainer";
import Footer from "../../components/BaseComponents/Footer";
import FolderAddButton from "../../components/Components/FolderAddButton";
import "./FolderPage.css";

function FolderPage() {
  return (
    <>
      <div>
        <Gnb />
      </div>
      <div>
        <AddLink />
        <section>
          <div className="folder-section">
            <SearchBar />
            <FolderContainer />
          </div>
        </section>
        <FolderAddButton />

        <Footer />
      </div>
    </>
  );
}

export default FolderPage;
