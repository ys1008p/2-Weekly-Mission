import Header from "../component/Header";
import Footer from "../component/Footer";
import FolderBanner from "../component/FolderBanner";
import CardList from "../component/CardList";
import SearchInput from "../component/SearchInput";
import styles from "../styles/FolderPage.module.css";
import ButtonList from "../component/ButtonList";
import TitleArea from "../component/TitleArea";
import FloatingButton from "../component/FloatingButton";
import { getFolderUserData, getSelectData, getAllLinksData, getFoldersData } from "../apis/folder/folderApi.js";
import { useEffect, useState } from "react";

function FolderPage() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [user, setUser] = useState();
  const [id, setId] = useState(0);

  const handleEmailLoad = async () => {
    const { data } = await getFolderUserData();
    setUser(data[0]);
  };

  const handleFoldersLoad = async () => {
    const addFolder = {
      id: 0,
      name: "전체",
      link: [],
    };
    const allData = await getAllLinksData();
    const { data } = await getFoldersData();
    addFolder.link = allData.data;
    setFolders([addFolder, ...data]);
    if (id == 0) {
      setLinks(addFolder.link);
    }
  };

  const selectFolderLoad = async () => {
    const { data } = await getSelectData(id);
    setLinks(data);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFoldersLoad();
    if (id != 0) {
      selectFolderLoad();
    }
  }, [id]);

  return (
    <>
      <Header user={user} />
      <FolderBanner />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <ButtonList folders={folders} setId={setId} />
          <TitleArea folders={folders} id={id} />
          {
            links.length ===0?
            <div className={styles.linksNull}>
              <div>저장된 링크가 없습니다.</div>
            </div>
            :
            <CardList foldersLink={links} page={"folderPage"} />
          }
        </div>
      </section>
      <Footer />
      <FloatingButton/>
    </>
  );
}

export default FolderPage;
