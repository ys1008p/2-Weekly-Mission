import { inputEmail, inputPassword, inputPasswordCheck, btn, eyeBtn } from "./tags.js";
import { enterEmailMessage, enterPasswordMessage, enterPasswordCheckMessage, changePasswordVision, emailValid, passwordValid, checkValid } from "./signup_functions.js";

inputEmail.addEventListener('focusout', enterEmailMessage);
inputPassword.addEventListener('focusout', enterPasswordMessage);
inputPasswordCheck.addEventListener('input', enterPasswordCheckMessage);
btn.addEventListener('click', e => {
  e.preventDefault();

  enterEmailMessage(e);
  enterPasswordMessage(e);
  enterPasswordCheckMessage(e);

  if (emailValid && passwordValid && checkValid) {
    window.open("/folder", "_self");
    emailValid, passwordValid, checkValid = false;
  }
});

eyeBtn.forEach(el => el.addEventListener('click', changePasswordVision));
