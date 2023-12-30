import styled, { keyframes } from "styled-components";
import starIcon from "../img/star.svg";
import menuIcon from "../img/kebab.svg";
import { formatDate, getTimeDifference } from "../utils/date";
import CardPopOver from "./CardPopOver";
import { useState } from "react";
import Modal from "./Modal";

function Card({ data, psFolderData, linkData }) {
  const [isPopOverOn, setIsPopOverOn] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalData, setModalData] = useState({});

  function handleMenuIconClick(e) {
    e.preventDefault();
    setIsPopOverOn((ipo) => !ipo);
  }

  return (
    <>
      <Modal $isModalOn={setIsModalOn} $isLender={isModalOn} modalData={modalData} />
      <StyledA href={data.url}>
        <StyledCardContiner>
          <StyledCardImgContiner>
            <StyledCardFavIcon src={starIcon} alt="즐겨찾기 아이콘" />
            <StyledCardImg
              src={
                data.img || "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              }
              alt="링크 이미지"
            />
          </StyledCardImgContiner>
          <StyledCardInfoContainer>
            <StyledUpdataAndMenuIconContainer>
              <StyledCardLastUpdateDate>{getTimeDifference(data.createdAt)}</StyledCardLastUpdateDate>
              <StyledCardMenuIcon src={menuIcon} alt="메뉴 아이콘" onClick={handleMenuIconClick} />
            </StyledUpdataAndMenuIconContainer>
            <StyledCardDescription>{data.description}</StyledCardDescription>
            <StyledCardCreatedAt>{formatDate(data.createdAt)}</StyledCardCreatedAt>
          </StyledCardInfoContainer>
        </StyledCardContiner>
        <CardPopOver
          $Lender={isPopOverOn}
          setModalData={setModalData}
          setIsModalOn={setIsModalOn}
          linkUrl={data.url}
          psFolderData={psFolderData}
          FolderDataLength={linkData}
        />
      </StyledA>
    </>
  );
}

const transparencyAnimation = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0.3; 
}
100% {
  opacity: 1;
}
`;
const StyledA = styled.a`
  position: relative;
`;
const StyledCardContiner = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  overflow: hidden;
  outline: 0 solid transparent;

  &:hover {
    outline-width: 3px;
    outline-color: #6d6afe;
  }
`;
const StyledCardImgContiner = styled.div`
  height: 60%;
  overflow: hidden;
  position: relative;
`;
const StyledCardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  ${StyledCardContiner}:hover & {
    transform: scale(1.3);
  }
`;
const StyledCardInfoContainer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40%;
  ${StyledCardContiner}:hover & {
    background-color: #f0f6ff;
  }
`;
const StyledCardLastUpdateDate = styled.p`
  color: #666;
  font-size: 1.3rem;
`;
const StyledCardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: black;
`;
const StyledCardCreatedAt = styled.p`
  color: #333;
  font-size: 1.4rem;
`;
const StyledCardFavIcon = styled.img`
  position: absolute;
  z-index: 2;
  right: 1rem;
  top: 1rem;

  &:hover {
    animation: ${transparencyAnimation} 1s ease-in-out infinite;
  }
`;
const StyledCardMenuIcon = styled.img`
  &:hover {
    animation: ${transparencyAnimation} 1s ease-in-out infinite;
  }
`;
const StyledUpdataAndMenuIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Card;
