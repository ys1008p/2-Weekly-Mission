import { inputEmail, inputPassword, submitFormatBtn, eyeBtn } from "./tags.js";
import {
  enterMessage,
  changePasswordVision,
} from "./signin_functions.js";

const inputTypeEmail = "이메일";
const inputTypePassword = "비밀번호";

inputEmail.addEventListener("focusout", (e) => enterMessage(e, inputTypeEmail, inputEmail, inputPassword ));
inputPassword.addEventListener("focusout", (e) => enterMessage(e, inputTypePassword, inputPassword, inputEmail ));
submitFormatBtn.addEventListener("click", (e) => {
  e.preventDefault();

  enterMessage(e, inputTypeEmail, inputEmail, inputPassword );
  enterMessage(e, inputTypePassword, inputPassword, inputEmail );
});
eyeBtn[0].addEventListener("click", changePasswordVision);
