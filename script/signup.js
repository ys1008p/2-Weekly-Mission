import {
  signupForm,
  emailInput,
  passwordInput,
  passwordConfirmInput,
  eyeToggle,
} from './constants.js'

import {
  redirectToPage,
  activeShowMode,
  validateEmail,
  validatePassword,
  checkEmail,
  checkPassword,
  isValidSignup,
} from './utils.js'

const handleSubmit = (e) => {
  e.preventDefault()
  isValidSignup() && redirectToPage()
}

emailInput.addEventListener('focusout', validateEmail)
emailInput.addEventListener('focusout', checkEmail)
passwordInput.addEventListener('focusout', validatePassword)
passwordConfirmInput.addEventListener('focusout', checkPassword)
eyeToggle.forEach((item) => item.addEventListener('click', activeShowMode))
signupForm.addEventListener('submit', handleSubmit)
