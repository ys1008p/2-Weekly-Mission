import { emailInput, passwordInput, signBtn, eyeBtn } from "./seletors.js";
import { signinEmailErrorMessage, passwordErrorMessage, signinBtn, toggleVisibility } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signinEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  signBtn.addEventListener('click', signinBtn);
  eyeBtn.addEventListener('click', toggleVisibility);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      signinBtn();
    }
  });
})