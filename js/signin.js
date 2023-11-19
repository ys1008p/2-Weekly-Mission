import { emailInput, passwordInput, signinBtn, eyeBtn } from "./consts.js";
import { resetEmailInput, resetPasswordInput, signInEmailCheck, passwordCheck, eyeOnOff } from "./functions.js";
import { signInAPI } from "./api.js";

// 로그인 유효성 검사
function signIncheck(e) {
  e.preventDefault();
  signInAPI();
}

if (localStorage.getItem("accessToken")) {
  location.href = "./folder.html";
}

emailInput.addEventListener("focusout", signInEmailCheck);
emailInput.addEventListener("focusin", resetEmailInput);
passwordInput.addEventListener("focusout", passwordCheck);
passwordInput.addEventListener("focusin", resetPasswordInput);
signinBtn.addEventListener("click", signIncheck);
eyeBtn[0].addEventListener("click", eyeOnOff);





