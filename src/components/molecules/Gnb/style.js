import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  height: 9.4rem;
  padding: 0 20rem;
  position: fixed;

  @media (max-width: 1199px) {
    max-width: 86.4rem;
    padding: 0 3.2rem;
  }
`;
