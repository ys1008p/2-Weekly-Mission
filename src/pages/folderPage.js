import Header from '../components/Header';
import Footer from '../components/commons/Footer';
import FolderAddLinkInput from '../components/domains/folder/FolderAddLinkInput';
import CardList from '../components/CardList';
import SearchInput from '../components/SearchInput';
import styles from '../styles/FolderPage.module.css';
import FolderButtonList from '../components/domains/folder/FolderButtonList';
import FolderTitle from '../components//domains/folder/FolderTitle';
import FloatingButton from '../components/domains/folder/FloatingButton'
import { getFolderUserData, getSelectData, getAllLinksData, getFoldersData } from '../services/FolderApi';
import { useEffect, useState } from 'react';

// modal창 기능구현 시 각 기능에 필요한 인자 분류
// 폴더 추가, 삭제 => 전체 폴더 보내기
// 폴더 공유 => 선택된 폴더 하나 보내기 
// 폴더에서 삭제, 폴더에 추가 => 선택된 링크 보내기 


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
      name: '전체',
      link: [],
    };
    const allData = await getAllLinksData();
    const { data } = await getFoldersData();
    addFolder.link = allData.data;
    setFolders([addFolder, ...data]);
    if (id === 0) {
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
    if (id !== 0) {
      selectFolderLoad();
    }

  }, [id]);

  return (
    <>
 
        {/* <DeleteModal/> */}
      
      <Header user={user} />
      <FolderAddLinkInput   />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <FolderButtonList folders={folders} setId={setId} />
          <FolderTitle  folders={folders} id={id} />
          {links.length === 0 ? (
            <div className={styles.linksNull}>
              <div>저장된 링크가 없습니다.</div>
            </div>
          ) : (
            <CardList links={links} />
          )}
        </div>
      </section>
      <Footer />
      <FloatingButton />
   </>
  );
}

export default FolderPage;
