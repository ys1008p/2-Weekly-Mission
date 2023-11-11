import { emailInput, passwordInput, signBtn } from "./seletors.js";
import { signinEmailErrorMessage, passwordErrorMessage, signinBtn } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signinEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  signBtn.addEventListener('click', signinBtn);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      signinBtn();
    }
  });
})