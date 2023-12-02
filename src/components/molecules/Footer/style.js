import styled from "styled-components";

export const Footer= styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: #111322;
  @media (max-width: 767px) {
    padding: 3.2rem 3.2rem 6.4rem;
  }
`;
export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 192rem;
  height: fit-content;
  padding: 0 10.4rem;
  @media (max-width: 767px) {
    padding: 0;
  }
`

export const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;

  &.pc-p {
    display: initial;
  }
  &.mobile-p {
    display: none;
  }
  @media (max-width: 767px) {
    &.pc-p {
      display: none;
    }
    &.mobile-p {
      display: initial;
    }
  }
`;

export const LinksBox = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
  @media (max-width: 767px) {
    flex-shrink: 0;
    max-width: 18rem;
    flex-wrap: wrap;
    row-gap: 5.4rem;
  }
`;

export const Link = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;