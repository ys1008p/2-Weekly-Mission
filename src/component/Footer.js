import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #111322;
  padding: 3.2rem 10.4rem 6.4rem;

  @media all and (max-width: 768px) {
    padding: 3.2rem;
  }
`;
const FooterItemContainer = styled.div`
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
const FooterSrc = styled.div`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;

  @media all and (max-width: 768px) {
    grid-area: codeit;
  }
`;
const FooterGuideLink = styled.a`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;
const FooterGuideContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media all and (max-width: 768px) {
    grid-area: guide;
    justify-content: space-between;
  }
`;
const FooterIconContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  @media all and (max-width: 768px) {
    grid-area: icon;
    justify-content: space-between;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterItemContainer>
        <FooterSrc>
          <p>©codeit - 2023</p>
        </FooterSrc>

        <FooterGuideContainer>
          <FooterGuideLink href="/privacy">Privacy Policy</FooterGuideLink>
          <FooterGuideLink href="/faq">FAQ</FooterGuideLink>
        </FooterGuideContainer>

        <FooterIconContainer>
          <a href="https://www.facebook.com" rel="noopener noreferrer">
            <img src="img/akar-icons_facebook-fill.svg " alt="facebook_icon" />
          </a>
          <a href="https://www.twitter.com" rel="noopener noreferrer">
            <img src="img/akar-icons_twitter-fill.svg " alt="twitter_icon" />
          </a>
          <a href="https://www.youtube.com" rel="noopener noreferrer">
            <img src="img/akar-icons_youtube-fill.svg " alt="youtube_icon" />
          </a>
          <a href="https://www.instagram.com" rel="noopener noreferrer">
            <img
              src="img/ant-design_instagram-filled.svg "
              alt="instagram_icon"
            />
          </a>
        </FooterIconContainer>
      </FooterItemContainer>
    </FooterContainer>
  );
}

export default Footer;
