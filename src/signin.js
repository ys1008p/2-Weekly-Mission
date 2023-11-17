import {
  signinForm,
  emailInput,
  passwordInput,
  eyeToggleButtons,
  FOLDER_PATH,
} from './constants/auth.js'

import { redirectToPage, handlePasswordShowMode } from './utils/auth/common.js'

import {
  handleEmailFocusOut,
  handlePasswordFocusOut,
} from './utils/auth/validation.js'

import { TOKEN } from './utils/auth/axiosInstance.js'

import { handleSignin } from './utils/auth/api.js'

if (TOKEN) redirectToPage(FOLDER_PATH)

const handleSubmit = async (e) => {
  e.preventDefault()
  await handleSignin(emailInput.value, passwordInput.value)
}

emailInput.addEventListener('focusout', handleEmailFocusOut)
passwordInput.addEventListener('focusout', handlePasswordFocusOut)
eyeToggleButtons.forEach((item) =>
  item.addEventListener('click', handlePasswordShowMode)
)
signinForm.addEventListener('submit', handleSubmit)
