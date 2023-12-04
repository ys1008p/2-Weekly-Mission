import styles from './Folder.module.css';

import { useCallback, useEffect, useState } from 'react';

import FolderBanner from '@/components/banner/FolderBanner';
import FolderCardContainer from '@/components/card/FolderCardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import useAsync from '@/hooks/useAsync';
import { fetchGetRequest } from '@/utils/api';

const message = {
  loading: '로딩중입니다..',
  error: '데이터를 불러올 수 없습니다',
  empty: '저장된 링크가 없습니다',
};

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

    // setItems(data.data);
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
            {loading ? (
              <p className={styles.message}>{message.loading}</p>
            ) : error ? (
              <p className={styles.message}>{message.error}</p>
            ) : !items.length ? (
              <p className={styles.message}>{message.empty}</p>
            ) : (
              <FolderCardContainer items={items} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
