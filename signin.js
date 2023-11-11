import { inputEmail, inputPassword, btn, eyeBtn } from "./tags.js";
import { enterEmailMessage, enterPasswordMessage, changePasswordVision } from "./signin_functions.js";

inputEmail.addEventListener('focusout', enterEmailMessage);
inputPassword.addEventListener('focusout', enterPasswordMessage);
btn.addEventListener('click', function(e) {
  e.preventDefault();
  enterEmailMessage(e);
  enterPasswordMessage(e);
});
eyeBtn[0].addEventListener('click', changePasswordVision);