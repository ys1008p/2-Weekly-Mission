import { useState } from "react";

interface useHandleModalProps {
  onModal: boolean;
  currentType: string;
  onClose: () => void;
  toggleModal: (type: string) => void;
}

const useHandleModal = (): useHandleModalProps => {
  const [onModal, setOnModal] = useState<boolean>(false);
  const [currentType, setCurrentType] = useState<string>("");

  const toggleModal = (type: string) => {
    setCurrentType(type);
    setOnModal((prev) => !prev);
  };

  const onClose = () => {
    setCurrentType("");
    setOnModal(false);
  };

  return { onModal, currentType, onClose, toggleModal };
};

export default useHandleModal;
