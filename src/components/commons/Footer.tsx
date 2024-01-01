import React from "react";
import styled from "styled-components";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <StyledFooter>
      <StyledInfo>
        <StyledCodeit>@codeit - 2023</StyledCodeit>
        <StyledPolicy>
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </StyledPolicy>
        <StyledSNS>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </StyledSNS>
      </StyledInfo>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--black-color);
  padding: 3.2rem 10.4rem 6.4rem 10.4rem;
  font-size: 1.6rem;
  margin-top: 6rem;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.4rem;
  width: 100%;

  @media (min-width: 375px) and (max-width: 767px) {
    display: grid;
    row-gap: 6rem;
    grid-template:
      "policy sns"
      "codeit .";
  }
`;

const StyledCodeit = styled.div`
  color: #676767;
  font-size: 1.6rem;

  @media (min-width: 375px) and (max-width: 767px) {
    grid-area: codeit;
  }
`;

const StyledPolicy = styled.div`
  display: flex;
  gap: 3rem;

  a {
    color: #676767;
    text-decoration: none;
    text-align: center;
    font-size: 1.6rem;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    grid-area: policy;
  }
`;

const StyledSNS = styled.div`
  display: flex;
  gap: 1.2rem;
  cursor: pointer;

  @media (min-width: 375px) and (max-width: 767px) {
    grid-area: sns;
  }
`;
