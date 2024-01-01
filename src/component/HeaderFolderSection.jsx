import styled from "styled-components";

const StyledHeaderOwnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 6rem;
  margin: 9.2rem 0 0;
  width: 100%;
  background-color: #f0f6ff;

  @media all and (max-width: 768px) {
    margin: 6.4rem 0 0;
  }
`;
const StyledOwnerImg = styled.img`
  border-radius: 50%;
  width: 6rem;
  background-color: #dddddd;
  margin-bottom: 1.2rem;
`;
const StyledOwnerName = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;
const StyledSelectFolderName = styled.h2`
  font-size: 4rem;
  font-weight: 600;
`;

function HeaderFoloderSection({ folderData }) {
  const folderName = folderData.name;
  const ownerName = folderData.owner?.name;
  const ownerImg = folderData.owner?.profileImageSource;

  return (
    <StyledHeaderOwnerContainer>
      <StyledOwnerImg src={ownerImg} alt="folderImg" />
      <StyledOwnerName>{ownerName}</StyledOwnerName>
      <StyledSelectFolderName>{folderName}</StyledSelectFolderName>
    </StyledHeaderOwnerContainer>
  );
}

export default HeaderFoloderSection;
