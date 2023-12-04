import * as S from './style'
import getElapsedTime from "../../../utils/getElapsedTime";
import formatISOdate from "../../../utils/formatISOdate";

const noImage = "./images/no-image.png";

const Card = ({imgSrc = noImage, description, createdAt, url}) => {
  const elapsedTime = getElapsedTime(createdAt)
  const formattedCrateAt = formatISOdate(createdAt)
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <S.Div>
        <S.Img src={imgSrc} alt="링크 프리뷰 이미지" />
        <S.DetailBox>
          <S.ElapsedTime>{elapsedTime}</S.ElapsedTime>
          <S.Description>{description}</S.Description>
          <S.CreateDate>{formattedCrateAt}</S.CreateDate>
        </S.DetailBox>    
      </S.Div>
    </a>
  )
}

export default Card;