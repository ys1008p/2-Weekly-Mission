import React from "react";
import { modal } from "styles/modal";

interface ModalProps {
  onClose: () => void;
}
function Modal({ onClose }: ModalProps) {
  return (
    <modal.BackGround onClick={onClose}>
      <modal.ContentWrapper>
        <modal.ContentItem>이것은 모달이여</modal.ContentItem>
      </modal.ContentWrapper>
    </modal.BackGround>
  );
}

export default Modal;
