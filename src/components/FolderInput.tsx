import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Portal from "./Modal/Portal";
import useHandleModal from "hooks/useHandleModal";
import { CtaShort } from "styles/cta";
import { ReactComponent as LinkIcon } from "assets/icons/link.svg";

function FolderInput() {
  const { onModal, currentType, onClose, toggleModal } = useHandleModal();
  return (
    <Wrapper>
      <SearchIcon as={LinkIcon} />
      <Input placeholder="링크를 추가해 보세요." />
      <Button onClick={() => toggleModal("add")}>추가하기</Button>
      <Portal>{onModal && <Modal currentType={currentType} onClose={onClose} />}</Portal>
    </Wrapper>
  );
}

export default FolderInput;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 80rem;
  padding: 16px;
`;

const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 2.5rem;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: 100%;
  max-width: 80rem;
  padding: 16px;
  padding-left: 4rem;
  border-radius: 15px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.white};
  &:focus {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

const Button = styled(CtaShort)`
  position: absolute;
  top: 50%;
  right: 2.5rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 8rem;
  height: 3.4rem;
  font-size: 1.4rem;
  font-weight: 600;
`;
