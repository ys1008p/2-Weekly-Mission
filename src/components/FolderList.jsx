import React from 'react';
import useGetData from '../hooks/useGetData';

export default function FolderList() {
  const [loading, error, user] = useGetData('users/1/folders');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folderList = user?.data;

  const list = folderList.map((folder) => (
    <li key={folder.id}>
      <FolderButton name={folder.name} />
    </li>
  ));

  return <ul>{list}</ul>;
}

function FolderButton({ name }) {
  return <button>{name}</button>;
}
