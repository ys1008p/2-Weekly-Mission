import { useEffect, useState } from "react";
import { getFolders } from "../../../services/api";
import styled from "styled-components";
import FolderButton from "./FolderButton";
import FolderCardList from "./FolderCardList";
import Option from "./Option";
import addIcon from "../../../assets/add-icon.svg";

function FolderLists() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    id: null,
    name: null,
  });

  useEffect(() => {
    const fetchFolders = async () => {
      const folder = await getFolders();

      setFolders(folder);
    };

    fetchFolders();
  }, []);

  const handleFolderClick = ({ folderId, folderName }) => {
    setSelectedFolder({ id: folderId, name: folderName });
  };

  const isFolderSelected = selectedFolder.id !== null && selectedFolder.name !== "전체";

  console.log(selectedFolder.name);

  return (
    <StyledFolders>
      <StyledFoldersTop>
        <StyledFolderButtons>
          <FolderButton folderName="전체" onFolderClick={handleFolderClick} isActive={selectedFolder.id === null} />
          {folders.data?.map((folder) => (
            <FolderButton
              key={folder.id}
              folderId={folder.id}
              folderName={folder.name}
              onFolderClick={handleFolderClick}
            />
          ))}
        </StyledFolderButtons>
        <StyledAddIconImg src={addIcon} alt="add icon" />
      </StyledFoldersTop>
      <StyledNameAndOption>
        <StyledFolderName>{selectedFolder.name}</StyledFolderName>
        {isFolderSelected ? <Option folderName={selectedFolder.name} /> : null}
      </StyledNameAndOption>
      <FolderCardList folderId={selectedFolder.id} />
    </StyledFolders>
  );
}

export default FolderLists;

const StyledFolders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledFoldersTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFolderButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

// .folder-button {
//   height: 4rem;
// }

const StyledAddIconImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledFolderName = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
`;

const StyledNameAndOption = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1.2rem;
`;
