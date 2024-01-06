import { useModal } from '../hooks/modalHooks';
import style from '../styles/SelectMenu.module.css';
import AddModal from './Modal/AddModal';
import DeleteLinkModal from './Modal/DeleteLinkModal';

const SelectMenu = () => {
  const {isOpen:deleteModalOpen, toggleModal:deleteToggleModal} = useModal();
  const {isOpen:AddModalOpen, toggleModal:AddToggleModal} = useModal();

  return(
    <div className={`${style['select-menu--container']}`}>
      <button className={`${style['menu']} ${style['delete-menu']}`} 
        onClick={(e) => {
          e.preventDefault();
          deleteToggleModal()}}>
        삭제하기
      </button>
      <button className={`${style['menu']} ${style['add-menu']}`} 
        onClick={(e) => {
          e.preventDefault();
          AddToggleModal()}}>
        폴더에 추가
      </button>
      <DeleteLinkModal isOpen={deleteModalOpen} onClick={deleteToggleModal}/>
      <AddModal isOpen={AddModalOpen} onClick={AddToggleModal} />
    </div>
  )
};

export default SelectMenu;
