import styles from './Folder.module.css';

import { useCallback, useEffect, useState } from 'react';

import FolderBanner from '@/components/banner/FolderBanner';
import FolderCardContainer from '@/components/card/FolderCardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import useAsync from '@/hooks/useAsync';
import { fetchGetRequest } from '@/utils/api';

const Folder = () => {
  const [items, setItems] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState<
    number | undefined
  >();
  const [loading, error, fetchLinkData] = useAsync(fetchGetRequest);

  const initLinkData = useCallback(async () => {
    const data = await fetchLinkData(
      `/api/users/1/links${
        selectedFolderId ? `?folderId=${selectedFolderId}` : ''
      }`,
    );

    setItems(data.data);
  }, [fetchLinkData, selectedFolderId]);

  useEffect(() => {
    void initLinkData();
  }, [initLinkData]);

  return (
    <>
      <Header sticky={false} />
      <main>
        <FolderBanner />
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <SearchBar placeholder="링크를 검색해 보세요." />
            <FolderCardContainer items={items} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
