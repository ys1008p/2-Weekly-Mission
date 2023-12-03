import CardList from '@/components/CardList';
import { useCallback, useEffect, useState } from 'react';
import style from './FolderMain.module.css';
import { getLinks } from './api';

function FolderButton({ children, onClick, className, folder }) {
  const handleClick = () => {
    onClick(folder);
  };

  return (
    <button className={`${style.folderButton} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

const allFolders = {
  id: null,
  name: '전체',
};

function FolderMain({ initFolders, className }) {
  const [currentFolder, setCurrentFolder] = useState(allFolders);
  const [link, setLinks] = useState([]);

  const folders = structuredClone(initFolders);
  folders.unshift(allFolders);

  const styleIfCurrentFolder = useCallback(
    (folderName) => {
      return folderName === currentFolder.name ? style.currentFolder : '';
    },
    [currentFolder],
  );

  const checkHideOptions = useCallback(() => {
    return currentFolder.id ? style.hide : '';
  }, [currentFolder]);

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
          {folders.map((folder) => (
            <FolderButton
              key={folder.id}
              onClick={setCurrentFolder}
              className={styleIfCurrentFolder(folder.name)}
              folder={folder}>
              {folder.name}
            </FolderButton>
          ))}
        </div>
        <button type='button' className={style.addButton}></button>
      </div>
      <div className={style.folderTitle}>
        <h1 className={style.title}>{currentFolder.name}</h1>
        <div className={`${style.options} ${checkHideOptions()}`}>
          <button className={style.option}>
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
      </div>
      <CardList className='main__content shared__card-list' list={link} />
    </div>
  );
}

export default FolderMain;
