/* eslint-disable no-unused-expressions */
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
    color: var(--gray100);
    border-radius: 0.8rem;
    border: 1px solid var(--gray20);
    background-color: var(--white);

    &:focus {
      border: 1px solid var(--primary);
    }

    &.active {
      border: 1px solid var(--red);
    }
  }

  p {
    margin: 0.6rem 0 0;
    color: var(--red);
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

const BtnBox = styled.div`
  margin: 3rem 0 0;

  button {
    display: block;
    width: 100%;
    padding: 1.6rem 2rem;
    border: 0;
    border-radius: 0.8rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.1rem;
    cursor: pointer;
    color: var(--gray-f5f5);
    background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  }
`;

const VALIDATE_CHECK = {
  email: /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
};

const USER_INFO = {
  email: 'test@codeit.com',
  password: 'sprint101',
};

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

  const handleFocusoutEmail = (e) => {
    if (!value.email) {
      setErrorEmail('이메일을 입력하세요');
      e.target.classList.add('active');
    } else {
      if (!VALIDATE_CHECK.email.test(value.email)) {
        setErrorEmail('올바른 이메일 주소가 아닙니다');
      } else {
        setErrorEmail('');
        e.target.classList.remove('active');
      }
    }
  };

  const handleFocusoutPassword = (e) => {
    if (!value.password) {
      setErrorPassword('비밀번호를 입력하세요');
      e.target.classList.add('active');
    } else {
      if (!VALIDATE_CHECK.password.test(value.password)) {
        setErrorPassword('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
      } else {
        setErrorPassword('');
        e.target.classList.remove('active');
      }
    }
  };

  const handleFocusoutPasswordCheck = (e) => {
    if (value.password !== value.passwordCheck) {
      setErrorPasswordCheck('비밀번호가 일치하지 않습니다');
      e.target.classList.add('active');
    } else {
      setErrorPasswordCheck('');
      e.target.classList.remove('active');
    }
  };

  const handleClickLogin = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sign-in',
        {
          method: 'POST',
          body: JSON.stringify(USER_INFO),
        }
      );

      const { email, password } = USER_INFO;

      if (value.email === email && value.password === password) {
        window.location.href = '../../folder';
      } else {
        handleFocusoutEmail();
      }

      if (!response.ok) throw new Error();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickEmailCheck = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/check-email',
        {
          method: 'POST',
          body: JSON.stringify(value.email),
        }
      );

      value.email !== USER_INFO.email
        ? (window.location.href = '../../folder')
        : '';

      if (!response.ok) throw new Error();
    } catch (error) {
      setErrorEmail('이미 사용중인 이메일입니다');
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
          onBlur={handleFocusoutEmail}
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
            onBlur={handleFocusoutPassword}
          />
          {togglePassword ? (
            <img
              src={eyeOn}
              alt="비밀번호 표시"
              onClick={handleClickPassword}
            />
          ) : (
            <img
              src={eyeOff}
              alt="비밀번호 숨기기"
              onClick={handleClickPassword}
            />
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
            onBlur={handleFocusoutPasswordCheck}
          />
          {togglePasswordCheck ? (
            <img
              src={eyeOn}
              alt="비밀번호 표시"
              onClick={handleClickPasswordCheck}
            />
          ) : (
            <img
              src={eyeOff}
              alt="비밀번호 숨기기"
              onClick={handleClickPasswordCheck}
            />
          )}
        </PassWord>
        {errorPasswordCheck && <p>{errorPasswordCheck}</p>}
      </div>
      <BtnBox>
        <button type="button" onClick={handleClickEmailCheck}>
          회원가입
        </button>
      </BtnBox>
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
          onBlur={handleFocusoutEmail}
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
            onBlur={handleFocusoutPassword}
          />
          {togglePassword ? (
            <img
              src={eyeOn}
              alt="비밀번호 표시"
              onClick={handleClickPassword}
            />
          ) : (
            <img
              src={eyeOff}
              alt="비밀번호 숨기기"
              onClick={handleClickPassword}
            />
          )}
        </PassWord>
        {errorPassword && <p>{errorPassword}</p>}
      </div>
      <BtnBox>
        <button type="button" onClick={handleClickLogin}>
          로그인
        </button>
      </BtnBox>
    </Container>
  );
}

export default UserInput;
