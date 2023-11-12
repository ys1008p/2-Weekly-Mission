import { emailInput, passwordInput, errorMessageDiv, PASSWORD_REGEX } from "./consts.js";

function resetEmailInput() {
  emailInput.style.borderColor = "var(--blue-1)";
  errorMessageDiv[0].style.display = "none";
  errorMessageDiv[0].innerText = "";
}

function passwordCheck() {
  if (passwordInput.value === "") {
    passwordInput.style.borderColor = "var(--red-1)";
    errorMessageDiv[1].style.display = "block";
    errorMessageDiv[1].innerText = "비밀번호를 입력해주세요.";
  } else if (!PASSWORD_REGEX.test(passwordInput.value)) {
    passwordInput.style.borderColor = "var(--red-1)";
    errorMessageDiv[1].style.display = "block";
    errorMessageDiv[1].innerText = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  }
}

function resetPasswordInput() {
  passwordInput.style.borderColor = "var(--blue-1)";
  errorMessageDiv[1].style.display = "none";
  errorMessageDiv[1].innerText = "";
}

function eyeOnOff(e) {
  if (e.target.classList.contains("eye-off")) {
    e.target.classList.replace("eye-off", "eye-on");
    e.target.previousElementSibling.type = "text";
  } else {
    e.target.classList.replace("eye-on", "eye-off");
    e.target.previousElementSibling.type = "password";
  }
}

export { resetEmailInput, passwordCheck, resetPasswordInput, eyeOnOff };