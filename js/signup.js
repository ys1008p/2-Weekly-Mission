import { emailInput, passwordInput, passwordCheckInput, signBtn, eyeBtn } from "./seletors.js";
import { signupEmailErrorMessage, passwordCheckErrorMessage, passwordErrorMessage, signupBtn, toggleVisibility } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signupEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  passwordCheckInput.addEventListener('focusout', passwordCheckErrorMessage);
  signBtn.addEventListener('click', signupBtn);
  eyeBtn.addEventListener('click', toggleVisibility);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      signupBtn();
    }
  });
})