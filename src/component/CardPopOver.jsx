import styled from "styled-components";
import { deleteLink, addLink } from "../utils/modalItemData";

const StyledCardPopOverContainer = styled.div`
  display: ${({ $Lender }) => ($Lender ? `flex` : `none`)};
  flex-direction: column;
  position: absolute;
  top: 23rem;
  right: -5rem;
  z-index: 2;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;
const StyledCardPopOverBtn = styled.button`
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

function CardPopOver({ $Lender, setIsModalOn, setModalData, linkUrl, psFolderData, linkData }) {
  function handleClick(data) {
    setIsModalOn(true);
    setModalData(data);
  }

  return (
    <>
      <StyledCardPopOverContainer $Lender={$Lender}>
        <StyledCardPopOverBtn
          onClick={(e) => {
            handleClick(deleteLink(linkUrl));
            e.preventDefault();
          }}
        >
          삭제하기
        </StyledCardPopOverBtn>
        <StyledCardPopOverBtn
          onClick={(e) => {
            handleClick(addLink(linkUrl, psFolderData, linkData));
            e.preventDefault();
          }}
        >
          폴더에추가
        </StyledCardPopOverBtn>
      </StyledCardPopOverContainer>
    </>
  );
}

export default CardPopOver;
