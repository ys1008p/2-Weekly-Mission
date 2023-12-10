import FolderHeader from "../component/FolderHeader";
import InfoLoader from "../component/InfoLoader";
import FolderMain from "../component/FolderMain";
function FolderPage() {
  const { folderInfo, userFolderList } = InfoLoader();

  return (
    <>
      <FolderHeader />
      <FolderMain folderInfo={folderInfo} userFolderList={userFolderList} />
    </>
  );
}
export default FolderPage;
