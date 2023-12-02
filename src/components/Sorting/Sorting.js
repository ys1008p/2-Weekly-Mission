import './Sorting.css';
import FolderButton from '../shared/FolderButton/FolderButton';

export default function Sorting({ chosenFolderId, folder, handleQuery }) {
  const allInfo = {
    id: undefined,
    name: '전체',
  };
  return (
    <div className="Sorting">
      <FolderButton chosenFolderId={chosenFolderId} folderInfo={allInfo} handleQuery={handleQuery} />
      {folder.map((folderInfo) => {
        const isFolderChosen = +chosenFolderId === folderInfo.id ? true : false; // 선택된 폴더인지 확인
        return (
          <FolderButton
            isFolderChosen={isFolderChosen}
            key={folderInfo.id}
            folderInfo={folderInfo}
            handleQuery={handleQuery}
          />
        );
      })}
    </div>
  );
}
