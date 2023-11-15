import { emailInput, passwordInput, inputTags, signBtn, eyeBtns } from "./seletors.js";
import { signinEmailErrorMessage, passwordErrorMessage, signinBtn, toggleVisibility } from "./signFunctions.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signinEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  signBtn.addEventListener('click', signinBtn);
  eyeBtns.forEach(eyeBtn => {
    eyeBtn.addEventListener('click', toggleVisibility);
  });
  inputTags.forEach(inputTag => {
    inputTag.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        signinBtn();
      }
    })
  });
})
