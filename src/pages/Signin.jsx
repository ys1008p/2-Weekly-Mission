import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { SocialLogin, importImg } from '../store/common';
import { ERROR_MSG } from '../store/auth';

import { signin } from '../utils/login/api';
import { isAccessToken } from '../utils/login/api';
import { validateEmail, validatePassword } from '../utils/login/validation';

import { Button } from '../components/common/Button';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (isAccessToken()) {
      navigate('/', { replace: true });
    }
  }, []);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onBlurEmail = () => {
    if (!email) {
      return setEmailError(ERROR_MSG.email.empty);
    }
    if (!validateEmail(email)) {
      return setEmailError(ERROR_MSG.email.invalid);
    }
    return setEmailError('');
  };

  const onBlurPassword = () => {
    if (!password) {
      return setPasswordError(ERROR_MSG.password.empty);
    }
    if (!validatePassword(password)) {
      return setPasswordError(ERROR_MSG.password.invalid);
    }
    return setPasswordError('');
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();

    const { emailError, passwordError } = await signin(email, password);

    if (!emailError && !passwordError) {
      setEmailError('');
      setPasswordError('');
    } else {
      setEmailError(emailError);
      setPasswordError(passwordError);
    }
  };

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
                <img src={importImg.logo} alt='linkbrary-logo' />
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
                        name='id'
                        type='email'
                        placeholder='이메일'
                        maxLength='30'
                        required
                        onChange={onChangeEmail}
                        onBlur={onBlurEmail}
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
                        onChange={onChangePassword}
                        onBlur={onBlurPassword}
                      />
                      <button
                        type='button'
                        className='btn-password-toggle'
                        aria-checked='false'
                        aria-label='비밀번호 숨기기'
                        role='switch'
                      >
                        <img src={importImg.auth.eyeHideIcon} alt='비밀번호 숨기기' />
                      </button>
                    </div>
                  </div>
                  <div className='error-msg error-password hide'>{passwordError}</div>
                </div>

                <Button
                  text='로그인'
                  type='submit'
                  className={'btn-signin'}
                  onClick={onClickSubmit}
                  disabled={false}
                />
              </fieldset>
            </form>

            <div className='social-login'>
              <span className='social-login-title'>소셜 로그인</span>
              <ul className='social-login-list'>
                {SocialLogin.map((item) => (
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
