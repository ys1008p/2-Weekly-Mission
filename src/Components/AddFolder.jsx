import Add from "../images/Add.svg";
import styled from "styled-components";
const AddFolderFrom = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;
  input {
    color: #6d6afe;
    text-align: center;
    font-family: Abel;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
    button {
      img {
        width: 100%;
      }
    }
  }
`;

function AddFolder() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    //Todo 스타일 변경
    <AddFolderFrom onSubmit={handleSubmit}>
      <input type="text" placeholder="폴더추가" />
      <button>
        <img src={Add} alt="더하기" />
      </button>
    </AddFolderFrom>
  );
}
export default AddFolder;
