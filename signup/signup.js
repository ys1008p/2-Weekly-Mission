import {
  inputEmail,
  inputPassword,
  inputPasswordCheck,
  submitFormatBtn,
  eyeBtn,
} from "../tags.js";
import {
  enterEmailMessage,
  enterPasswordMessage,
  enterPasswordCheckMessage,
  changePasswordVision,
  emailValid,
  passwordValid,
  checkValid,
  isValidAccess,
} from "./signup_functions.js";

const accessToken = localStorage.getItem("accessToken");
if (accessToken) window.open("/folder", "_self");

inputEmail.addEventListener("focusout", enterEmailMessage);
inputPassword.addEventListener("focusout", enterPasswordMessage);
inputPasswordCheck.addEventListener("input", enterPasswordCheckMessage);
eyeBtn.forEach((el) => el.addEventListener("click", changePasswordVision));

submitFormatBtn.addEventListener("click", async (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  const tryAccessUser = {
    email: emailValue,
    password: passwordValue,
  };
  const local = "sign-up";

  e.preventDefault();

  enterEmailMessage();
  enterPasswordMessage();
  enterPasswordCheckMessage();

  if (emailValid && passwordValid && checkValid) {
    const responseStatus = await isValidAccess(tryAccessUser, local);
    if (responseStatus === 200) {
      window.open("/folder", "_self");
    }
  }
});
