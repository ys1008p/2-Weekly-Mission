import styles from './Folder.module.css';

import { useCallback, useEffect, useState } from 'react';

import FolderBanner from '@/components/banner/FolderBanner';
import FolderButton from '@/components/button/FolderButton';
import FolderCardContainer from '@/components/card/FolderCardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import useAsync from '@/hooks/useAsync';
import { fetchGetRequest } from '@/utils/api';

import AddIconWhite from '@/assets/images/icon/add-white.svg';
import AddIcon from '@/assets/images/icon/add.svg';
import DeleteIcon from '@/assets/images/icon/delete.svg';
import PenIcon from '@/assets/images/icon/pen.svg';
import ShareIcon from '@/assets/images/icon/share.svg';
import GrayIconButton from '@/components/button/GrayIconButton';

interface FolderType {
  id: null | number;
  name: null | string;
}

const message = {
  loading: '로딩중입니다..',
  error: '데이터를 불러올 수 없습니다',
  empty: '저장된 링크가 없습니다',
};

const Folder = () => {
  const [items, setItems] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState<FolderType>({
    id: null,
    name: null,
  });
  const [loading, error, fetchLinkData] = useAsync(fetchGetRequest);

  const initLinkData = useCallback(async () => {
    const data = await fetchLinkData(
      `/api/users/1/links${
        selectedFolder.id ? `?folderId=${selectedFolder.id}` : ''
      }`,
    );

    setItems(data.data);
  }, [fetchLinkData, selectedFolder]);

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
              <div>
                <div className={styles.folder}>
                  <ul className={styles['folder-list']}>
                    <li>
                      <FolderButton name="전체" />
                    </li>
                    <li>
                      <FolderButton name="폴더1" selected />
                    </li>
                  </ul>
                  <button className={styles['btn-add']} type="button">
                    <img src={AddIcon} alt="add" />
                  </button>
                </div>
                <button type="button" className={styles.floating}>
                  <img
                    className={styles['floating-icon']}
                    src={AddIconWhite}
                    alt="add"
                  />
                </button>
                <div className={styles.title}>
                  <span className={styles['folder-title']}>폴더명</span>
                  {selectedFolder.name && (
                    <div className={styles['title-btns']}>
                      <GrayIconButton icon={ShareIcon} text="공유" />
                      <GrayIconButton icon={PenIcon} text="이름 변경" />
                      <GrayIconButton icon={DeleteIcon} text="삭제" />
                    </div>
                  )}
                </div>
                <FolderCardContainer items={items} />
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
