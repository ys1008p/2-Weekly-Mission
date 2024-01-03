import { useCallback, useState } from "react";

function useModal() {
  const [modals, setModals] = useState({
    folderAdd: false,
    folderName: false,
    folderDelete: false,
    linkDelete: false,
    folderShare: false,
    linkAdd: false,
  });

  const openModal = useCallback((modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  }, []);

  const closeModal = useCallback((modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  }, []);

  return { modals, openModal, closeModal };
}

export default useModal;
