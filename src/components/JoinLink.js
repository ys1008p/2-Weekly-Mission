import styled from 'styled-components';
import logo from '../assets/logo.svg'

const Logo = styled.div`
  text-align: center;

  img {
    width: 21rem;
  }

  span {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip-path: rect(0 0 0 0);
  }
`;

const Link = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.6rem 0 0;

  p {
    font-size: 1.6rem;
  }

  a {
    color: var(--primary-color);
    font-weight: 600;
    line-height: 1.9rem;
    border-bottom: 1px solid var(--primary-color);
    font-size: 1.6rem;
  }
`;

function JoinLink() {
  return (
    <div>
      <Logo>
        <a href="/">
          <img src={logo} alt="Linkbrary 로고" />
          <span>Linkbrary</span>
        </a>
      </Logo>

      <Link>
        <p>이미 회원이신가요?</p>
        <a href="/">로그인 하기</a>
      </Link>
    </div>
  );
}

export default JoinLink;
