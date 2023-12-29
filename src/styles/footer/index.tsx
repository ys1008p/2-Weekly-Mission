import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  background-color: ${(props) => props.theme.black};
`;

const Box = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  padding: 3.2rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    justify-content: space-between;
    grid-template: "copyright footer-links sns";
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
`;

const CopyRight = styled.span`
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

const Links = styled.div`
  grid-area: footer-links;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

const SLink = styled(Link)`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

const SNS = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

export const footer = { Container, Box, CopyRight, Links, SLink, SNS };
