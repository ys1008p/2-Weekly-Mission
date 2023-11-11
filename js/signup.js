import { emailInput, passwordInput, passwordCheckInput, emailError, passwordError, signBtn } from "./seletors.js";
import { signupEmailErrorMessage, passwordCheckErrorMessage, passwordErrorMessage } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signupEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  passwordCheckInput.addEventListener('focusout', passwordCheckErrorMessage);
})