import CardList from '@/components/CardList';
import ModalWithOneButton from '@/components/modal/ModalWithOneButton';
import { useModal } from '@/contexts/ModalContext';
import { useEffect, useMemo, useState } from 'react';
import style from './FolderMain.module.css';
import { getLinks } from './api';

function FolderTitle({ currentFolder }) {
  const modal = useModal();
  const openModal = modal.openModal;

  return (
    <div className={style.folderTitle}>
      <h1 className={style.title}>{currentFolder.name}</h1>
      {!currentFolder.id && (
        <div className={style.options}>
          <button
            className={style.option}
            onClick={() =>
              openModal(
                <ModalWithOneButton
                  title={'폴더 이름 변경'}
                  buttonText={'변경하기'}
                  onClick={() => openModal(<div>네네 두 번째 모달이어료</div>)}>
                  <input
                    className={style.modalInput}
                    type='text'
                    placeholder='폴더명'
                  />
                </ModalWithOneButton>,
              )
            }>
            <img src='/images/icons/share.svg' alt='공유 버튼 이미지' />
            <span>공유</span>
          </button>
          <button className={style.option}>
            <img src='/images/icons/pen.svg' alt='공유 버튼 이미지' />
            <span>이름 변경</span>
          </button>
          <button className={style.option}>
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
      className={`${style.folderButton} ${isCurrent && style.currentFolder}`}
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
    <div className={`${className} ${style.mainContainer}`}>
      <div className={style.buttons}>
        <div className={style.folderButtons}>
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
        <button type='button' className={style.addButton}></button>
      </div>

      <FolderTitle currentFolder={currentFolder} />
      <CardList className='main__content shared__card-list' list={link} />
    </div>
  );
}

export default FolderMain;
