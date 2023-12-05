import React from 'react';
import useGetData from '../hooks/useGetData';
import styles from './FolderButtons.module.css';
import { ReactComponent as AddIcon } from '../images/add.svg';

export default function FolderButtons({ folderId, handleFolderClick }) {
  const [loading, error, user] = useGetData('users/1/folders');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folderList = user?.data;

  const list = folderList.map(({ id, name }) => (
    <li key={id}>
      <button
        className={`${styles.button} ${
          folderId === id ? styles.activeButton : ''
        }`}
        onClick={() => {
          handleFolderClick(id, name);
        }}
      >
        {name}
      </button>
    </li>
  ));

  return (
    <div className={styles.container}>
      <ul className={styles.buttonList}>
        <li>
          <button
            className={`${styles.button} ${
              !folderId ? styles.activeButton : ''
            }`}
            onClick={() => {
              handleFolderClick(null, '전체');
            }}
          >
            전체
          </button>
        </li>
        {list}
      </ul>
      <button>
        <AddIcon
          className={styles.addButton}
          src={AddIcon}
          alt='폴더 추가하기 버튼'
          fill='#6d6afe'
        />
      </button>
    </div>
  );
}
