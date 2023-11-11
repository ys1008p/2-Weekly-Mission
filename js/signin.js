import { emailInput, passwordInput, emailError, passwordError, signBtn } from "./seletors.js";
import { emailErrorMessage, passwordErrorMessage } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', emailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  
})