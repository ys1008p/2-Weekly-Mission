import { emailInput, passwordInput, passwordConfirmInput, signupBtn, eyeBtn } from "./consts.js";
import { resetEmailInput, resetPasswordInput, signUpEmailCheck, passwordCheck, passwordConfirmCheck, eyeOnOff } from "./functions.js";
import { signUpEmailCheckAPI, signUpAPI } from "./api.js";

// 회원가입 유효성 검사
function signUpcheck(e) {
  e.preventDefault();
  signUpEmailCheck();
  passwordCheck();
  passwordConfirmCheck();
  signUpEmailCheckAPI();
  signUpAPI();
}

if (localStorage.getItem("accessToken")) {
  location.href = "./folder.html";
}

// 이벤트 리스너
emailInput.addEventListener("focusout", signUpEmailCheck);
emailInput.addEventListener("focusin", resetEmailInput);
passwordInput.addEventListener("focusout", passwordCheck);
passwordInput.addEventListener("focusin", resetPasswordInput);
passwordConfirmInput.addEventListener("focusout", passwordConfirmCheck);
passwordConfirmInput.addEventListener("focusin", resetPasswordInput);
signupBtn.addEventListener("click", signUpcheck);
eyeBtn[0].addEventListener("click", eyeOnOff);
eyeBtn[1].addEventListener("click", eyeOnOff);