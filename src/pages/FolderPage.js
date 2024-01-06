
import FolderHeader from "../component/folder/FolderHeader";

import FolderMain from "../component/folder/FolderMain";
import { useState } from "react";
import ContainerModal from "../component/utilModal/ContainerModal";
function FolderPage({ folderInfo, userFolderList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModalOption, setSelectedModalOption] = useState("");
  const [folderId, setFolderId] = useState();
  const [inputLinkValue, setInputLinkValue] = useState("");

  const handleModalOpen = (boolean, modalOption, inputLinkValue = "") => {
    setModalOpen(boolean);
    setSelectedModalOption(modalOption);
    setInputLinkValue(inputLinkValue);
  };
  const handleFolderId = (value) => {
    setFolderId(value);
  };
  console.log(folderInfo, "folderinfo");
  console.log(userFolderList, "userFolderList");
  return (
    <>
      <FolderHeader handleModalOpen={handleModalOpen} />
      <FolderMain
        folderInfo={folderInfo}
        userFolderList={userFolderList}
        handleModalOpen={handleModalOpen}
        handleFolderId={handleFolderId}
      />
      {modalOpen && (
        <div>
          <ContainerModal
            handleModalOpen={handleModalOpen}
            selectedModalOption={selectedModalOption}
            folderId={folderId}
            inputLinkValue={inputLinkValue}
            setInputLinkValue={setInputLinkValue}
          />
        </div>
      )}
    </>
  );
}
export default FolderPage;
