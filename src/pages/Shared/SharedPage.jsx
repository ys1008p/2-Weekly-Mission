import Gnb from "../../components/BaseComponents/Gnb";
import Profile from "../../components/Components/Profile";
import SearchBar from "../../components/Components/SearchBar";
import SharedCardList from "../../components/Components/SharedCardList";
import Footer from "../../components/BaseComponents/Footer";
import "./SharedPage.css";

function SharedPage() {
  return (
    <>
      <div>
        <Gnb />
      </div>
      <div>
        <Profile />
        <section>
          <div className="folder">
            <SearchBar />
            <SharedCardList />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default SharedPage;
