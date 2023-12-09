import { useState } from 'react';
import styled from 'styled-components';
import eyeOn from '../assets/ico-eye-on.svg';
import eyeOff from '../assets/ico-eye-off.svg';

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

const VALIDATE_CHECK = {
  email: /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
};

// userEmail: 'test@codeit.com',
// userPassword: 'codeit101'

function UserInput({ signup }) {
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePasswordCheck, setPasswordCheck] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPasswordCheck, setErrorPasswordCheck] = useState('');
  const [value, setValue] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const handleClickPassword = () => setTogglePassword(!togglePassword);

  const handleClickPasswordCheck = () => setPasswordCheck(!togglePasswordCheck);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFocusout = (e) => {
    if (e.target.name === 'email') {
      e.target.classList.add('active');

      if (!value.email) {
        setErrorEmail('이메일을 입력하세요');
      } else {
        if (!VALIDATE_CHECK.email.test(value.email)) {
          setErrorEmail('올바른 이메일 주소가 아닙니다');
        } else {
          setErrorEmail('');
          e.target.classList.remove('active');
        }
      }
    }

    if (e.target.name === 'password') {
      e.target.classList.add('active');

      if (!value.password) {
        setErrorPassword('비밀번호를 입력하세요');
      } else {
        if (!VALIDATE_CHECK.password.test(value.password)) {
          setErrorPassword('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
        } else {
          setErrorPassword('');
          e.target.classList.remove('active');
        }
      }
    }

    if (
      (e.target.name === 'password' || e.target.name === 'passwordCheck') &&
      value.passwordCheck
    ) {
      if (value.password !== value.passwordCheck) {
        setErrorPasswordCheck('비밀번호가 일치하지 않습니다');
        e.target.classList.add('active');
      } else {
        setErrorPasswordCheck('');
        e.target.classList.remove('active');
      }
    }
  };

  return signup ? (
    <Container>
      <div>
        <label htmlFor="signup-email">이메일</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          value={value.email}
          onChange={handleChange}
          onBlur={handleFocusout}
        />
        {errorEmail && <p>{errorEmail}</p>}
      </div>

      <div>
        <label htmlFor="signup-password">비밀번호</label>
        <PassWord>
          <input
            type={togglePassword ? 'text' : 'password'}
            id="signup-password"
            name="password"
            value={value.password}
            onChange={handleChange}
            onBlur={handleFocusout}
          />
          {togglePassword ? (
            <img src={eyeOn} alt="비밀번호 표시" onClick={handleClickPassword} />
          ) : (
            <img src={eyeOff} alt="비밀번호 숨기기" onClick={handleClickPassword} />
          )}
        </PassWord>
        {errorPassword && <p>{errorPassword}</p>}
      </div>

      <div>
        <label htmlFor="signup-check-password">비밀번호 확인</label>
        <PassWord>
          <input
            type={togglePasswordCheck ? 'text' : 'password'}
            id="signup-check-password"
            name="passwordCheck"
            value={value.passwordCheck}
            onChange={handleChange}
            onBlur={handleFocusout}
          />
          {togglePasswordCheck ? (
            <img src={eyeOn} alt="비밀번호 표시" onClick={handleClickPasswordCheck} />
          ) : (
            <img src={eyeOff} alt="비밀번호 숨기기" onClick={handleClickPasswordCheck} />
          )}
        </PassWord>
        {errorPasswordCheck && <p>{errorPasswordCheck}</p>}
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
          value={value.email}
          onChange={handleChange}
          onBlur={handleFocusout}
        />
        {errorEmail && <p>{errorEmail}</p>}
      </div>

      <div>
        <label htmlFor="signup-password">비밀번호</label>
        <PassWord>
          <input
            type={togglePassword ? 'text' : 'password'}
            id="signin-password"
            name="password"
            value={value.password}
            onChange={handleChange}
            onBlur={handleFocusout}
          />
          {togglePassword ? (
            <img src={eyeOn} alt="비밀번호 표시" onClick={handleClickPassword} />
          ) : (
            <img src={eyeOff} alt="비밀번호 숨기기" onClick={handleClickPassword} />
          )}
        </PassWord>
        {errorPassword && <p>{errorPassword}</p>}
      </div>
    </Container>
  );
}

export default UserInput;
