import style from '../../styles/Modal/DeleteModal.module.css';
import xbutton from '../../assets/x.svg';

const DeleteModal = ({ title, description ,button, onClick} : {title:string, description:string, button:string, onClick:() => void}) => {
  return(
    <div className={style.container} onClick={onClick}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.contentContainer}>
            <p className={style.title}>{title}</p>
            <p className={style.description}>{description}</p>
          </div>
          <button className={style.modalButton}>{button}</button>
        </div>
        <button className={style.xButton} onClick={onClick}><img src={xbutton} alt="x" /></button>
      </div>
    </div>
  )
};

export default DeleteModal;
