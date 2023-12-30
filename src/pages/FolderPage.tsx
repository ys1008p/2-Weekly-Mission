import { useEffect, useState } from "react";
import Header from "../components/commons/Header.tsx";
import Banner from "../components/domains/folder/Banner.tsx";
import CardList from "../components/commons/CardList.tsx";
import SearchInput from "../components/commons/SearchInput.tsx";
import styles from "../styles/folderPage.module.css";
import FolderButtonList from "../components/domains/folder/FolderButtonList.tsx";
import FolderTitle from "../components/domains/folder/FolderTitle.tsx";
import FloatingButton from "../components/domains/folder/FloatingButton.tsx";
import {
  getFolderUserData,
  getAllLinksData,
  getFoldersData,
} from "../services/FolderApi.tsx";

interface LinkInfo {
  id: number;
  create_at: string;
  updated_at: string;
  image_source: string;
  title: string;
  url: string;
}

interface FolderInfo {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: LinkInfo[];
}

function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInfo[]>([]);
  const [selectFolderLinks, setSelectFolderLinks] = useState<[]>([]);
  const [user, setUser] = useState();
  const [id] = useState(0);

  const handleEmailLoad = async () => {
    const { data } = await getFolderUserData();
    setUser(data[0]);
  };

  const handleFoldersLoad = async () => {
    const allLinksFolder: FolderInfo = {
      id: 0,
      favorite: false,
      name: "전체",
      user_id: 1,
      links: [
        {
          id: 0,
          create_at: "",
          updated_at: "",
          image_source: "",
          title: "",
          url: "",
        },
      ],
    };
    const allData = await getAllLinksData();
    const { data } = await getFoldersData();
    allLinksFolder.links = allData.data;
    setFolderList([allLinksFolder, ...data]);
  };

  useEffect(() => {
    handleEmailLoad();
    handleFoldersLoad();
  }, [id]);

  return (
    <>
      <Header user={user} />
      <Banner />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <FolderButtonList
            folderList={folderList}
            setSelectFolderLinks={setSelectFolderLinks}
          />
          <FolderTitle folderList={folderList} id={id} />
          {selectFolderLinks.length === 0 ? (
            <div className={styles.linksNull}>
              <div>저장된 링크가 없습니다.</div>
            </div>
          ) : (
            <CardList selectFolderLinks={selectFolderLinks} />
          )}
        </div>
      </section>
      <FloatingButton />
    </>
  );
}

export default FolderPage;
