import styled from 'styled-components';
import { EmailValidation, PwValidation, PwCheckValidation } from './Validate';
import eyeOn from '../assets/ico-eye-on.svg';

const Container = styled.div`
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
    outline: none;
    border: none;
    width: 100%;
    padding: 1.8rem 1.5rem;
    font-size: 1.6rem;
    color: var(--black-color);
    border-radius: 0.8rem;
    border: 1px solid var(--box-border-color);
    background-color: var(--white-color);

    &:focus {
      border: 1px solid var(--primary-color);
    }

    &.active {
      border: 1px solid var(--red-color);
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

function UserInput({
  signup,
  onChange,
  values,
  onFocus,
  focus,
  focusOut,
  onBlur,
}) {
  return signup ? (
    <Container>
      <div>
        <label htmlFor="signup-email">이메일</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <p>
          <EmailValidation
            values={values.email}
            focus={focus}
            focusOut={focusOut}
          />
        </p>
      </div>

      <div>
        <label htmlFor="signup-password">비밀번호</label>
        <PassWord>
          <input
            type="password"
            id="signup-password"
            name="password"
            onChange={onChange}
            onFocus={onFocus}
          />
          <img src={eyeOn} alt="비밀번호 눈 켜짐" />
        </PassWord>
        <p>
          <PwValidation
            values={values.password}
            focus={focus}
            focusOut={focusOut}
          />
        </p>
      </div>

      <div>
        <label htmlFor="signup-check-password">비밀번호 확인</label>
        <PassWord>
          <input
            type="password"
            id="signup-check-password"
            name="passwordCheck"
            onChange={onChange}
            onFocus={onFocus}
          />
          <img src={eyeOn} alt="비밀번호 눈 켜짐" />
        </PassWord>
        <p>
          <PwCheckValidation
            passwordCheck={values.passwordCheck}
            password={values.password}
            focus={focus}
          />
        </p>
      </div>
    </Container>
  ) : (
    <Container>
      <div>
        <label htmlFor="signup-email">이메일</label>
        <input
          type="email"
          id="signin-email"
          name="email"
          onChange={onChange}
          onFocus={onFocus}
        />
        <p>
          <EmailValidation values={values.email} focus={focus} />
        </p>
      </div>

      <div>
        <label htmlFor="signup-password">비밀번호</label>
        <PassWord>
          <input
            type="password"
            id="signin-password"
            name="password"
            onChange={onChange}
            onFocus={onFocus}
          />
          <img src={eyeOn} alt="비밀번호 눈 켜짐" />
        </PassWord>
        <p>
          <PwValidation values={values.password} focus={focus} />
        </p>
      </div>
    </Container>
  );
}

export default UserInput;
