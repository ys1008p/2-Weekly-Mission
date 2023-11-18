import {
  signinForm,
  emailInput,
  passwordInput,
  eyeToggleButtons,
  FOLDER_PATH,
} from './constants/auth.js'

import {
  autoRedirectToPage,
  handlePasswordShowMode,
} from './utils/auth/common.js'

import {
  handleEmailFocusOut,
  handlePasswordFocusOut,
} from './utils/auth/validation.js'

import { handleSignin } from './utils/auth/api.js'

autoRedirectToPage(FOLDER_PATH)

const handleSubmit = (e) => {
  e.preventDefault()

  handleSignin(emailInput.value, passwordInput.value)
}

emailInput.addEventListener('focusout', handleEmailFocusOut)
passwordInput.addEventListener('focusout', handlePasswordFocusOut)
eyeToggleButtons.forEach((item) =>
  item.addEventListener('click', handlePasswordShowMode)
)
signinForm.addEventListener('submit', handleSubmit)
