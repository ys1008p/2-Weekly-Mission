import { createPortal } from 'react-dom';
import style from '../../styles/Modal/AddModal.module.css';
import { useFolderPageFolder } from '../../hooks/folderPageHooks';
import xbutton from '../../assets/x.svg';

const AddModal = ({isOpen, onClick}) => {
  return(
    isOpen ? createPortal(<AddLinkModal onClick={onClick} description='test' />, document.body) : null
  )
};

const AddLinkModal = ({onClick, description}) => {
  const folders = useFolderPageFolder();

  return(
    <div className={style.container} onClick={onClick}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.contentContainer}>
            <p className={style.title}>폴더에 추가</p>
            <p className={style.description}>{description}</p>
          </div>
          <div className={style.addContainer}>
            {folders.map((folder) => <LinkButton name={folder.name} count={folder.links?.length || 0} />)}
          </div>
          <button className={style.modalButton}>추가하기</button>
        </div>
        <button className={style.xButton} onClick={onClick}><img src={xbutton} alt="x" /></button>
      </div>
    </div>
  )
};

const LinkButton = ({name, count} : {name:string, count:number}) => {
  return(
    <li className={style.linkButton}>
      <p className={style.name}>{name}</p>
      <p className={style.count}>{count}개 링크</p>
    </li>
  )
};

export default AddModal;
