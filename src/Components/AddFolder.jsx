import Add from "../images/Add.svg";
import "../css/AddFolder.css";
function AddFolder() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    //Todo 스타일 변경
    <form className="addFolder" onSubmit={handleSubmit}>
      <input type="text" placeholder="폴더추가" />
      <button className="addFolder-button">
        <img src={Add} alt="더하기" />
      </button>
    </form>
  );
}
export default AddFolder;
