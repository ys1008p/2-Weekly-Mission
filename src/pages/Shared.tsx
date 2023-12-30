import styles from './Shared.module.css';

import { fetchGetRequest } from '@/utils/api';
import { useCallback, useEffect, useState } from 'react';

import SharedBanner from '@/components/banner/SharedBanner';
import SharedCardContainer from '@/components/card/SharedCardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import useAsync from '@/hooks/useAsync';
import { LINK_STATUS_MESSAGE } from '@/pages/constant';

const Shared = () => {
  const [folderName, setFolderName] = useState('');
  const [owner, setOwner] = useState({ name: '', profileImageSource: '' });
  const [items, setItems] = useState([]);

  const {
    loading,
    error,
    wrappedFunction: fetchFolderData,
  } = useAsync(fetchGetRequest);

  const initFolderData = useCallback(async () => {
    const { folder } = await fetchFolderData('/api/sample/folder');
    const { name, owner, links } = folder;

    setFolderName(name);
    setOwner(owner);
    setItems(links);
  }, [fetchFolderData]);

  useEffect(() => {
    void initFolderData();
  }, [initFolderData]);

  return (
    <>
      <Header sticky={true} />
      <main className={styles.main}>
        <SharedBanner folder={folderName} owner={owner} />
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <SearchBar placeholder="링크를 검색해 보세요." />
            {loading ? (
              <p className={styles.message}>{LINK_STATUS_MESSAGE.loading}</p>
            ) : error ? (
              <p className={styles.message}>{LINK_STATUS_MESSAGE.error}</p>
            ) : !items.length ? (
              <p className={styles.message}>{LINK_STATUS_MESSAGE.empty}</p>
            ) : (
              <SharedCardContainer items={items} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shared;
