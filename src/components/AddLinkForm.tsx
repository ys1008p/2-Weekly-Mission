import style from '../styles/AddLinkForm.module.css';

const AddLinkForm = () => {
  return(
    <form className={`${style.form}`}>
      <div className={`${style.container}`}>
        <input className={`${style.input}`} placeholder='링크를 추가해보세요'/>
        <button className={`${style.btn}`}>추가하기</button>
      </div>
    </form>
  )
};

export default AddLinkForm;
