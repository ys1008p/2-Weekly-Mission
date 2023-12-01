import styles from "./styles/App.module.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import CardList from "./component/CardList";
import SearchInput from "./component/SearchInput";
import { useEffect, useState } from "react";
import { getUserData, getFolderData } from "./api";

function App() {
  const [email, setEmail] = useState();
  const [folder, setFolder] = useState();

  const handleEmailLoad = async () => {
    const { email } = await getUserData();
    setEmail(email);
  };

  const handleFolderLoad = async () => {
    const { folder } = await getFolderData();
    setFolder(folder);
    console.log(folder.links);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFolderLoad();
  }, []);

  return (
    <div>
      <Header email={email} />
        <Banner folder={folder} />
        <section className={styles.contentFlax}>
          <div className={styles.contentBox}>
            <SearchInput/>
            <CardList links={folder && folder.links} />
          </div>
        </section>

      <Footer />
    </div>
  );
}

export default App;
