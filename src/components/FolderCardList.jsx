import React from 'react';
import useGetData from '../hooks/useGetData';
import CardList from './CardList';
import EmptyCardList from './EmptyCardList';
import EditFeatures from './EditFeatures';
import styles from './FolderCardList.module.css';

export default function FolderCardList({ selectedFolder }) {
  const { id: folderId, name: folderName } = selectedFolder;
  const query = folderId ? `?folderId=${folderId}` : '';

  const [loading, error, linkData] = useGetData(`users/1/links${query}`, selectedFolder);

  if (loading) return <p>loading..</p>;
  if (error) return <EmptyCardList />;

  const links = linkData?.data;

  return (
    <div>
      <div className={styles.nameContainer}>
        <h2 className={styles.name}>{folderName}</h2>
        {folderId && <EditFeatures folderId={folderId} folderName={folderName} />}
      </div>
      {links.length === 0 ? <EmptyCardList /> : <CardList links={links} />}
    </div>
  );
}
