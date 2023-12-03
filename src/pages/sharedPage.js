import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CardList from "../component/CardList";
import SearchInput from "../component/SearchInput";
import styles from "../styles/SharedPage.module.css";
import {getSharedData ,getUserData } from "../apis/sharedApi";
import { useEffect, useState } from "react";

function SharedPage() {
  const [folder, setFolder] = useState();
  const [user, setUser] = useState();
  
  const handleFolderLoad = async () => {
    const { folder } = await getSharedData();
    setFolder(folder);

  };


  const handleEmailLoad = async () => {
    const { data } = await getUserData();
    setUser(data);
  };


  useEffect(()=>{
    handleEmailLoad();
    handleFolderLoad()
  },[])


  return (
    <>
      <Header sharedUser={user} page={'sharedPage'} />
      <Banner folder={folder} />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <CardList sharedLinks={folder && folder.links} page={'sharedPage'} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SharedPage;
