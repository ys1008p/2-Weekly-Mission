import { Link } from "react-router-dom";
import styled from "styled-components";

function FolderFilterButton({ data, handleData, handleSideBtn, numPath }) {
  return (
    <Link to={`/folder/${data.id}`}>
      <StyledFolderFilterButton
        $isMatching={data.id === numPath}
        onClick={() => {
          handleData(data);
          handleSideBtn(true);
        }}
      >
        {data.name}
      </StyledFolderFilterButton>
    </Link>
  );
}

const StyledFolderFilterButton = styled.button`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ $isMatching }) => ($isMatching ? "#6d6afe" : "#fff")};
  color: ${({ $isMatching }) => ($isMatching ? "#fff" : "#000")};
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;

export default FolderFilterButton;
