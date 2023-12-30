import styled from "styled-components";
import { useState } from "react";
import { ASSETS_URL } from "../../constants.ts";
import CalculateElapsedTime from "../../utils/CalculateElapsedTime.tsx";
import ConvertToFormattedDate from "../../utils/ConvertToFormattedDate.tsx";
import noImage from "../../noImage.svg";
import PopOver from "../domains/folder/PopOver.tsx";

function Card({ link }) {
  const createdAtString = link.created_at;
  const elapseTime = CalculateElapsedTime(createdAtString);
  const postedDate = ConvertToFormattedDate(createdAtString);
  const [showPopOver, setShowPopOver] = useState(false);

  const handelClickPopOver = (e) => {
    if (e.target.tagName === "IMG" && e.target.src.includes("meatball.png")) {
      setShowPopOver(true);
    } else {
      setShowPopOver(false);
    }
  };

  return (
    <CardLayout onClick={handelClickPopOver}>
      <CardImageWrapper onClick={() => window.open(`${link.url}`, "_blank")}>
        {link && link.image_source ? (
          <CardImage src={link.image_source} />
        ) : (
          <CardNoImage src={noImage} />
        )}
      </CardImageWrapper>
      <CardDescriptionBox>
        <TimeBox>
          <PopOver showPopOver={showPopOver} />
          <div>{elapseTime}</div>
          <img src={`${ASSETS_URL}/images/meatball.png`} />
        </TimeBox>
        <p>{link && link.description}</p>
        <div>{postedDate}</div>
      </CardDescriptionBox>
    </CardLayout>
  );
}
const CardLayout = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1;
  }
`;

const CardImageWrapper = styled.div`
  width: 34rem;
  height: 33.4rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`;
const CardNoImage = styled.img`
  width: 100%;
`;
const CardDescriptionBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2rem 1.5rem;
  position: absolute;
  top: 20rem;
  z-index: 1;

  & p {
    width: 30rem;
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-bottom: 1rem;
  }
  & div {
    font-size: 1.4rem;
  }
`;
const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    font-size: 1.3rem;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 1rem;
  }

  & img {
    width: 2.1rem;
    height: 1.7rem;
  }
`;
export default Card;
