import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPersonalFolderBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ $isMatching }) => ($isMatching ? "#6d6afe" : "#fff")};
  color: ${({ $isMatching }) => ($isMatching ? "#fff" : "#000")};
  padding: 0.8rem 1.2rem;
  font-size: 16px;
  font-weight: 400;
  margin-right: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;

function UserPersonalFolder({ data, handleData, handleSideBtn, numPath }) {
  return (
    <Link to={`/folder/${data.id}`}>
      <StyledPersonalFolderBtn
        $isMatching={data.id === numPath}
        onClick={() => {
          handleData(data);
          handleSideBtn(true);
        }}
      >
        {data.name}
      </StyledPersonalFolderBtn>
    </Link>
  );
}

export default UserPersonalFolder;
