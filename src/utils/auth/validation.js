import {
  emailInput,
  passwordInput,
  passwordConfirmInput,
  emailError,
  passwordError,
  passwordConfirmError,
  ERROR_MSG,
} from '../../constants/auth.js'

import { isEmail, isPassword } from './common.js'

import { showError, hideError } from './errorMessage.js'

import { emailConflictCheck } from './api.js'

// [유효성 검사]이메일
function validateEmail(value = '', api = '') {
  const { email } = ERROR_MSG

  if (!value) return { validResult: false, errorMessage: email.empty }

  if (!isEmail(value))
    return { validResult: false, errorMessage: email.invalid }

  if (api === 'post') emailConflictCheck(value)

  return { validResult: true }
}

// [유효성 검사]패스워드
function validatePassword(value = '') {
  const { password } = ERROR_MSG

  if (!value) return { validResult: false, errorMessage: password.empty }

  if (!isPassword(value))
    return { validResult: false, errorMessage: password.invalid }

  return { validResult: true }
}

// [유효성 검사]패스워드 일치
function validatePasswordConfirm(value = '') {
  const { password } = ERROR_MSG

  if (value !== passwordConfirmInput.value)
    return { validResult: false, errorMessage: password.confirm }

  return { validResult: true }
}

// [focusout 핸들러]이메일
function handleEmailFocusOut() {
  const email = emailInput.value
  const { validResult, errorMessage } = validateEmail(email)

  validResult
    ? hideError(emailInput, emailError)
    : showError(emailInput, emailError, errorMessage)
}

// [focusout 핸들러]이메일 중복
const handleCheckEmailFocusOut = () => {
  const email = emailInput.value
  const { validResult, errorMessage } = validateEmail(email, 'post')

  validResult
    ? hideError(emailInput, emailError)
    : showError(emailInput, emailError, errorMessage)
}

// [focusout 핸들러]패스워드
function handlePasswordFocusOut() {
  const password = passwordInput.value
  const { validResult, errorMessage } = validatePassword(password)

  validResult
    ? hideError(passwordInput, passwordError)
    : showError(passwordInput, passwordError, errorMessage)
}

// [focusout 핸들러]패스워드 일치
function handlePasswordConfirm() {
  const password = passwordInput.value
  const { validResult, errorMessage } = validatePasswordConfirm(password)

  validResult
    ? hideError(passwordConfirmInput, passwordConfirmError)
    : showError(passwordConfirmInput, passwordConfirmError, errorMessage)
}

// [유효성 검사]회원가입 성공
function isValidSignup() {
  const isValidEmail = validateEmail(emailInput.value)
  const isValidPassword = validatePassword(passwordInput.value)
  const isValidPasswordConfirm = validatePasswordConfirm(passwordInput.value)

  return (
    isValidEmail.validResult &&
    isValidPassword.validResult &&
    isValidPasswordConfirm.validResult
  )
}

export {
  handleEmailFocusOut,
  handlePasswordFocusOut,
  handleCheckEmailFocusOut,
  handlePasswordConfirm,
  isValidSignup,
}
