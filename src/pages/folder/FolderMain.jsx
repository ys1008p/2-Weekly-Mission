import CardList from '@/components/CardList';
import CommonModal from '@/components/modal/CommonModal';
import { useModal } from '@/contexts/ModalContext';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import styles from './FolderMain.module.css';
import { getLinks } from './api';

function FolderTitle({ currentFolder }) {
  const modal = useModal();
  const openModal = modal.openModal;

  const handleClickCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
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
                          )}></button>
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
};

function FolderMain({ folders, className }) {
  const [currentFolder, setCurrentFolder] = useState(displayAll);
  const [link, setLinks] = useState([]);

  const modal = useModal();
  const openModal = modal.openModal;

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
        list={link}
        folders={folders}
      />
    </div>
  );
}

export default FolderMain;
