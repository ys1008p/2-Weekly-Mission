import styles from "./styles/App.module.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import CardList from "./component/CardList";

function App() {
  return (
    <>
    <main>
      <Header/>
      <Banner/>
      <section className={styles.FavoritesPageBox}>
        <div className={styles.searchBox}>
          <input className={styles.searchInput} placeholder="링크를 검색해주세요"/>
          <img className={styles.searchIcon} src={process.env.PUBLIC_URL + "/images/search.png"}></img>
        </div>
        <CardList/>
      </section>
    </main>
      <Footer/>
    </>
  );
}

export default App;
