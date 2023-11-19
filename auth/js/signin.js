import { 
  emailInput, 
  passwordInput, 
  inputTags, 
  signBtn, 
  eyeBtns, 
} from "./util/seletors.js";
import { 
  signinEmailErrorMessage, 
  passwordErrorMessage, 
  toggleVisibility, 
} from "./util/signFunctions.js";
import { signInAndRedirect } from "./util/api.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signinEmailErrorMessage);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  signBtn.addEventListener('click', signInAndRedirect);
  inputTags.forEach(inputTag => {
    inputTag.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        signInAndRedirect();
      }
    });
  });
  eyeBtns.forEach(eyeBtn => {
    eyeBtn.addEventListener('click', toggleVisibility);
  });
})
