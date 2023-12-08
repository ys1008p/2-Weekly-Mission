import { Link, useParams } from "react-router-dom";
import FolderSidebar from "./FolderSidebar";
import FolderFilterButton from "./FolderFilterButton";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const StyledFolderFilterBtn = styled.button`
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

const StyledFolderFilterBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledFolderFilterBtnItemContainer = styled.div`
  display: flex;
  gap: 1rem 0;
  flex-wrap: wrap;
`;

const StyledFolderAddBtn = styled.button`
  color: #6d6afe;
  font-size: 16px;
  font-weight: 500;
  border: none;
  background-color: #fff;
  cursor: pointer;
  white-space: nowrap;

  @media all and (max-width: 768px) {
    position: fixed;
    bottom: 10.1rem;
    z-index: 999;
    right: 50%;
    transform: translate(50%, 0);
    color: white;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #6d6afe;
    padding: 0.8rem 2.4rem;
    transition: background 0.3s;

    &:hover {
      background: #4b4bff;
    }
  }
`;

function FolderFilterButtonList({
  psFolderData,
  handleData,
  handleSideBtn,
  folderName,
  sideBtnLender,
}) {
  const path = useParams();
  const numPath = Number(path.folderId);

  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <>
      <Modal $isModalOn={setIsModalOn} $isLender={isModalOn} />
      <StyledFolderFilterBtnContainer>
        <StyledFolderFilterBtnItemContainer>
          <Link to="/folder">
            <StyledFolderFilterBtn
              $isMatching={numPath}
              onClick={() => {
                handleData("");
                handleSideBtn(false);
              }}
            >
              전체
            </StyledFolderFilterBtn>
          </Link>
          {psFolderData.map((data) => (
            <FolderFilterButton
              key={data.id}
              data={data}
              handleData={handleData}
              handleSideBtn={handleSideBtn}
              numPath={numPath}
            />
          ))}
        </StyledFolderFilterBtnItemContainer>
        <StyledFolderAddBtn
          onClick={() => {
            setIsModalOn(true);
          }}
        >
          폴더 추가 +
        </StyledFolderAddBtn>
      </StyledFolderFilterBtnContainer>
      <FolderSidebar
        folderName={folderName}
        sideBtnLender={sideBtnLender}
        $isModalOn={setIsModalOn}
      />
    </>
  );
}

export default FolderFilterButtonList;
