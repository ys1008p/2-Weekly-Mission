import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { signin } from '../utils/login/api';
import { isAccessToken } from '../utils/login/api';
import { validateEmail, validatePassword } from '../utils/login/validation';

import { SOCIAL_LOGIN, ICON } from '../store/common';
import { ERROR_MSG } from '../store/auth';

import { Button } from '../components/common/Button';

const Signin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (isAccessToken()) {
      navigate('/', { replace: true });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((...prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailFocusOut = () => {
    if (!inputValue.email) {
      return setEmailError(ERROR_MSG.email.empty);
    }
    if (!validateEmail(inputValue.email)) {
      return setEmailError(ERROR_MSG.email.invalid);
    }
    return setEmailError('');
  };

  const handlePasswordFocusOut = () => {
    if (!inputValue.password) {
      return setPasswordError(ERROR_MSG.password.empty);
    }
    if (!validatePassword(inputValue.password)) {
      return setPasswordError(ERROR_MSG.password.invalid);
    }
    return setPasswordError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { emailError, passwordError } = await signin(
      inputValue.email,
      inputValue.password
    );

    if (!emailError && !passwordError) {
      setEmailError('');
      setPasswordError('');
    } else {
      setEmailError(emailError);
      setPasswordError(passwordError);
    }
  };

  const { logo, eye } = ICON;

  return (
    <div className='wrapper bg-blue'>
      <Helmet>
        <title>로그인 | Linkbrary</title>
      </Helmet>

      <div className='container'>
        <div className='form'>
          <header className='form-header'>
            <h1 className='logo'>
              <Link to={'/'}>
                <img src={logo.url} alt={logo.alt} />
              </Link>
            </h1>
            <div className='info-user'>
              <span>회원이 아니신가요?</span>
              <Link to={'/signup'} className='create-link'>
                회원 가입하기
              </Link>
            </div>
          </header>

          <main className='form-inner'>
            <form action='/landing' method='post' className='login-form'>
              <fieldset>
                <legend>Login Linkbrary Account</legend>

                <div className='login-email'>
                  <div className='input-group'>
                    <label className='input-title' htmlFor='email'>
                      이메일
                    </label>
                    <div className='input-box'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='이메일'
                        maxLength='30'
                        required
                        onChange={handleInputChange}
                        onBlur={handleEmailFocusOut}
                      />
                    </div>
                  </div>
                  <div className='error-msg error-email hide'>{emailError}</div>
                </div>

                <div className='login-password'>
                  <div className='input-group'>
                    <label className='input-title' htmlFor='password'>
                      비밀번호
                    </label>
                    <div className='input-box'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='비밀번호'
                        maxLength='15'
                        required
                        onChange={handleInputChange}
                        onBlur={handlePasswordFocusOut}
                      />
                      <button
                        type='button'
                        className='btn-password-toggle'
                        aria-checked='false'
                        aria-label='비밀번호 숨기기'
                        role='switch'
                      >
                        <img src={eye.default.url} alt={eye.default.alt} />
                      </button>
                    </div>
                  </div>
                  <div className='error-msg error-password hide'>{passwordError}</div>
                </div>

                <Button
                  text='로그인'
                  type='submit'
                  className={'btn-signin'}
                  onClick={handleSubmit}
                  disabled={false}
                />
              </fieldset>
            </form>

            <div className='social-login'>
              <span className='social-login-title'>소셜 로그인</span>
              <ul className='social-login-list'>
                {SOCIAL_LOGIN.map((item) => (
                  <li key={item.id} className='social-login-item'>
                    <a href={item.url}>
                      <img src={item.src} alt={item.alt} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signin;
