import styles from './ModalContainer.module.css';
import CloseBtn from '@/assets/images/icon/close.svg';
import AddLinkModal from '@/components/modal/AddLinkModal';
import DeleteModal from '@/components/modal/DeleteModal';
import EditModal from '@/components/modal/EditModal';
import ShareModal from '@/components/modal/ShareModal';

export type ModalType = 'edit' | 'addLink' | 'share' | 'delete';

interface ContainerProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
  modalType: ModalType;
  props: Record<string, any>;
}

const renderModal = (modalType: ModalType, props: Record<string, any>) => {
  switch (modalType) {
    case 'edit':
      return <EditModal {...props} />;
    case 'addLink':
      return <AddLinkModal {...props} />;
    case 'share':
      return <ShareModal {...props} />;
    case 'delete':
      return <DeleteModal {...props} />;
    default:
      return <div>잘못된 모달창 타입</div>;
  }
};

const ModalContainer = ({
  setIsModalOpen,
  modalType,
  props,
}: ContainerProps) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button onClick={handleModalClose}>
          <img src={CloseBtn} className={styles.close} />
        </button>
        {renderModal(modalType, props)}
      </div>
    </div>
  );
};

export default ModalContainer;
