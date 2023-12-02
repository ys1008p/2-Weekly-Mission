import './Sorting.css';
import FolderButton from '../shared/FolderButton/FolderButton';

export default function Sorting({ folder, handleQuery }) {
  const allInfo = {
    id: undefined,
    name: '전체',
  };
  return (
    <div className="Sorting">
      <FolderButton folderInfo={allInfo} handleQuery={handleQuery} />
      {folder.map((folderInfo) => (
        <FolderButton key={folderInfo.id} folderInfo={folderInfo} handleQuery={handleQuery} />
      ))}
    </div>
  );
}
