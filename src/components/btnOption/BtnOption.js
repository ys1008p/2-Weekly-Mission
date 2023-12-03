import './BtnOption.css';

function BtnOption({ 
  btnOption,
  menuActive }){
  return ( 
    <div className={`btn-option ${btnOption === true && menuActive !== "all" ? "active" : ""}`}>
      <button type="button" className="btn-shared">공유</button>
      <button type="button" className="btn-change-name">이름 변경</button>
      <button type="button" className="btn-delete">삭제</button>
    </div>
  )
}

export default BtnOption;