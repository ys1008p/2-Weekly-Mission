import { emailInput, passwordInput, passwordConfirmInput, signupBtn, errorMessageDiv, eyeBtn, EMAIL_REGEX, EMAIL_ALREADY_USED, PASSWORD_REGEX } from "./consts.js";
import { resetEmailInput, passwordCheck, resetPasswordInput, eyeOnOff } from "./functions.js";

// 이벤트 핸들러
function emailCheck() {
  if (emailInput.value === "") {
    emailInput.style.borderColor = "var(--red-1)";
    errorMessageDiv[0].style.display = "block";
    errorMessageDiv[0].innerText = "이메일을 입력해주세요.";
  } else if (!EMAIL_REGEX.test(emailInput.value)) {
    emailInput.style.borderColor = "var(--red-1)";
    errorMessageDiv[0].style.display = "block";
    errorMessageDiv[0].innerText = "올바른 이메일 주소가 아닙니다.";
  } else if (emailInput.value === EMAIL_ALREADY_USED) {
    emailInput.style.borderColor = "var(--red-1)";
    errorMessageDiv[0].style.display = "block";
    errorMessageDiv[0].innerText = "이미 사용 중인 이메일입니다.";
  }
}

function passwordConfirmCheck() {
  if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmInput.style.borderColor = "var(--red-1)";
    errorMessageDiv[2].style.display = "block";
    errorMessageDiv[2].innerText = "비밀번호가 일치하지 않아요.";
  } else {
    passwordConfirmInput.style.borderColor = "var(--blue-1)";
    errorMessageDiv[2].style.display = "none";
    errorMessageDiv[2].innerText = "";
  }
}

function resetPasswordConfirmInput() {
  passwordConfirmInput.style.borderColor = "var(--blue-1)";
  errorMessageDiv[2].style.display = "none";
  errorMessageDiv[2].innerText = "";
}

function signupConfirm(e) {
  e.preventDefault();
  if (!EMAIL_REGEX.test(emailInput.value)) {
    emailCheck();
  } else if (!PASSWORD_REGEX.test(passwordInput.value)) {
    passwordCheck();
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmCheck();
  } else {
    location.href = "./folder.html";
  }
}

//이벤트 리스너
emailInput.addEventListener("focusout", emailCheck);
emailInput.addEventListener("focusin", resetEmailInput);
passwordInput.addEventListener("focusout", passwordCheck);
passwordInput.addEventListener("focusin", resetPasswordInput);
passwordConfirmInput.addEventListener("focusout", passwordConfirmCheck);
passwordConfirmInput.addEventListener("focusin", resetPasswordConfirmInput);
signupBtn.addEventListener("click", signupConfirm);
eyeBtn[0].addEventListener("click", eyeOnOff);
eyeBtn[1].addEventListener("click", eyeOnOff);




