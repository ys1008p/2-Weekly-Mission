import { emailInput, passwordInput, passwordConfirmInput, signupBtn, eyeBtn, EMAIL_REGEX, PASSWORD_REGEX } from "./consts.js";
import { resetEmailInput, resetPasswordInput, signUpEmailCheck, passwordCheck, passwordConfirmCheck, eyeOnOff } from "./functions.js";

// 회원가입 유효성 검사
function signUpcheck(e) {
  e.preventDefault();
  if (!EMAIL_REGEX.test(emailInput.value)) {
    signUpEmailCheck();
  } else if (!PASSWORD_REGEX.test(passwordInput.value)) {
    passwordCheck();
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmCheck();
  } else {
    location.href = "./folder.html";
  }
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




