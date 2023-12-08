import styled from "styled-components";

const StyledPopOverContainer = styled.div`
  background-color: red;
`;

function FolderPopOver() {
  return (
    <StyledPopOverContainer>
      <p>삭제하기</p>
      <p>폴더에추가</p>
    </StyledPopOverContainer>
  );
}

export default FolderPopOver;
