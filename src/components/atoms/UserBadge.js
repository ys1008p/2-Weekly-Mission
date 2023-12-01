import styled from "styled-components"

const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;
const Span = styled.span`
  @media (max-width: 767px) {
    display: none;
}`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.6rem;
  color: var(--gray-text);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7rem;
`;

const UserBadge = ({ profileImg, account}) => {
  
  return (
    <Div>
      <Img src="./images/kakao.svg"></Img>
      <Span>Codeit@codeit.com</Span>
    </Div>
  )
}

export default UserBadge