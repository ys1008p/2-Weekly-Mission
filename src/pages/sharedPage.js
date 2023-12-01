import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardList from "../component/CardList";
import SearchInput from "../component/SearchInput";
import styles from "../styles/SharedPage.module.css";
function sharedPage({ email, folder }) {
  return (
    <>
      <Header email={email} />
      <Banner folder={folder} />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <CardList links={folder && folder.links} />
        </div>
      </section>
      <Footer />
      <div>공유페이지</div>
    </>
  );
}

export default sharedPage;
