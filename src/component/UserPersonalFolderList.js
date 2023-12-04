import UserPersonalFolder from "./UserPersonalFolder";
import UserPersonalFolderSideBar from "./UserPersonalFolderSideBar";
import styled from "styled-components";

const PersonalFolderBtn = styled.button`
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

const PersonalFolderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PersonalFolderAddBtn = styled.button`
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
      <PersonalFolderContainer>
        <div>
          <PersonalFolderBtn>전체</PersonalFolderBtn>
          {psFolderData.map((data) => (
            <UserPersonalFolder key={data.id} data={data} />
          ))}
        </div>
        <PersonalFolderAddBtn>폴더 추가 +</PersonalFolderAddBtn>
      </PersonalFolderContainer>
      <UserPersonalFolderSideBar />
    </>
  );
}

export default UserPersonalFolderList;
