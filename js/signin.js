import { emailInput, passwordInput, emailError, passwordError, signBtn } from "./seletors.js";
import { signinEmailErrorMessage, passwordErrorMessage } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signinEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  
})