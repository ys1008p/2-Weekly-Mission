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
  name: string;
}

const linkMessage = {
  loading: '로딩중입니다..',
  error: '데이터를 불러올 수 없습니다',
  empty: '저장된 링크가 없습니다',
};

const folderMessage = {
  loading: '...',
  error: '폴더 가져오기 실패',
};

const INITIAL_FOLDER = {
  id: null,
  name: '전체',
};

const Folder = () => {
  const [items, setItems] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] =
    useState<FolderType>(INITIAL_FOLDER);
  const [linkLoading, linkError, fetchLinkData] = useAsync(fetchGetRequest);
  const [folderLoading, folderError, fetchFolderData] =
    useAsync(fetchGetRequest);

  const initFolderData = useCallback(async () => {
    const data = await fetchFolderData('/api/users/1/folders');

    setFolders(data?.data ?? []);
  }, [fetchFolderData]);

  const initLinkData = useCallback(async () => {
    const data = await fetchLinkData(
      `/api/users/1/links${
        selectedFolder.id ? `?folderId=${selectedFolder.id}` : ''
      }`,
    );

    setItems(data?.data ?? []);
  }, [fetchLinkData, selectedFolder]);

  const handleSelectFolder = (folder: FolderType) => {
    setSelectedFolder(folder);
  };

  useEffect(() => {
    void initFolderData();
    void initLinkData();
  }, [initFolderData, initLinkData]);

  return (
    <>
      <Header sticky={false} />
      <main>
        <FolderBanner />
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <SearchBar placeholder="링크를 검색해 보세요." />
            {linkLoading ? (
              <p className={styles.message}>{linkMessage.loading}</p>
            ) : linkError ? (
              <p className={styles.message}>{linkMessage.error}</p>
            ) : !items.length ? (
              <p className={styles.message}>{linkMessage.empty}</p>
            ) : (
              <div>
                <div className={styles.folder}>
                  <ul className={styles['folder-list']}>
                    <li>
                      <FolderButton
                        id={null}
                        name="전체"
                        selected={!selectedFolder.id}
                        onSelected={handleSelectFolder}
                      />
                    </li>
                    {folderLoading ? (
                      <span>{folderMessage.loading}</span>
                    ) : folderError ? (
                      <span>{folderMessage.error}</span>
                    ) : (
                      folders.map(({ id, name }: FolderType) => (
                        <li key={id}>
                          <FolderButton
                            id={id}
                            name={name}
                            selected={selectedFolder.id === id}
                            onSelected={handleSelectFolder}
                          />
                        </li>
                      ))
                    )}
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
                  <span className={styles['folder-title']}>
                    {selectedFolder.name}
                  </span>
                  {selectedFolder.id && (
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
