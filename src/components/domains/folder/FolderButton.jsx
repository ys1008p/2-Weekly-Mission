import { useState } from "react";
import styled from "styled-components";

function FolderButton({ folderId, folderName, onFolderClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleFolderClick = () => {
    setIsActive(!isActive);
    onFolderClick({ folderId, folderName });
  };

  return <StyledFolderButton onClick={handleFolderClick}>{folderName}</StyledFolderButton>;
}

export default FolderButton;

const StyledFolderButton = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  background: var(--white-color);

  &:hover,
  &:focus {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;
