import styled from 'styled-components';
import eyeOn from '../assets/ico-eye-on.svg';

const Container = styled.div`
  max-width: 40rem;
  margin: 3rem 0 0;

  div + div {
    margin: 2.4rem 0 0;
  }

  label {
    display: block;
    margin: 0 0 1.2rem 0;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    color: var(--black-color);
    border-radius: 0.8rem;
    border: 1px solid var(--box-border-color);
    background-color: var(--white-color);

    &:focus {
      border: 1px solid var(--primary-color);
    }
  }

  p {
    margin: 0.6rem 0 0;
    color: var(--red-color);
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

const PassWord = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

function UserInput() {
  return (
    <Container>
      <div>
        <label htmlFor="signup-email">이메일</label>
        <input type="email" id="signup-email" name="email" />
        <p></p>
      </div>

      <div>
        <label htmlFor="signup-password">비밀번호</label>
        <PassWord>
          <input type="password" id="signup-password" name="password" />
          <img src={eyeOn} alt="비밀번호 눈 켜짐" />
        </PassWord>
        <p></p>
      </div>
    </Container>
  );
}

export default UserInput;
