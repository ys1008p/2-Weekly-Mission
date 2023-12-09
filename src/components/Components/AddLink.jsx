import { useState, useEffect } from "react";
import { getLinks, getFolders } from "../../services/api";
import addLink from "../../assets/add-link.png";
import checkIcon from "../../assets/check.svg";
import useModal from "../../hooks/useModal";
import {
  AddLinkBar,
  AddLinkButton,
  AddLinkContainer,
  AddLinkImg,
  AddLinkInput,
  FolderLinkList,
  LinkButton,
} from "./AddLinkStyled";

function FolderLinkButton({ folderId, folderName, onClick }) {
  const [isActive, setIsActive] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const apiEndpoint = folderId ? `${folderId}` : ``;

      const link = await getLinks(apiEndpoint);
      setLinks(link);
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
}

function FolderLinks() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const folder = await getFolders();

      setFolders(folder);
    };

    fetchFolders();
  }, []);

  return (
    <FolderLinkList>
      {folders.data?.map((folder) => (
        <FolderLinkButton
          key={folder.id}
          folderId={folder.id}
          folderName={folder.name}
        />
      ))}
    </FolderLinkList>
  );
}

function AddLink() {
  const { Modal, openModal } = useModal();
  const [linkInput, setLinkInput] = useState("");

  const handleInputChange = (e) => {
    setLinkInput(e.target.value);
  };

  return (
    <AddLinkBar>
      <AddLinkContainer>
        <AddLinkInput
          placeholder="링크를 추가해 보세요"
          value={linkInput}
          onChange={handleInputChange}
        />
        <AddLinkImg src={addLink} alt="링크 아이콘" />
        <AddLinkButton onClick={openModal}>추가하기</AddLinkButton>
        <Modal
          title="폴더에 추가"
          link={linkInput}
          list={<FolderLinks />}
          button="추가하기"
          color="blue"
        />
      </AddLinkContainer>
    </AddLinkBar>
  );
}

export default AddLink;
