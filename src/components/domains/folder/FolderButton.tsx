import React, { useState } from "react";
import styled from "styled-components";

interface FolderButtonProps {
  folderName: string;
  folderId?: number;
  onFolderClick: (folder: { folderId: number; folderName: string }) => void;
  isActive?: boolean;
}

function FolderButton({ folderId, folderName, onFolderClick }: FolderButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

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
  height: 4rem;

  &:hover,
  &:focus {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;
