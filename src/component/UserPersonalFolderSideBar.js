import styled from "styled-components";

const StyledSideBarMainContainer = styled.div`
  display: flex;
  margin: 2.4rem 0;
  justify-content: space-between;
`;

const StyledSideBtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const StyledSelectFolderName = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const StyledSideBtn = styled.span`
  color: #9fa6b2;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

const StyledSideBtnImg = styled.img``;

function UserPersonalFolderSideBar() {
  return (
    <StyledSideBarMainContainer>
      <StyledSelectFolderName>테스트</StyledSelectFolderName>
      <StyledSideBtnContainer>
        <StyledSideBtn>
          <StyledSideBtnImg src="img/share.svg" alt="share" />
          공유
        </StyledSideBtn>
        <StyledSideBtn>
          <StyledSideBtnImg src="img/pen.svg" alt="changeName" />
          이름 변경
        </StyledSideBtn>
        <StyledSideBtn>
          <StyledSideBtnImg src="img/delete.svg" alt="delete" />
          삭제
        </StyledSideBtn>
      </StyledSideBtnContainer>
    </StyledSideBarMainContainer>
  );
}

export default UserPersonalFolderSideBar;
