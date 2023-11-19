import { emailInput, passwordInput, signinBtn, eyeBtn, EMAIL_ALREADY_USED, PASSWORD_ALREADY_USED } from "./consts.js";
import { resetEmailInput, resetPasswordInput, signInEmailCheck, passwordCheck, signInError, eyeOnOff } from "./functions.js";

// 로그인 유효성 검사
function signIncheck(e) {
  e.preventDefault();
  if (emailInput.value === EMAIL_ALREADY_USED && passwordInput.value === PASSWORD_ALREADY_USED) {
    location.href = "/folder.html";
  } else {
    signInError();
  }
}

emailInput.addEventListener("focusout", signInEmailCheck);
emailInput.addEventListener("focusin", resetEmailInput);
passwordInput.addEventListener("focusout", passwordCheck);
passwordInput.addEventListener("focusin", resetPasswordInput);
signinBtn.addEventListener("click", signIncheck);
eyeBtn[0].addEventListener("click", eyeOnOff);





