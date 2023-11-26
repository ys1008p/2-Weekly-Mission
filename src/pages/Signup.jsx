import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SocialLogin, importImg } from '../store/common';

import { Button } from '../components/common/Button';

const Signup = () => {
  return (
    <div className='wrapper bg-blue'>
      <Helmet>
        <title>회원가입 | Linkbrary</title>
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
              <span>이미 회원이신가요?</span>
              <Link to={'/signin'} className='login-link'>
                로그인 하기
              </Link>
            </div>
          </header>

          <main className='form-inner'>
            <form action='/' method='post' className='signup-form'>
              <fieldset>
                <legend>Create Linkbrary Account</legend>

                <div className='signup-email'>
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
                      />
                    </div>
                  </div>
                  <div className='error-msg error-email hide'></div>
                </div>

                <div className='signup-password'>
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
                  <div className='error-msg error-password hide'></div>
                </div>

                <div className='verify-password'>
                  <div className='input-group'>
                    <label className='input-title' htmlFor='verify-password'>
                      비밀번호 확인
                    </label>
                    <div className='input-box'>
                      <input
                        id='verify-password'
                        name='verify-password'
                        type='password'
                        placeholder='비밀번호 확인'
                        maxLength='15'
                        required
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
                  <div className='error-msg error-verify-password hide'></div>
                </div>

                <Button text='회원가입' type='submit' className='btn-signup btn-primary' />
              </fieldset>
            </form>

            <div className='social-login'>
              <span className='social-login-title'>다른 방식으로 가입하기</span>
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

export default Signup;
