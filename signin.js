import { inputEmail, inputPassword, submitFormatBtn, eyeBtn } from "./tags.js";
import {
  enterMessage,
  changePasswordVision,
  isExistUser,
} from "./signin_functions.js";

inputEmail.addEventListener("focusout", ({ target, type }) =>
  enterMessage(target, type),
);
inputPassword.addEventListener("focusout", ({ target, type }) =>
  enterMessage(target, type),
);
submitFormatBtn.addEventListener("click", async (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  e.preventDefault();
  
  const responseStatus = await isExistUser(emailValue, passwordValue);

  if (responseStatus === 200) {
    window.open("/folder", "_self");
  } else {
    enterMessage(inputEmail, e.type);
    enterMessage(inputPassword, e.type);
  }
});
eyeBtn[0].addEventListener("click", changePasswordVision);
