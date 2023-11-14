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
  const { on, off } = PASSWORD_SHOW_MODE

  const currentType = this.previousElementSibling.type // default -> type: password /mode: off
  const showMode = currentType === off.type ? on : off

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

// [공통]이메일 유효성 검사
function validateEmail() {
  const { email } = ERROR_MSG
  const { empty, invalid } = email
  const value = emailInput.value

  if (!value) {
    showError(emailInput, emailError, empty)
    return false
  } else if (!isEmail(value)) {
    showError(emailInput, emailError, invalid)
    return false
  } else {
    hideError(emailInput, emailError)
    return true
  }
}

// [공통]패스워드 유효성 검사
function validatePassword() {
  const { password } = ERROR_MSG
  const { empty, invalid } = password
  const value = passwordInput.value

  if (!value) {
    showError(passwordInput, passwordError, empty)
    return false
  } else if (!isPassword(value)) {
    showError(passwordInput, passwordError, invalid)
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
  const { email, password } = ERROR_MSG

  showError(emailInput, emailError, email.check)
  showError(passwordInput, passwordError, password.check)
}

// [회원가입]이메일 확인
function checkEmail() {
  const { email } = ERROR_MSG
  const isValid = emailInput.value === AUTH_DATA.email

  if (isValid) {
    showError(emailInput, emailError, email.confrim)
  }
  return !isValid
}

// [회원가입]비밀번호 확인
function checkPassword() {
  const { password } = ERROR_MSG
  const isValid = passwordInput.value === passwordConfirmInput.value

  if (isValid) {
    hideError(passwordConfirmInput, passwordConfirmError)
  } else {
    showError(passwordConfirmInput, passwordConfirmError, password.confirm)
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
