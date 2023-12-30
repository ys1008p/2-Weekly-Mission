import styled from "styled-components";
import facebookIcon from "../img/colorFaceBookIcon.png";
import kakaoIcon from "../img/colorKaKaoIcon.png";
import copyIcon from "../img/link.svg";

const StyledModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
const StyledsideTitle = styled.p`
  color: #9fa6b2;
  font-size: 14px;
  line-height: 22px;
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;
`;
const StyledBlueBtn = styled.button`
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  border: none;
  width: 28rem;
  padding: 1.6rem 2rem;
  cursor: pointer;
`;
const StyledRedBtn = styled.button`
  border-radius: 8px;
  background: #ff5b56;
  color: white;
  border: none;
  width: 28rem;
  padding: 1.6rem 2rem;
  cursor: pointer;
`;
const StyledInput = styled.input`
  border-radius: 8px;
  width: 100%;
  padding: 1.8rem 1.5rem;
  border: 1px solid #ccd5e3;
  margin-top: 2.4rem;
  margin-bottom: 1.5rem;

  &::placeholder {
    color: #ccd5e3;
  }

  &:focus {
    outline: none;
    border: 1px solid #6d6afe;
  }
`;
const StyledShareIconMainContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;
const StyledShareIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledShareIcon = styled.img`
  border-radius: 50%;
  padding: 12px;
  width: 6rem;
  height: 6rem;
`;
const StyledShareOption = styled.p`
  font-family: Inter;
  font-size: 13px;
`;
const StyledAddFolderList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 2.4rem;
`;
const StyledAddFolderListFolderTitle = styled.li`
  font-size: 1.6rem;
  padding: 0.8rem;
  color: #373740;

  &:hover {
    border-radius: 8px;
    background: #f0f6ff;
    color: #6d6afe;
    cursor: pointer;
  }
`;
const StyledAddFolderListFolderTitleLength = styled.span`
  font-size: 1.4rem;
  color: #9fa6b2;
  padding-left: 0.8rem;
`;
// ====================================================

export const folderNameChange = {
  title: <StyledModalTitle>폴더 이름 변경</StyledModalTitle>,
  input: <StyledInput type="text" placeholder="내용 입력" />,
  button: <StyledBlueBtn>변경하기</StyledBlueBtn>,
};

export const deleteFolder = (location) => ({
  title: <StyledModalTitle>폴더 삭제</StyledModalTitle>,
  sideTitle: <StyledsideTitle>localhost:3000{location}</StyledsideTitle>,
  button: <StyledRedBtn>삭제하기</StyledRedBtn>,
});

export const deleteLink = (link) => ({
  title: <StyledModalTitle>링크 삭제</StyledModalTitle>,
  sideTitle: <StyledsideTitle>{link}</StyledsideTitle>,
  button: <StyledRedBtn>삭제하기</StyledRedBtn>,
});

export const addFolder = {
  title: <StyledModalTitle>폴더 추가</StyledModalTitle>,
  input: <StyledInput type="text" placeholder="내용 입력" />,
  button: <StyledBlueBtn>추가하기</StyledBlueBtn>,
};

export const addLink = (link, folderData, linkData) => {
  const linkCounts = {};

  folderData.forEach((folder) => {
    const folderId = folder.id;
    linkCounts[folderId] = linkData.filter((link) => link.folderId === folderId).length;
  });

  return {
    title: <StyledModalTitle>폴더에 추가</StyledModalTitle>,
    sideTitle: <StyledsideTitle>{link}</StyledsideTitle>,
    addLinkList: (
      <StyledAddFolderList>
        {folderData.map((folder) => (
          <StyledAddFolderListFolderTitle key={folder.id}>
            {folder.name}
            <StyledAddFolderListFolderTitleLength>{linkCounts[folder.id]}개 링크</StyledAddFolderListFolderTitleLength>
          </StyledAddFolderListFolderTitle>
        ))}
      </StyledAddFolderList>
    ),
    button: <StyledBlueBtn>추가하기</StyledBlueBtn>,
  };
};

export const shareFolder = (folderName) => ({
  title: <StyledModalTitle>폴더 공유</StyledModalTitle>,
  sideTitle: <StyledsideTitle>{folderName}</StyledsideTitle>,
  img: (
    <StyledShareIconMainContainer>
      <StyledShareIconContainer>
        <StyledShareIcon src={kakaoIcon} alt="" />
        <StyledShareOption>카카오톡</StyledShareOption>
      </StyledShareIconContainer>
      <StyledShareIconContainer>
        <StyledShareIcon src={facebookIcon} alt="" />
        <StyledShareOption>페이스북</StyledShareOption>
      </StyledShareIconContainer>
      <StyledShareIconContainer>
        <StyledShareIcon src={copyIcon} alt="" />
        <StyledShareOption>링크복사</StyledShareOption>
      </StyledShareIconContainer>
    </StyledShareIconMainContainer>
  ),
});
