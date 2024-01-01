import styled from "styled-components";
import facebookIcon from "../img/akar-icons_facebook-fill.svg";
import twitterIcon from "../img/akar-icons_twitter-fill.svg";
import youtubeIcon from "../img/akar-icons_youtube-fill.svg";
import instagramIcon from "../img/ant-design_instagram-filled.svg";

function Footer({ setRef }) {
  return (
    <StyledFooterContainer ref={setRef}>
      <StyledFooterItemContainer>
        <StyledFooterSrc>
          <p>©codeit - 2023</p>
        </StyledFooterSrc>

        <StyledFooterGuideContainer>
          <StyledFooterGuideLink href="/privacy">Privacy Policy</StyledFooterGuideLink>
          <StyledFooterGuideLink href="/faq">FAQ</StyledFooterGuideLink>
        </StyledFooterGuideContainer>

        <StyledFooterIconContainer>
          <a href="https://www.facebook.com" rel="noopener noreferrer">
            <img src={facebookIcon} alt="facebook_icon" />
          </a>
          <a href="https://www.twitter.com" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter_icon" />
          </a>
          <a href="https://www.youtube.com" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="youtube_icon" />
          </a>
          <a href="https://www.instagram.com" rel="noopener noreferrer">
            <img src={instagramIcon} alt="instagram_icon" />
          </a>
        </StyledFooterIconContainer>
      </StyledFooterItemContainer>
    </StyledFooterContainer>
  );
}

const StyledFooterContainer = styled.footer`
  background-color: #111322;
  padding: 3.2rem 10.4rem 6.4rem;
  margin-top: 6rem;
  @media all and (max-width: 768px) {
    padding: 3.2rem;
    margin-top: 4rem;
  }
`;
const StyledFooterItemContainer = styled.div`
  background-color: #111322;
  max-width: 192rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media all and (max-width: 768px) {
    display: grid;
    grid-template-areas:
      "guide  icon"
      "codeit  . ";
    grid-template-columns: 50% 30%;
    gap: 6rem 0;
  }
`;
const StyledFooterSrc = styled.div`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;

  @media all and (max-width: 768px) {
    grid-area: codeit;
  }
`;
const StyledFooterGuideLink = styled.a`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;
const StyledFooterGuideContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media all and (max-width: 768px) {
    grid-area: guide;
    justify-content: space-between;
  }
`;
const StyledFooterIconContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  @media all and (max-width: 768px) {
    grid-area: icon;
    justify-content: space-between;
  }
`;

export default Footer;
