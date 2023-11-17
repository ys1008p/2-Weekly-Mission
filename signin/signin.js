import { inputEmail, inputPassword, submitFormatBtn, eyeBtn } from "../tags.js";
import {
  enterMessage,
  changePasswordVision,
  isValidAccess,
} from "./signin_functions.js";

const accessToken = localStorage.getItem("accessToken");
if (accessToken) window.open("/folder", "_self");

inputEmail.addEventListener("focusout", ({ target, type }) =>
  enterMessage(target, type),
);
inputPassword.addEventListener("focusout", ({ target, type }) =>
  enterMessage(target, type),
);
eyeBtn[0].addEventListener("click", changePasswordVision);

submitFormatBtn.addEventListener("click", async (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  const tryAccessUser = {
    email: emailValue,
    password: passwordValue,
  };
  const local = "sign-in";

  e.preventDefault();

  const responseStatus = await isValidAccess(tryAccessUser, local);

  if (responseStatus === 200) {
    window.open("/folder", "_self");
  } else {
    enterMessage(inputEmail, e.type);
    enterMessage(inputPassword, e.type);
  }
});
