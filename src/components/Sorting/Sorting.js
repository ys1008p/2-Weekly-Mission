import './Sorting.css';
import FolderButton from '../shared/FolderButton/FolderButton';

export default function Sorting({ folder }) {
  return (
    <div className="Sorting">
      {folder.map((folderInfo) => (
        <FolderButton key={folderInfo.id} folderInfo={folderInfo} />
      ))}
    </div>
  );
}
