import styled from "styled-components";
import { formatDate, getTimeDifference } from "../utils/date";

const StyledCardContiner = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  overflow: hidden;
  &:hover {
    border: 3px solid #6d6afe;
  }
`;
const StyledCardImgContiner = styled.div`
  height: 60%;
  overflow: hidden;
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
  max-height: 5rem;
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

function Card({ data }) {
  return (
    <a href={data.url}>
      <StyledCardContiner>
        {/* 이미지가 없을시 대체 이미지 */}
        <StyledCardImgContiner>
          <StyledCardImg
            src={
              data.img ||
              "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
            alt="링크 이미지"
          />
        </StyledCardImgContiner>
        <StyledCardInfoContainer>
          <StyledCardLastUpdateDate>
            {getTimeDifference(data.createdAt)}
          </StyledCardLastUpdateDate>
          <StyledCardDescription>{data.description}</StyledCardDescription>
          <StyledCardCreatedAt>
            {formatDate(data.createdAt)}
          </StyledCardCreatedAt>
        </StyledCardInfoContainer>
      </StyledCardContiner>
    </a>
  );
}

export default Card;
