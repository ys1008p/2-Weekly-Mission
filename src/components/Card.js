import { ASSETS_URL } from "../constants";
import CalculateElapsedTime from "../utils/CalculateElapsedTime";
import ConvertToFormattedDate from "../utils/ConvertToFormattedDate";
import styled from "styled-components";
import noImage from "../noImage.svg";
function Card({ link }) {
  const createdAtString = link.created_at;
  const elapseTime = CalculateElapsedTime(createdAtString);
  const postedDate = ConvertToFormattedDate(createdAtString);

  console.log(link);

  const CardLayout = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;

    & img {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 5;
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
}
  `;
  const CardDescriptionBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 2rem 1.5rem;
    position: absolute;
    top: 20rem;
    z-index: 1;

    $ p {
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
  console.log(link.image_source);

  return (
    <CardLayout onClick={() => window.open(`${link.url}`, "_blank")}>
      <CardImageWrapper>
        {link && link.image_source ? (
          <CardImage src={link.image_source} />
        ) : (
          <CardNoImage src={noImage} />
        )}
      </CardImageWrapper>
      <CardDescriptionBox>
        <TimeBox>
          <div>{elapseTime}</div>
          <img src={ASSETS_URL + "/images/meatball.png"} />
        </TimeBox>
        <p>{link && link.description}</p>
        <div>{postedDate}</div>
      </CardDescriptionBox>
    </CardLayout>
  );
}

export default Card;
