import {
  emailInput,
  passwordInput,
  passwordConfirmInput,
  emailError,
  passwordError,
  passwordConfirmError,
  REGEX,
  AUTH_DATA,
  ERROR_MSG,
  PASSWORD_SHOW_MODE,
} from './constants.js'

// [공통]에러 메시지 표시
function showError(input, errorType, message) {
  input.classList.add('error')
  errorType.textContent = message
  errorType.classList.remove('hide')
}

// [공통]에러 메시지 숨김
function hideError(input, errorType) {
  input.classList.remove('error')
  errorType.classList.add('hide')
}

// [공통]비밀번호 보기, 숨기기 모드
function activeShowMode() {
  const currentType = this.previousElementSibling.type // default -> type: password /mode: off
  const showMode =
    currentType === PASSWORD_SHOW_MODE.off.type
      ? PASSWORD_SHOW_MODE.on
      : PASSWORD_SHOW_MODE.off

  this.previousElementSibling.type = showMode.type
  this.setAttribute('aria-label', showMode.label)
  this.setAttribute('aria-checked', showMode.checked)
  this.children[0].setAttribute('src', showMode.imgSrc)
}

// [정규식]이메일 검사
function isEmail(email) {
  return email ? REGEX.email.test(email) : false
}

// [정규식]비밀번호 검사
function isPassword(password) {
  return password ? REGEX.password.test(password) : false
}

// [공통]페이지 이동
function redirectToPage() {
  location.href = '/folder.html'
}

// [로그인]이메일 유효성 검사
function validateEmail() {
  const email = emailInput.value
  if (!email) {
    showError(emailInput, emailError, ERROR_MSG.email.empty)
    return false
  } else if (!isEmail(email)) {
    showError(emailInput, emailError, ERROR_MSG.email.invalid)
    return false
  } else {
    hideError(emailInput, emailError)
    return true
  }
}

// [로그인]패스워드 유효성 검사
function validatePassword() {
  const password = passwordInput.value
  if (!password) {
    showError(passwordInput, passwordError, ERROR_MSG.password.empty)
    return false
  } else if (!isPassword(password)) {
    showError(passwordInput, passwordError, ERROR_MSG.password.invalid)
    return false
  } else {
    hideError(passwordInput, passwordError)
    return true
  }
}

// [로그인]로그인 검사
function isValidSignin() {
  return (
    emailInput.value === AUTH_DATA.email &&
    passwordInput.value === AUTH_DATA.password
  )
}
// [로그인]로그인 에러
function handleSigninError() {
  showError(emailInput, emailError, ERROR_MSG.email.check)
  showError(passwordInput, passwordError, ERROR_MSG.password.check)
}

// [회원가입]이메일 확인
function checkEmail() {
  const isValid = emailInput.value === AUTH_DATA.email

  if (isValid) {
    showError(emailInput, emailError, ERROR_MSG.email.confrim)
  }
  return !isValid
}

// [회원가입]비밀번호 확인
function checkPassword() {
  const isValid = passwordInput.value === passwordConfirmInput.value

  if (isValid) {
    hideError(passwordConfirmInput, passwordConfirmError)
  } else {
    showError(
      passwordConfirmInput,
      passwordConfirmError,
      ERROR_MSG.password.confirm
    )
  }
  return isValid
}

// [회원가입]회원가입 검사
function isValidSignup() {
  return (
    validateEmail() && checkEmail() && validatePassword() && checkPassword()
  )
}

export {
  showError,
  hideError,
  redirectToPage,
  isValidSignin,
  handleSigninError,
  activeShowMode,
  validateEmail,
  validatePassword,
  checkEmail,
  checkPassword,
  isValidSignup,
}
