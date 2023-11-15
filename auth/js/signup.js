import { emailInput, passwordInput, passwordCheckInput, signBtn, eyeBtns, inputTags } from "./seletors.js";
import { signupEmailErrorMessage, passwordCheckErrorMessage, passwordErrorMessage, signupBtn, toggleVisibility } from "./signFunctions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signupEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  passwordCheckInput.addEventListener('focusout', passwordCheckErrorMessage);
  signBtn.addEventListener('click', signupBtn);
  eyeBtns.forEach(eyeBtn => {
    eyeBtn.addEventListener('click', toggleVisibility);
  });
  inputTags.forEach(inputTag => {
    inputTag.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        signupBtn();
      }
    })
  });
})
