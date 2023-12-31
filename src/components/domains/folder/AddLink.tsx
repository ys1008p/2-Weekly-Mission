import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { getLinks, getFolders } from "../../../services/api";
import addLink from "../../../assets/add-link.png";
import checkIcon from "../../../assets/check.svg";
import useModal, { ModalProps } from "../../../hooks/useModal";
import React from "react";

interface FolderLinkButtonProps {
  folderId?: number;
  folderName?: string;
  onClick?: () => void;
}

const FolderLinkButton: FC<FolderLinkButtonProps> = ({ folderId, folderName, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [links, setLinks] = useState<{ data: any[] }>({ data: [] });

  useEffect(() => {
    const fetchLinks = async () => {
      const apiEndpoint: any = folderId ? `${folderId}` : ``;

      const link = await getLinks(apiEndpoint);
      setLinks({ data: link });
    };

    fetchLinks();
  }, [folderId]);

  const handleFolderClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <LinkButton onClick={handleFolderClick}>
      <div>{folderName}</div>
      <span>{`${links.data ? links.data.length : 0}개 링크`}</span>
      {isActive && <img src={checkIcon} alt="check icon" />}
    </LinkButton>
  );
};

function FolderLinks() {
  const [folders, setFolders] = useState<{ data: any[] }>({ data: [] });

  useEffect(() => {
    const fetchFolders = async () => {
      const folder = await getFolders();

      setFolders({ data: folder });
    };

    fetchFolders();
  }, []);

  return (
    <FolderLinkList>
      {folders.data?.map((folder) => (
        <FolderLinkButton key={folder.id} folderId={folder.id} folderName={folder.name} />
      ))}
    </FolderLinkList>
  );
}

function AddLink() {
  const { Modal, openModal } = useModal();
  const [linkInput, setLinkInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
  };

  return (
    <AddLinkBar>
      <AddLinkContainer>
        <AddLinkInput placeholder="링크를 추가해 보세요" value={linkInput} onChange={handleInputChange} />
        <AddLinkImg src={addLink} alt="링크 아이콘" />
        <AddLinkButton onClick={openModal}>추가하기</AddLinkButton>
        {(Modal as FC<ModalProps>)({
          title: "폴더에 추가",
          link: linkInput,
          list: <FolderLinks />,
          button: "추가하기",
          color: "blue",
        })}
      </AddLinkContainer>
    </AddLinkBar>
  );
}

export default AddLink;

const AddLinkBar = styled.div`
  background-color: var(--gray-bg-color);
  padding-top: 6rem;
  padding-bottom: 9rem;

  @media (max-width: 1200px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;
const AddLinkContainer = styled.div`
  position: relative;
  max-width: 80rem;
  margin: auto;
`;

const AddLinkInput = styled.input`
  width: 100%;
  padding-left: 5rem;
  height: 6.9rem;
  border-radius: 1.5rem;
  border: 1px solid var(--primary-color);
  color: var(--gray-60-color);
  font-size: 1.6rem;
`;

export const AddLinkButton = styled.button`
  background-image: var(--gradient-purpleblue-skyblue);
  color: var(--white-color);
  border-radius: 0.8rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 8.1rem;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
`;

export const AddLinkImg = styled.img`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: start;
  border-radius: 0.8rem;
  padding: 0.8rem;
  width: 26.4rem;
  height: 4rem;

  &:hover,
  &:focus {
    background-color: var(--gray-bg-color);
  }

  div {
    font-size: 1.4rem;
  }

  span {
    flex: 1;
    color: var(--gray-60-color);
    font-size: 1.4rem;
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
const FolderLinkList = styled.div`
  display: flex;
  flex-direction: column;
`;
