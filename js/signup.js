import { emailInput, passwordInput, passwordCheckInput, signBtn } from "./seletors.js";
import { signupEmailErrorMessage, passwordCheckErrorMessage, passwordErrorMessage, signupBtn } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signupEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  passwordCheckInput.addEventListener('focusout', passwordCheckErrorMessage);
  signBtn.addEventListener('click', signupBtn);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      signupBtn();
    }
  });
})