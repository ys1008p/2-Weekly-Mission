import { useEffect, useState } from "react";
import Header from "../components/commons/Header";
import Banner from "../components/domains/folder/shared/Banner.tsx";
import CardList from "../components/CardList";
import SearchInput from "../components/SearchInput";
import styles from "../styles/sharedPage.module.css";
import { getSharedData, getUserData } from "../services/SharedApi.tsx";

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

  useEffect(() => {
    handleEmailLoad();
    handleFolderLoad();
  }, []);

  return (
    <>
      <Header sharedUser={user} />
      <Banner folder={folder} />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <CardList links={folder && folder.links} />
        </div>
      </section>
    </>
  );
}

export default SharedPage;
