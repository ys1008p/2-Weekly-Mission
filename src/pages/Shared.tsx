import styles from './Shared.module.css';

import { fetchGetRequest } from '@/utils/api';
import { useCallback, useEffect, useState } from 'react';

import SharedBanner from '@/components/banner/SharedBanner';
import CardContainer from '@/components/card/CardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import useAsync from '@/hooks/useAsync';

const Shared = () => {
  const [folderName, setFolderName] = useState('');
  const [owner, setOwner] = useState({ name: '', profileImageSource: '' });
  const [items, setItems] = useState([]);
  const [loading, error, fetchFolderData] = useAsync(fetchGetRequest);

  const initFolderData = useCallback(async () => {
    const data = await fetchFolderData('/api/sample/folder');
    const { name, owner, links } = data.folder;

    setFolderName(name);
    setOwner(owner);
    setItems(links);
  }, [fetchFolderData]);

  useEffect(() => {
    void initFolderData();
  }, [initFolderData]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SharedBanner folder={folderName} owner={owner} />
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <SearchBar placeholder="링크를 검색해 보세요." />
            {loading && <p>Loading...</p>}
            {error && <p>데이터를 불러올 수 없습니다</p>}
            <CardContainer items={items} isFolder={false} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shared;
