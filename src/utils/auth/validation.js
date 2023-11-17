import {
  emailInput,
  passwordInput,
  emailError,
  passwordError,
  ERROR_MSG,
} from '../../constants/auth.js'

import { isEmail, isPassword } from './common.js'

import { showError, hideError } from './errorMessage.js'

// [유효성 검사]이메일
function validateEmail(value = '') {
  const { email } = ERROR_MSG

  if (!value) return { validResult: false, errorMessage: email.empty }

  if (!isEmail(value))
    return { validResult: false, errorMessage: email.invalid }

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

// [유효성 검사]패스워드
function validatePassword(value = '') {
  const { password } = ERROR_MSG

  if (!value) return { validResult: false, errorMessage: password.empty }

  if (!isPassword(value))
    return { validResult: false, errorMessage: password.invalid }

  return { validResult: true }
}

// [focusout 핸들러]패스워드
function handlePasswordFocusOut() {
  const password = passwordInput.value
  const { validResult, errorMessage } = validatePassword(password)

  validResult
    ? hideError(passwordInput, passwordError)
    : showError(passwordInput, passwordError, errorMessage)
}

export {
  validateEmail,
  handleEmailFocusOut,
  validatePassword,
  handlePasswordFocusOut,
}
