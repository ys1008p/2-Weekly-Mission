import React from 'react';
import useGetData from '../hooks/useGetData';

export default function FolderButtons({ onClick }) {
  const [loading, error, user] = useGetData('users/1/folders');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const folderList = user?.data;

  const list = folderList.map(({ id, name }) => (
    <li key={id}>
      <button
        onClick={() => {
          onClick(id, name);
        }}
      >
        {name}
      </button>
    </li>
  ));

  return <ul>{list}</ul>;
}
