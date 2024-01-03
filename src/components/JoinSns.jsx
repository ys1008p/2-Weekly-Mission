import styled from 'styled-components';
import google from '../assets/ico-google.png';
import kakao from '../assets/ico-kakao.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.2rem 0 0;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  border: 1px solid var(--gray20);
  background-color: var(--gray10);

  p {
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: var(--gray100);
  }

  ul {
    overflow: hidden;
    list-style-type: none;

    li {
      float: left;

      a {
        display: block;
        width: 4.2rem;
        height: 4.2rem;
      }
    }

    li + li {
      margin: 0 0 0 1.6rem;
    }
  }
`;

function JoinSns() {
  return (
    <Container>
      <p>다른 방식으로 가입하기</p>
      <div>
        <ul>
          <li>
            <a href="https://www.google.com/">
              <img src={google} alt="구글 홈페이지로 연결된 구글 로고" />
            </a>
          </li>
          <li>
            <a href="https://www.kakaocorp.com/page/">
              <img src={kakao} alt="카카오 홈페이지로 연결된 카카오 로고" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default JoinSns;
