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
      <Gnb />
      <main>
        <AddLink />
        <section className="folder-section">
          <SearchBar />
          <FolderContainer />
          <FolderAddButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FolderPage;
