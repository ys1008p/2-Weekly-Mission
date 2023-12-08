import Gnb from "../../components/BaseComponents/Gnb";
import AddLink from "../../components/Components/AddLink";
import SearchBar from "../../components/Components/SearchBar";
import FolderLists from "../../components/Components/FolderLists";
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
          <FolderLists />
          <FolderAddButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FolderPage;
