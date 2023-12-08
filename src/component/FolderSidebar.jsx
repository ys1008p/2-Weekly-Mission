import styled from "styled-components";
import shareIcon from "../img/share.svg";
import penIcon from "../img/pen.svg";
import deleteIcon from "../img/delete.svg";

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

function FolderSidebar({ folderName, sideBtnLender, $isModalOn }) {
  return (
    <StyledSideBarMainContainer>
      <StyledSelectFolderName>{folderName || "전체"}</StyledSelectFolderName>
      {sideBtnLender === true ? (
        <StyledSideBtnContainer>
          <StyledSideBtn
            onClick={() => {
              $isModalOn(true);
            }}
          >
            <StyledSideBtnImg src={shareIcon} alt="share" />
            공유
          </StyledSideBtn>
          <StyledSideBtn
            onClick={() => {
              $isModalOn(true);
            }}
          >
            <StyledSideBtnImg src={penIcon} alt="changeName" />
            이름 변경
          </StyledSideBtn>
          <StyledSideBtn
            onClick={() => {
              $isModalOn(true);
            }}
          >
            <StyledSideBtnImg src={deleteIcon} alt="delete" />
            삭제
          </StyledSideBtn>
        </StyledSideBtnContainer>
      ) : null}
    </StyledSideBarMainContainer>
  );
}

export default FolderSidebar;
