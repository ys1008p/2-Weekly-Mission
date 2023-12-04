import React from 'react';
import useGetData from '../hooks/useGetData';
import CardList from './CardList';
import EmptyCardList from './EmptyCardList';
import styles from './FolderCardList.module.css';

export default function FolderCardList({ selectedFolder }) {
  const { id: folderId, name: folderName } = selectedFolder;
  const query = folderId ? `?folderId=${folderId}` : '';

  const [loading, error, linkData] = useGetData(
    `users/1/links${query}`,
    selectedFolder
  );

  const links = linkData?.data;

  if (loading) return <p>loading..</p>;
  if (error) return <EmptyCardList />;

  return (
    <div>
      <div className={styles.nameContainer}>
        <h2 className={styles.name}>{folderName}</h2>
      </div>
      {links.length === 0 ? <EmptyCardList /> : <CardList links={links} />}
    </div>
  );
}
