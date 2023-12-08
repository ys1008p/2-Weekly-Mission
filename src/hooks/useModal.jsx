import { useState } from "react";
import {
  ModalBackground,
  ModalBox,
  ModalButton,
  ModalContainer,
  ModalExit,
  ModalLink,
  ModalList,
  ModalShareSNS,
  ModalTitle,
  ModalTop,
} from "./useModalStyled";
import exitIcon from "../assets/exit-icon.png";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    Modal: modalOpen
      ? ({ title, link, list, button, color, shareSNS }) => (
          <ModalBackground>
            <ModalBox>
              <ModalContainer>
                <ModalTop>
                  <ModalExit onClick={closeModal}>
                    <img src={exitIcon} alt="exit icon" />
                  </ModalExit>
                  <ModalTitle>{title}</ModalTitle>
                  <ModalLink>{link}</ModalLink>
                </ModalTop>
                {list && <ModalList>{list}</ModalList>}
                {(
                  <ModalButton onClick={closeModal} color={color}>
                    {button}
                  </ModalButton>
                ) || <ModalShareSNS>{shareSNS}</ModalShareSNS>}
              </ModalContainer>
            </ModalBox>
          </ModalBackground>
        )
      : () => null,
    openModal,
    closeModal,
  };
};

export default useModal;
