import styled from 'styled-components';
import eyeOn from '../assets/ico-eye-on.svg'

const Container = styled.div`
  margin: 30px 0 0;

  div + div {
    margin: 24px 0 0;
  }

  label {
    display: block;
    margin: 0 0 12px 0;
    font-size: 14px;
    line-height: 16px;
  }

  input {
    width: 100%;
    padding: 18px 15px;
    color: var(--black-color);
    border-radius: 8px;
    border: 1px solid var(--box-border-color);
    background-color: var(--white-color);

    &:focus {
      border: 1px solid var(--primary-color);
    }
  }

  p {
    margin: 6px 0 0;
    color: var(--red-color);
    font-size: 14px;
    line-height: 16px;
  }
`;

const PassWord = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 15px;
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
        <input
          type="password"
          id="signup-password"
          name="password"
        />
        <img src={eyeOn} alt="비밀번호 눈 켜짐" />
      </PassWord>
      <p></p>
    </div>
  </Container>
  );
}

export default UserInput;



