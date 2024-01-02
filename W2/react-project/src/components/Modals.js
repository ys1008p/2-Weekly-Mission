import '../styles/Modals.css'





function Modals(){

  return (
    <div className="modal-container">
      <div className="modal-title">폴더 이름</div>
      <input className='modal-content' placeholder='유용한팁'/>
      <button className="modal-button">변경하기</button>
    </div>
  )
}

export default Modals