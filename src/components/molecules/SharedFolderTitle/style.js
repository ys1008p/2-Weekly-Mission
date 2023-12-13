import styled from "styled-components"

export const Img = styled.img`
  width: 6rem;
  height: 6rem;
  
  @media (max-width: 767px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const P = styled.p`
  color: var(--common-text);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-top: 1.2rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-top: 0.6rem;
  }
`
export const h1 = styled.h1`
  color: var(--common-text); 
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.8rem;
  margin-top: 2rem;
  width: max-content;

  @media (max-width: 767px) {
    font-size: 3.2rem;
    line-height: 3.8rem;
    letter-spacing: -0.02rem;
    margin-top: 1rem;
  }
`
export const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 18.8rem;
`


