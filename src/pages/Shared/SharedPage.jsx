import Gnb from "../../components/BaseComponents/Gnb";
import Profile from "../../components/Components/Profile";
import SearchBar from "../../components/Components/SearchBar";
import SharedCardList from "../../components/Components/SharedCardList";
import Footer from "../../components/BaseComponents/Footer";
import "./SharedPage.css";

function SharedPage() {
  return (
    <>
      <Gnb />
      <main>
        <Profile />
        <section className="folder">
          <SearchBar />
          <SharedCardList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SharedPage;
