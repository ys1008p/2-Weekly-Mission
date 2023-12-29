import './Filtering.css';
import FolderButton from '../../shared/FolderButton';
import addFolderIcon from './add.png';
import { useMediaQuery } from 'react-responsive';

export default function Sorting({ chosenFolderId, folder }) {
  const isNotMobile = useMediaQuery({
    query: '(min-width :768px)',
  });

  const allInfo = {
    id: undefined,
    name: '전체',
  };
  const needAllLink = chosenFolderId === allInfo.id;

  return (
    <div className="folderNav">
      <div className="Sorting">
        <FolderButton isFolderChosen={needAllLink} chosenFolderId={chosenFolderId} folderInfo={allInfo} />
        {folder.map((folderInfo) => {
          const isFolderChosen = +chosenFolderId === folderInfo.id; // 선택된 폴더인지 확인
          return <FolderButton isFolderChosen={isFolderChosen} key={folderInfo.id} folderInfo={folderInfo} />;
        })}
      </div>
      {isNotMobile && (
        <div className="addFolderButton">
          <div className="folderAddText">폴더 추가</div>
          <img className="addFolderIcon" src={addFolderIcon}></img>
        </div>
      )}
    </div>
  );
}
