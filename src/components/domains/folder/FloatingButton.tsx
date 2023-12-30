import styled from "styled-components";

function FloatingButton() {
  // eslint-disable-next-line no-use-before-define
  return <StyledButton>폴더추가 +</StyledButton>;
}

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: #ffffff;
  border-radius: 2rem;
  padding: 0.8rem 2.4rem;
  border: none;
  display: none;
  margin: 0 auto;

  @media (max-width: 390px) {
    display: block;
    position: fixed;
    bottom: 10.1rem;
    right: 35%;
    z-index: 5;
  }
`;

export default FloatingButton;
