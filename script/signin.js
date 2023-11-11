import {
  signinForm,
  emailInput,
  passwordInput,
  eyeToggle,
} from './constants.js'

import {
  redirectToPage,
  isValidSignin,
  handleSigninError,
  activeShowMode,
  validateEmail,
  validatePassword,
} from './utils.js'

const handleSubmit = (e) => {
  e.preventDefault()
  isValidSignin() ? redirectToPage() : handleSigninError()
}

emailInput.addEventListener('focusout', validateEmail)
passwordInput.addEventListener('focusout', validatePassword)
eyeToggle[0].addEventListener('click', activeShowMode)
signinForm.addEventListener('submit', handleSubmit)
