import linkImg from "../asset/link.svg";
import "../css/headerfolder.css";
function FolderHeader() {
  return (
    <header>
      <form>
        <div className="linkInput">
          <div className="linkInputDiv">
            <img src={linkImg} className="folderHeaderImg" alt="linkImg" />
            <input className="folderInput" placeholder="링크를 추가해 보세요" />
          </div>
          <button className="folderButton">추가하기</button>
        </div>
      </form>
    </header>
  );
}
export default FolderHeader;
