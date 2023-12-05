import { Link, useParams } from "react-router-dom";
import UserPersonalFolder from "./UserPersonalFolder";
import UserPersonalFolderSideBar from "./UserPersonalFolderSideBar";
import styled from "styled-components";

const StyledPersonalFolderBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ $isMatching }) => (!$isMatching ? "#6d6afe" : "#fff")};
  color: ${({ $isMatching }) => (!$isMatching ? "#fff" : "#000")};
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

function UserPersonalFolderList({
  psFolderData,
  handleData,
  handleSideBtn,
  folderName,
  sideBtnLender,
}) {
  const path = useParams();
  const numPath = Number(path.folderId);

  return (
    <>
      <StyledPersonalFolderBtnContainer>
        <div>
          <Link to="/folder">
            <StyledPersonalFolderBtn
              $isMatching={numPath}
              onClick={() => {
                handleData("");
                handleSideBtn(false);
              }}
            >
              전체
            </StyledPersonalFolderBtn>
          </Link>
          {psFolderData.map((data) => (
            <UserPersonalFolder
              key={data.id}
              data={data}
              handleData={handleData}
              handleSideBtn={handleSideBtn}
              numPath={numPath}
            />
          ))}
        </div>
        <StyledPersonalFolderAddBtn>폴더 추가 +</StyledPersonalFolderAddBtn>
      </StyledPersonalFolderBtnContainer>
      <UserPersonalFolderSideBar
        folderName={folderName}
        sideBtnLender={sideBtnLender}
      />
    </>
  );
}

export default UserPersonalFolderList;
