import Header from "../component/Header";
import Footer from "../component/Footer";
import FolderBanner from "../component/FolderBanner";
import CardList from "../component/CardList";
import SearchInput from "../component/SearchInput";
import styles from "../styles/FolderPage.module.css";
import ButtonList from"../component/ButtonList"
import TitleArea from "../component/TitleArea"
import { getFolderUserData, getFolderData } from "../api";
import { useEffect, useState } from "react";

function FolderPage() {
  const [links, setLinks] = useState();
  const [email, setEmail] = useState();

  const handleEmailLoad = async () => {
    const { data } = await getFolderUserData();
    setEmail(data[0].email);
  };

  const handleFolderLoad = async () => {
    const { data } = await getFolderData();
    setLinks(data);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFolderLoad();
  }, []);

  return (
    <>
      <Header email={email} />
      <FolderBanner/>
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <ButtonList/>
          <TitleArea/>
          {links ? <CardList folderLinks={links} page={"folderPage"} />:<div className={styles.linksNull}><div>저장된 링크가 없습니다.</div></div>}
        </div>
      </section>
      <Footer />
    </> 
  );
}

export default FolderPage;
