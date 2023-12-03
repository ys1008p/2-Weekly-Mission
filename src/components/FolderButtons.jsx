import React from 'react';
import useGetData from '../hooks/useGetData';
import './FolderButtons.css';

export default function FolderButtons({ folderId, onClick }) {
  const [loading, error, user] = useGetData('users/1/folders');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folderList = user?.data;

  const list = folderList.map(({ id, name }) => (
    <li key={id}>
      <button
        className={
          folderId === id ? 'folder-button active-button' : 'folder-button'
        }
        onClick={() => {
          onClick(id, name);
        }}
      >
        {name}
      </button>
    </li>
  ));

  return (
    <ul className='folder-buttons'>
      <li>
        <button
          className={
            !folderId ? 'folder-button active-button' : 'folder-button'
          }
          onClick={() => {
            onClick(null, '전체');
          }}
        >
          전체
        </button>
      </li>
      {list}
    </ul>
  );
}
