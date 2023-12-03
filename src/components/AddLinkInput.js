import '../page/folder/Header.css';

function AddLinkInput(){
  return (
    <div className="add-link-wrap">
      <div className="add-link">
        <input type="text" placeholder="링크를 추가해보세요"/>
        <a href="signin.html" className="cta">
          <span>추가하기</span>
        </a>
      </div>
    </div>
  )
}

export default AddLinkInput;