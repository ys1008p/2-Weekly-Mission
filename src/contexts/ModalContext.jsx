import Modal from '@/components/modal/Modal';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modals, setModals] = useState([]);

  const openModal = (content) => {
    const id = crypto.randomUUID();
    const newModal = { id, content };
    setModals((prevModals) => [...prevModals, newModal]);
  };

  const closeModal = (id) => {
    setModals(
      modals.filter((modal) => {
        return modal.id !== id;
      }),
    );
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {modals.map((modal) => (
        <Modal key={modal.id} id={modal.id} onRemove={closeModal}>
          {modal.content}
        </Modal>
      ))}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('반드시 ModalProvider 안에서 사용해야 합니다.');
  }

  return context;
}
