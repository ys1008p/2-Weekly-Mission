import { 
  emailInput, 
  passwordInput, 
  passwordCheckInput, 
  signBtn, 
  eyeBtns, 
  inputTags,
} from "./util/seletors.js";
import { 
  signupEmailErrorMessage, 
  passwordCheckErrorMessage, 
  passwordErrorMessage, 
  toggleVisibility,
} from "./util/signFunctions.js";
import { 
  checkDuplicateEmail, 
  signUpAndRegister, 
} from "./util/api.js";

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('focusout', signupEmailErrorMessage);
  emailInput.addEventListener('focusout', checkDuplicateEmail);
  passwordInput.addEventListener('focusout', passwordErrorMessage);
  passwordCheckInput.addEventListener('focusout', passwordCheckErrorMessage);
  signBtn.addEventListener('click', signUpAndRegister);
  inputTags.forEach(inputTag => {
    inputTag.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        signUpAndRegister();
      }
    });
  });
  eyeBtns.forEach(eyeBtn => {
    eyeBtn.addEventListener('click', toggleVisibility);
  });
})
