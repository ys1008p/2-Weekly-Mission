import { inputEmail, inputPassword, submitFormatBtn, eyeBtn } from "./tags.js";
import {
  enterMessage,
  changePasswordVision,
  isExistUser,
} from "./signin_functions.js";

inputEmail.addEventListener("focusout", ({ target, type }) => enterMessage(target, type));
inputPassword.addEventListener("focusout", ({ target, type }) => enterMessage(target, type));
submitFormatBtn.addEventListener("click", (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  e.preventDefault();

  const promise = isExistUser(emailValue, passwordValue);

  const getData = () => {
    promise.then((promiseResult) => {

      if (promiseResult === 200) {
        window.open("/folder", "_self");
      } else {
        enterMessage(inputEmail, e.type)
        enterMessage(inputPassword, e.type)
      }
    })
  }

  getData();
  
});
eyeBtn[0].addEventListener("click", changePasswordVision);