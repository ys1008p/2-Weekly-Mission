import styled from 'styled-components';
import facebook from '../assets/ico-facebook.png';
import twitter from '../assets/ico-twitter.png';
import youtube from '../assets/ico-youtube.png';
import instagram from '../assets/ico-instagram.png';

const SNSINFO = [
  {
    src: facebook,
    alt: 'facebook',
  },

  {
    src: twitter,
    alt: 'twitter',
  },

  {
    src: youtube,
    alt: 'youtube',
  },

  {
    src: instagram,
    alt: 'instagram',
  },
];

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

const Privery = styled.div`
  a {
    font-size: 1.6rem;
    color: var(--color-light-gray);
  }
`;

const Faq = styled.div`
  a {
    margin: 0 0 0 3rem;
  }
`;

const Sns = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

function SnsList() {
  const sns = SNSINFO.map((item, idx) => (
    <li key={idx}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img
          src={item.src}
          alt={`${item.alt} 홈페이지로 연결된 ${item.alt} 로고`}
        />
      </a>
    </li>
  ));
  return sns;
}

function Footer() {
  return (
    <Container>
      <span>©codeit - 2023</span>
      <div>
        <Privery>
          <a href="/">Privacy Policy</a>
        </Privery>
        <Faq>
          <a href="/">FAQ</a>
        </Faq>
      </div>
      <div>
        <Sns>
          <SnsList />
        </Sns>
      </div>
    </Container>
  );
}

export default Footer;
