import React from 'react';
import useGetData from '../hooks/useGetData';
import styles from './FolderButtons.module.css';

export default function FolderButtons({ folderId, onClick }) {
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
          onClick(id, name);
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
              onClick(null, '전체');
            }}
          >
            전체
          </button>
        </li>
        {list}
      </ul>
    </div>
  );
}
