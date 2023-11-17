import {
  emailInput,
  passwordInput,
  emailError,
  passwordError,
  ERROR_MSG,
} from '../../constants/auth.js'

// 에러 메시지 표시
function showError(input, errorType, message) {
  input.classList.add('error')
  errorType.textContent = message
  errorType.classList.remove('hide')
}

// 에러 메시지 숨김
function hideError(input, errorType) {
  input.classList.remove('error')
  errorType.classList.add('hide')
}

// [로그인]로그인 확인 에러
function handleSigninError() {
  const { email, password } = ERROR_MSG

  showError(emailInput, emailError, email.check)
  showError(passwordInput, passwordError, password.check)
}

// [회원가입]이메일 중복 에러
function handleConflictEmailError() {
  const { email } = ERROR_MSG

  showError(emailInput, emailError, email.confirm)
}

// [API]에러 처리
function handleAuthenticationError(e) {
  console.error(`에러 발생: ${e.response.status} - ${e.message}`)
}

export {
  showError,
  hideError,
  handleSigninError,
  handleConflictEmailError,
  handleAuthenticationError,
}
