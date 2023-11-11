const signinForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')
const emailInput = document.querySelector('input[name="id"]')
const passwordInput = document.querySelector('input[name="password"]')
const passwordConfirmInput = document.querySelector(
  'input[name="verify-password"]'
)
const emailError = document.querySelector('.error-msg.error-email')
const passwordError = document.querySelector('.error-msg.error-password')
const passwordConfirmError = document.querySelector('.error-verify-password')
const eyeToggle = document.querySelectorAll('.btn-password-toggle')

// 정규식
const REGEX = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,
}

// 회원 정보
const AUTH_DATA = {
  email: 'test@codeit.com',
  password: 'codeit101',
}

// 에러 메시지
const ERROR_MSG = {
  email: {
    empty: '이메일을 입력해주세요.',
    invalid: '올바른 이메일 주소가 아닙니다.',
    check: '이메일을 확인해주세요.',
    confrim: '이미 사용 중인 이메일입니다.',
  },
  password: {
    empty: '비밀번호를 입력해주세요.',
    invalid: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    check: '비밀번호를 확인해주세요.',
    confirm: '비밀번호가 일치하지 않아요.',
  },
}

// 비밀번호 보기, 숨기기 모드
const PASSWORD_SHOW_MODE = {
  on: {
    type: 'text',
    checked: 'true',
    label: '비밀번호 보기',
    imgSrc: './assets/images/icon/eye-on.svg',
  },
  off: {
    type: 'password',
    checked: 'false',
    label: '비밀번호 숨기기',
    imgSrc: './assets/images/icon/eye-off.svg',
  },
}

export {
  signinForm,
  signupForm,
  emailInput,
  passwordInput,
  passwordConfirmInput,
  emailError,
  passwordError,
  passwordConfirmError,
  eyeToggle,
  REGEX,
  AUTH_DATA,
  ERROR_MSG,
  PASSWORD_SHOW_MODE,
}
