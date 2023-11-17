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
  isValidNewUser,
} from "./signup_functions.js";

inputEmail.addEventListener("focusout", enterEmailMessage);
inputPassword.addEventListener("focusout", enterPasswordMessage);
inputPasswordCheck.addEventListener("input", enterPasswordCheckMessage);
submitFormatBtn.addEventListener("click", async (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  e.preventDefault();

  enterEmailMessage();
  enterPasswordMessage();
  enterPasswordCheckMessage();

  if (emailValid && passwordValid && checkValid) {
    const responseStatus = await isValidNewUser(emailValue, passwordValue);
    if (responseStatus === 200) {
      window.open("/folder", "_self");
    }
  }
});

eyeBtn.forEach((el) => el.addEventListener("click", changePasswordVision));
