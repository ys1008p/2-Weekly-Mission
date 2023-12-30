import styled from "styled-components";
import React from "react";
import { getSelectData } from "../../../services/FolderApi.tsx";

interface LinkInfo {
  id: number;
  create_at: string;
  updated_at: string;
  image_source: string;
  title: string;
  url: string;
}

interface FolderInfo {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: LinkInfo[];
}
interface FolderButtonListProps {
  folderList: FolderInfo[];
  setSelectFolderLinks: React.Dispatch<React.SetStateAction<[]>>;
}

function Button({
  folder,
  setSelectFolderLinks,
}: {
  folder: FolderInfo;
  setSelectFolderLinks: React.Dispatch<React.SetStateAction<[]>>;
}) {
  const handleChangeID = async () => {
    const { data } = await getSelectData(folder.id);
    setSelectFolderLinks(data);
  };

  return (
    <StyledButton
      onClick={() => {
        handleChangeID();
      }}
    >
      {folder && folder.name}
    </StyledButton>
  );
}

function FolderButtonList({
  folderList,
  setSelectFolderLinks,
}: FolderButtonListProps) {
  return (
    <div>
      <StyledButtonBox>
        <StyledButtons>
          {folderList?.map((folder) => (
            <Button
              folder={folder}
              key={folder.id}
              setSelectFolderLinks={setSelectFolderLinks}
            />
          ))}
        </StyledButtons>
        <StyledAddLink>+</StyledAddLink>
      </StyledButtonBox>
    </div>
  );
}

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff;
  }

  /* Mobile*/
  @media (max-width: 390px) {
    padding: 0.6rem 1.2rem;
  }
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const StyledAddLink = styled.div`
  color: var(--primary-color);
  border: none;
  font-size: 3rem;
  padding-left: 3rem;

  @media (max-width: 390px) {
    display: none;
  }
`;

export default FolderButtonList;
