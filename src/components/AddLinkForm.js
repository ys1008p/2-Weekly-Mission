import '../styles/AddLinkForm.css';

const AddLinkForm = () => {
  return(
    <form className="add-link--form">
      <div className='add-link--container'>
        <input className="add-link--input" placeholder='링크를 추가해보세요'/>
        <button className='btn add-link--btn'>추가하기</button>
      </div>
    </form>
  )
};

export default AddLinkForm;
