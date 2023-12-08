import styled from "styled-components";

const StyledPopOverContainer = styled.div`
  display: ${({ Lender }) => (Lender ? `flex` : `none`)};
  flex-direction: column;
  position: absolute;
  top: 23rem;
  right: -5rem;
  z-index: 2;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const StyledPopOverBtn = styled.button`
  background-color: white;
  font-size: 1.4rem;
  border: none;
  padding: 0.7rem 1.2rem;
  cursor: pointer;

  &:hover {
    color: #6d6afe;
    background-color: #e7effb;
  }
`;

function handleClick(e) {
  e.preventDefault();
}

function FolderPopOver({ Lender }) {
  return (
    <StyledPopOverContainer Lender={Lender}>
      <StyledPopOverBtn onClick={handleClick}>삭제하기</StyledPopOverBtn>
      <StyledPopOverBtn onClick={handleClick}>폴더에추가</StyledPopOverBtn>
    </StyledPopOverContainer>
  );
}

export default FolderPopOver;
