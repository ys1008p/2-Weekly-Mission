import styled from "styled-components";

export const Cta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.7rem;
  cursor: pointer;
  background-image: linear-gradient(
    135deg,
    ${(props) => props.theme.primary} 0%,
    #6ae3fe 100%
  );
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;

  @media (min-width: 768px) {
    height: 5.4rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
  }
`;

export const CtaShort = styled(Cta)`
  width: 8rem;

  @media (min-width: 768px) {
    width: 12.8rem;
  }
`;
