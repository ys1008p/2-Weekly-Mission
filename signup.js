import {
  inputEmail,
  inputPassword,
  inputPasswordCheck,
  submitFormatBtn,
  eyeBtn,
} from "./tags.js";
import {
  enterEmailMessage,
  enterPasswordMessage,
  enterPasswordCheckMessage,
  changePasswordVision,
  emailValid,
  passwordValid,
  checkValid,
} from "./signup_functions.js";

inputEmail.addEventListener("focusout", enterEmailMessage);
inputPassword.addEventListener("focusout", enterPasswordMessage);
inputPasswordCheck.addEventListener("input", enterPasswordCheckMessage);
submitFormatBtn.addEventListener("click", (e) => {
  e.preventDefault();

  enterEmailMessage();
  enterPasswordMessage();
  enterPasswordCheckMessage();

 (emailValid && passwordValid && checkValid) && window.open("/folder", "_self");
});

eyeBtn.forEach((el) => el.addEventListener("click", changePasswordVision));
