import styled from "styled-components"

const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
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

const UserBadge = ({ profileImg, email}) => {
  
  return (
    <Div>
      <Img src={profileImg}></Img>
      <Span>{email}</Span>
    </Div>
  )
}

export default UserBadge