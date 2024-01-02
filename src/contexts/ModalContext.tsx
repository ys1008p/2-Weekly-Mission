import Modal from '@/components/modal/Modal';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

type ModalType = {
  id: string;
  content: ReactNode;
};

interface ModalContextValue {
  openModal: (content: ReactNode) => void;
}

const ModalContext = createContext<ModalContextValue>({
  openModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalType[]>([]);

  const openModal = (content: ReactNode) => {
    const id = crypto.randomUUID();
    const newModal = { id, content };
    setModals((prevModals) => [...prevModals, newModal]);
  };

  const closeModal = useCallback((id: string) => {
    setModals(
      modals.filter((modal) => {
        return modal.id !== id;
      }),
    );
  }, []);

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
