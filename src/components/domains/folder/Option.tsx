import React, { FC } from "react";
import styled from "styled-components";
import shareIcon from "../../../assets/share.png";
import renameIcon from "../../../assets/pen.png";
import deleteIcon from "../../../assets/delete.png";
import useModal from "../../../hooks/useModal";

interface OptionButtonProps {
  onClick?: (folderId?: number) => void;
  icon: string;
  altText: string;
  text: string;
  folderId?: number;
}

const OptionButton: FC<OptionButtonProps> = ({ onClick, icon, altText, text, folderId }) => {
  return (
    <StyledOptionButton onClick={() => onClick && onClick(folderId)}>
      <img src={icon} alt={altText} />
      <StyledOptionText>{text}</StyledOptionText>
    </StyledOptionButton>
  );
};

function Option({ folderName, folderId }: { folderName: string; folderId: number }) {
  const { Modal: ShareModal, openModal: openShareModal } = useModal();
  const { Modal: RenameModal, openModal: openRenameModal } = useModal();
  const { Modal: DeleteModal, openModal: openDeleteModal } = useModal();

  return (
    <StyledOption>
      <OptionButton onClick={openShareModal} icon={shareIcon} altText="share icon" text="공유" />
      {ShareModal && <ShareModal title="폴더 공유" link={folderName} shareSNS folderId={folderId} />}
      <OptionButton onClick={openRenameModal} icon={renameIcon} altText="rename icon" text="이름 변경" />
      {RenameModal && <RenameModal title="폴더 이름 변경" input="폴더 이름" button="변경하기" color="blue" />}
      <OptionButton onClick={openDeleteModal} icon={deleteIcon} altText="delete icon" text="삭제" />
      {DeleteModal && <DeleteModal title="폴더 삭제" link={folderName} button="삭제하기" color="red" />}
    </StyledOption>
  );
}

export default Option;

const StyledOption = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const StyledOptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const StyledOptionText = styled.div`
  display: flex;
  font-size: 1.4rem;
  color: var(--gray-60-color);
  align-items: center;
`;
