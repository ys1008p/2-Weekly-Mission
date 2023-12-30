import styled from "styled-components";

const StyledMainContainer = styled.div`
  margin: 4rem auto;
  max-width: 106rem;
  min-height: 33rem;
  @media all and (max-width: 1124px) {
    margin: 4rem 3.2rem;
  }
`;

function MainContainer({ children }) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}

export default MainContainer;
