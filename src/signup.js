import {
  signupForm,
  emailInput,
  passwordInput,
  passwordConfirmInput,
  emailError,
  passwordConfirmError,
  eyeToggleButtons,
  AUTH_DATA,
  FOLDER_PATH,
  ERROR_MSG,
} from './constants/auth.js'

import {
  isEmail,
  redirectToPage,
  handlePasswordShowMode,
} from './utils/auth/common.js'

import {
  validatePassword,
  handlePasswordFocusOut,
} from './utils/auth/validation.js'

import { TOKEN } from './utils/auth/axiosInstance.js'

import { handleSignup, emailConflictCheck } from './utils/auth/api.js'

import { showError, hideError } from './utils/auth/errorMessage.js'

if (TOKEN) redirectToPage(FOLDER_PATH)

// [유효성 검사]이메일
function validateEmail(value = '') {
  const { email } = ERROR_MSG

  if (!value) return { validResult: false, errorMessage: email.empty }

  if (!isEmail(value))
    return { validResult: false, errorMessage: email.invalid }

  if (value === AUTH_DATA.email)
    return { validResult: false, errorMessage: email.confirm }

  return { validResult: true }
}

// [focusout 핸들러]이메일
const handleEmailFocusOut = async () => {
  const email = emailInput.value
  const { validResult, errorMessage } = validateEmail(email)

  await emailConflictCheck(email)

  validResult
    ? hideError(emailInput, emailError)
    : showError(emailInput, emailError, errorMessage)
}

// [유효성 검사]패스워드 일치
function validatePasswordConfirm(value = '') {
  const { password } = ERROR_MSG

  if (value !== passwordConfirmInput.value)
    return { validResult: false, errorMessage: password.confirm }

  return { validResult: true }
}

// [focusout 핸들러]패스워드 일치
function handlePasswordConfirm() {
  const password = passwordInput.value
  const { validResult, errorMessage } = validatePasswordConfirm(password)

  validResult
    ? hideError(passwordConfirmInput, passwordConfirmError)
    : showError(passwordConfirmInput, passwordConfirmError, errorMessage)
}

// [유효성 검사]회원가입
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

// [submit 핸들러]회원가입
const handleSubmit = async (e) => {
  e.preventDefault()

  if (isValidSignup()) await handleSignup(emailInput.value, passwordInput.value)
}

emailInput.addEventListener('focusout', handleEmailFocusOut)
passwordInput.addEventListener('focusout', handlePasswordFocusOut)
passwordConfirmInput.addEventListener('focusout', handlePasswordConfirm)
eyeToggleButtons.forEach((item) =>
  item.addEventListener('click', handlePasswordShowMode)
)
signupForm.addEventListener('submit', handleSubmit)
