import styled from 'styled-components';
import facebook from '../assets/ico-facebook.png';
import twitter from '../assets/ico-twitter.png';
import youtube from '../assets/ico-youtube.png';
import instagram from '../assets/ico-instagram.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 10.4rem 10.8rem 10.4rem;
  background-color: var(--bg-black);

  @media screen and (min-width: 375px) and (max-width: 768px) {
    position: relative;
    padding: 3.2rem 3.2rem 10.8rem 3.2rem;
  }

  span {
    color: var(--color-dark-gray);
    font-family: Arial;
    font-size: 1.6rem;

    @media screen and (min-width: 375px) and (max-width: 768px) {
      position: absolute;
      bottom: 3.2rem;
    }
  }
`;
const FootInfo = styled.div`
  a {
    font-size: 1.6rem;
    color: var(--color-light-gray);
  }

  a:last-child {
    margin: 0 0 0 3rem;
  }
`;

const Sns = styled.div`
  ul {
    display: flex;
    gap: 1.2rem;
  }
`;

function Footer() {
  return (
    <Container>
      <span>©codeit - 2023</span>
      <FootInfo>
        <a href="/">Privacy Policy</a>
        <a href="/">FAQ</a>
      </FootInfo>
      <Sns>
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={facebook}
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={instagram}
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </a>
          </li>
        </ul>
      </Sns>
    </Container>
  );
}

export default Footer;
