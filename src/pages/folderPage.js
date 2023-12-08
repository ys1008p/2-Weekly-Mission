import Header from '../components/Header';
import Footer from '../components/commons/Footer';
import FolderAddLinkInput from '../components/domains/folder/FolderAddLinkInput';
import CardList from '../components/CardList';
import SearchInput from '../components/SearchInput';
import styles from '../styles/FolderPage.module.css';
import FolderButtonList from '../components/domains/folder/FolderButtonList';
import FolderTitle from '../components//domains/folder/FolderTitle';
import FloatingButton from '../components/domains/folder/FloatingButton';
import Modal from"../components/domains/folder/modals/Modal"
import { getFolderUserData, getSelectData, getAllLinksData, getFoldersData } from '../services/FolderApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const FolderPageLayout = styled.div`
  position: relative;
`

function FolderPage() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [user, setUser] = useState();
  const [id, setId] = useState(0);
  const [selectPopOver, setSelectPopOver] = useState();

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
    console.log(selectPopOver);
  }, [id, selectPopOver]);

  return (
    <FolderPageLayout>
      <Header user={user} />
      <FolderAddLinkInput />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <FolderButtonList folders={folders} setId={setId} />
          <FolderTitle setSelectPopOver={setSelectPopOver} folders={folders} id={id} />
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
      {
        selectPopOver?
        <Modal selectPopOver={selectPopOver} setSelectPopOver={setSelectPopOver}/>
        : null
      }
   </FolderPageLayout>
  );
}

export default FolderPage;
