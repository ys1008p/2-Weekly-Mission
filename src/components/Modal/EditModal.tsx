import style from '../../styles/Modal/EditModal.module.css';
import xbutton from '../../assets/x.svg';

const EditModal = ({title, button, onClick} : {title:string, button:string, onClick:() => void}) => {
  return(
    <div className={style.container} onClick={onClick}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <p className={style.title}>{title}</p>
          <form className={style.modalForm} onSubmit={onClick} method='post'>
            <input type="text" className={style.modalInput} placeholder='내용 입력'/>
            <button className={style.modalButton} type='submit'>{button}</button>
          </form>
        </div>
        <button className={style.xButton} onClick={onClick}><img src={xbutton} alt="x" /></button>
      </div>
    </div>
  )
};

export default EditModal;
