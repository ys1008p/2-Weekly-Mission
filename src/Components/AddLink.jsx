import "../css/AddLink.css";
import link from "../images/link.svg";
function AddLink() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="AddLink">
      <form className="AddLinkForm">
        <label htmlFor="link" className="AddLinkFormLabel">
          <img src={link} alt="링크" />
          <input
            id="link"
            className="AddLinkInput"
            placeholder="링크를 추가해 보세요"
          />
        </label>
        <button onSubmit={handleSubmit}>추가하기</button>
      </form>
    </div>
  );
}
export default AddLink;
