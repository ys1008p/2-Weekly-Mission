import clsx from 'clsx';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import CardList from '@/components/CardList';
import CommonModal from '@/components/modal/CommonModal';
import SearchBar from '@/components/SearchBar';

import { useModal } from '@/contexts/ModalContext';

import { Folder, Link } from '@/types/folder';
import { getLinks } from './api';
import styles from './FolderMain.module.css';

function FolderTitle({ currentFolder }: { currentFolder: Folder }) {
  const modal = useModal();
  const openModal = modal.openModal;

  const currentUrl = window.location.href;
  const sharedLink = encodeURIComponent(
    `${currentUrl}/shared?user=${currentFolder.user_id}&folder=${currentFolder.id}`,
  );

  const handleClickCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  const handleClickShareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  return (
    <div className={styles.folderTitle}>
      <h1 className={styles.title}>{currentFolder.name}</h1>
      {currentFolder.id && (
        <div className={styles.options}>
          <button
            className={styles.option}
            onClick={() =>
              openModal(
                <CommonModal
                  title={'폴더 공유'}
                  subTitle={currentFolder.name}
                  content={
                    <div className={styles.modalShareButtonsContainer}>
                      <div className={styles.modalShareButtonContainer}>
                        <button
                          className={clsx(
                            styles.modalShareButton,
                            styles.modalShareKakao,
                          )}></button>
                        <span>카카오톡</span>
                      </div>
                      <div className={styles.modalShareButtonContainer}>
                        <button
                          className={clsx(
                            styles.modalShareButton,
                            styles.modalShareFacebook,
                          )}
                          onClick={handleClickShareToFacebook}></button>
                        <span>페이스북</span>
                      </div>
                      <div className={styles.modalShareButtonContainer}>
                        <button
                          className={clsx(
                            styles.modalShareButton,
                            styles.modalShareLink,
                          )}
                          onClick={handleClickCopyUrl}></button>
                        <span>링크 복사</span>
                      </div>
                    </div>
                  }
                />,
              )
            }>
            <img src='/images/icons/share.svg' alt='공유 버튼 이미지' />
            <span>공유</span>
          </button>
          <button
            className={styles.option}
            onClick={() =>
              openModal(
                <CommonModal
                  title={'폴더 이름 변경'}
                  buttonText={'변경하기'}
                  onClick={() => openModal(<div>두 번째 모달 커몬</div>)}
                  content={
                    <input
                      className={styles.modalInput}
                      type='text'
                      placeholder='폴더명'
                    />
                  }
                />,
              )
            }>
            <img src='/images/icons/pen.svg' alt='공유 버튼 이미지' />
            <span>이름 변경</span>
          </button>
          <button
            className={styles.option}
            onClick={() =>
              openModal(
                <CommonModal
                  title={'폴더 삭제'}
                  onClick={() => openModal(<div>두 번째 모달 커몬</div>)}
                  subTitle={'폴더명'}
                  buttonText={'삭제하기'}
                  buttonStyle={styles.modalDeleteButton}
                />,
              )
            }>
            <img src='/images/icons/delete.svg' alt='공유 버튼 이미지' />
            <span>삭제</span>
          </button>
        </div>
      )}
    </div>
  );
}

function FolderButton({ children, onClick, isCurrent, folder }) {
  const handleClick = () => {
    onClick(folder);
  };

  return (
    <button
      className={`${styles.folderButton} ${isCurrent && styles.currentFolder}`}
      onClick={handleClick}>
      {children}
    </button>
  );
}

const displayAll = {
  id: null,
  name: '전체',
  created_at: '',
  user_id: 0,
  favorite: false,
  link: {
    count: 0,
  },
};

function FolderMain({ folders, className }) {
  const [currentFolder, setCurrentFolder] = useState<Folder>(displayAll);
  const [links, setLinks] = useState<Link[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredLinks = useMemo(() => {
    return links.filter(
      (link) =>
        link.url.includes(searchKeyword) ||
        (link.title && link.title.includes(searchKeyword)) ||
        (link.description && link.description.includes(searchKeyword)),
    );
  }, [links, searchKeyword]);

  const modal = useModal();
  const openModal = modal.openModal;

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  const handleClickRemoveSearchKeyword = () => {
    setSearchKeyword('');
  };

  const foldersToDisplay = useMemo(() => {
    return [displayAll, ...folders];
  }, [folders]);

  useEffect(() => {
    async function fetchLinks() {
      const linksResponse = await getLinks(currentFolder.id);
      setLinks(linksResponse.data);
    }
    fetchLinks();
  }, [currentFolder]);

  return (
    <>
      <SearchBar
        placeholder='링크를 검색해 보세요.'
        className='main__content'
        keywordValue={searchKeyword}
        onChangeKeyword={handleChangeSearchKeyword}
        onClickRemove={handleClickRemoveSearchKeyword}
      />
      <div className={`${className} ${styles.mainContainer}`}>
        <div className={styles.buttons}>
          <div className={styles.folderButtons}>
            {foldersToDisplay.map((folder) => (
              <FolderButton
                key={folder.id}
                onClick={setCurrentFolder}
                isCurrent={folder.id === currentFolder.id}
                folder={folder}>
                {folder.name}
              </FolderButton>
            ))}
          </div>
          <button
            type='button'
            className={styles.addButton}
            onClick={() =>
              openModal(
                <CommonModal
                  title={'폴더 추가'}
                  buttonText={'추가하기'}
                  onClick={() => openModal(<div>두 번째 모달 커몬</div>)}
                  content={
                    <input
                      className={styles.modalInput}
                      type='text'
                      placeholder='내용 입력'
                    />
                  }
                />,
              )
            }></button>
        </div>

        <FolderTitle currentFolder={currentFolder} />
        <CardList
          className='main__content shared__card-list'
          list={filteredLinks}
          folders={folders}
        />
      </div>
    </>
  );
}

export default FolderMain;
