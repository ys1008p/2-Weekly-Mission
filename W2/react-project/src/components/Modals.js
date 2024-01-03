import '../styles/Modals.css'

/* 여섯가지의 모달을 Modals 한개의 프롭으로 재활용하고싶은데 제겐 너무 어려운 시도인 것 같지만, 그래도 해보고싶은데.. 잘 안됩니다ㅠ.. */

function Modals({folderName, title, buttonName}){

  return (
    <div className="modal-container">
      <div className="modal-title">{folderName}</div>
      <input className='modal-content' placeholder={title}/>
      <button className="modal-button">{buttonName}</button>
    </div>
  )
}

export default Modals