import {
  signupForm,
  emailInput,
  passwordInput,
  passwordConfirmInput,
  eyeToggleButtons,
  FOLDER_PATH,
} from './constants/auth.js'

import {
  autoRedirectToPage,
  handlePasswordShowMode,
} from './utils/auth/common.js'

import {
  handlePasswordFocusOut,
  handleCheckEmailFocusOut,
  handlePasswordConfirm,
  isValidSignup,
} from './utils/auth/validation.js'

import { handleSignup } from './utils/auth/api.js'

autoRedirectToPage(FOLDER_PATH)

function handleSubmit(e) {
  e.preventDefault()

  isValidSignup() && handleSignup(emailInput.value, passwordInput.value)
}

emailInput.addEventListener('focusout', handleCheckEmailFocusOut)
passwordInput.addEventListener('focusout', handlePasswordFocusOut)
passwordConfirmInput.addEventListener('focusout', handlePasswordConfirm)
eyeToggleButtons.forEach((item) =>
  item.addEventListener('click', handlePasswordShowMode)
)
signupForm.addEventListener('submit', handleSubmit)
