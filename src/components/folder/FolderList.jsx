import PropTypes from 'prop-types';

export const FolderList = ({ folderList }) => {
  return (
    <ul className='add-folder-list'>
      {folderList.map((item) => (
        <li key={item.id} className='add-folder-list-item'>
          <p>{item.name}</p>
          <span>{item.link.count}개 링크</span>
        </li>
      ))}
    </ul>
  );
};

FolderList.propTypes = {
  folderList: PropTypes.array,
};
