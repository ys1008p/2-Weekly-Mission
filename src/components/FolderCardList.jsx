import React from 'react';
import useGetData from '../hooks/useGetData';
import CardList from './CardList';

export default function FolderCardList({ selectedFolder }) {
  const { folderId, folderName } = selectedFolder;
  const query = folderId ? `?folderId=${folderId}` : '';
  const [loading, error, linkData] = useGetData(`users/1/links${query}`);

  if (loading) return <div>잠시만 기다려 주세요.</div>;
  if (error) return <p>저장된 링크를 찾을 수 없습니다.</p>;

  const links = linkData?.data;
  console.log(links);

  return (
    <div>
      <h2>{folderName}</h2>
      {links.length === 0 ? <p>없음</p> : <CardList links={links} />}
    </div>
  );
}
