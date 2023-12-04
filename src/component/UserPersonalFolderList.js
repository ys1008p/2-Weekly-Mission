import UserPersonalFolder from "./UserPersonalFolder";
import UserPersonalFolderSideBar from "./UserPersonalFolderSideBar";
import styled from "styled-components";

const StyledPersonalFolderBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: #fff;
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

const StyledPersonalFolderBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledPersonalFolderAddBtn = styled.button`
  color: #6d6afe;
  font-size: 16px;
  font-weight: 500;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

function UserPersonalFolderList({ psFolderData }) {
  return (
    <>
      <StyledPersonalFolderBtnContainer>
        <div>
          <StyledPersonalFolderBtn>전체</StyledPersonalFolderBtn>
          {psFolderData.map((data) => (
            <UserPersonalFolder key={data.id} data={data} />
          ))}
        </div>
        <StyledPersonalFolderAddBtn>폴더 추가 +</StyledPersonalFolderAddBtn>
      </StyledPersonalFolderBtnContainer>
      <UserPersonalFolderSideBar />
    </>
  );
}

export default UserPersonalFolderList;
