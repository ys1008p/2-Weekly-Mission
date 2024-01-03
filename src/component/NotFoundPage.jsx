import styled from "styled-components";

function NotFoundPage() {
  return (
    <StyledNotFoundPageContainer>
      <StyledNotFoundPageH2>404 NOTFOUND ! </StyledNotFoundPageH2>
      <StyledNotFoundPageP>죄송합니다! 페이지를 찾을수 없습니다.</StyledNotFoundPageP>
    </StyledNotFoundPageContainer>
  );
}

const StyledNotFoundPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  top: 0;
  background: #1e1e1e;
  position: absolute;
`;
const StyledNotFoundPageH2 = styled.h2`
  color: #6d6afe;
  font-size: 10rem;
  font-weight: 600;
`;
const StyledNotFoundPageP = styled.p`
  font-size: 3rem;
  font-weight: 400;
  color: white;
`;

export default NotFoundPage;
