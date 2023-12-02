import styled from "styled-components"

const Div = styled.div`
  position: relative;
  max-width: 34rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  background-color: inherit;
`
const Img = styled.img`
  width: 100%;
`
const DetailBox= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 0 0 1.5rem 1.5rem;
  text-align: left;
  `
const ElapsedTime = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: var(--lightgray-text);
  `
const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`
const CreateDate = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: var(--darkgray-text);
`

const noImage = "./images/no-image.png";
const elapsedTime = "10 minutes ago";
const description= "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd"; 
const createAt = "2023.3.15";
const Card = () => {
  
  return (
    <Div>
      <Img src={noImage} alt="링크 프리뷰 이미지" />
      <DetailBox>
        <ElapsedTime>{elapsedTime}</ElapsedTime>
        <Description>{description}</Description>
        <CreateDate>{createAt}</CreateDate>
      </DetailBox>    
    </Div>
  )
}

export default Card;