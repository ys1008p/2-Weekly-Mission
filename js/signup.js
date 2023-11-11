import { emailInput, passwordInput, passwordCheckInput, emailError, passwordError, signBtn } from "./seletors.js";
import { emailErrorMessage, passwordCheckErrorMessage, passwordErrorMessage } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', emailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  passwordCheckInput.addEventListener('focusout', passwordCheckErrorMessage);
})