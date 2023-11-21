import { emailInput, passwordInput, passwordConfirmInput, errorMessageDiv, EMAIL_REGEX, PASSWORD_REGEX, errorMessage } from "./consts.js";

// 에러메세지 표시
function showError(input, errMsgDiv, errMsg) {
  input.classList.add("error");
  errMsgDiv.classList.replace("hide", "show");
  errMsgDiv.innerText = errMsg;
}
// 에러메세지 숨김
function hideError(input, errMsgDiv) {
  input.classList.remove("error");
  errMsgDiv.classList.replace("show", "hide");
  errMsgDiv.innerText = "";
}
// 이메일 입력창 초기화
function resetEmailInput(e) {
  hideError(e.target, e.target.nextElementSibling);
}
// 비밀번호 입력창 초기화
function resetPasswordInput(e) {
  hideError(e.target, e.target.parentElement.nextElementSibling);
}
// 로그인 이메일 유효성 검사
function signInEmailCheck(e) {
  if (e.target.value === "") {
    showError(e.target, e.target.nextElementSibling, errorMessage.enterEmail);
  } else if (!EMAIL_REGEX.test(emailInput.value)) {
    showError(e.target, e.target.nextElementSibling, errorMessage.invalidEmail);
  }
}
// 회원가입 이메일 유효성 검사
function signUpEmailCheck() {
  if (emailInput.value === "") {
    showError(emailInput, errorMessageDiv[0], errorMessage.enterEmail);
  } else if (!EMAIL_REGEX.test(emailInput.value)) {
    showError(emailInput, errorMessageDiv[0], errorMessage.invalidEmail);
  } else {
    hideError(emailInput, errorMessageDiv[0]);
  }
}
// 비밀번호 유효성 검사
function passwordCheck() {
  if (passwordInput.value === "") {
    showError(passwordInput, errorMessageDiv[1], errorMessage.enterPassword);
  } else if (!PASSWORD_REGEX.test(passwordInput.value)) {
    showError(passwordInput, errorMessageDiv[1], errorMessage.enterProperPassword);
  } else {
    hideError(passwordInput, errorMessageDiv[1]);
  }
}
// 비밀번호 확인 유효성 검사
function passwordConfirmCheck() {
  if (passwordConfirmInput.value !== passwordInput.value) {
    showError(passwordConfirmInput, errorMessageDiv[2], errorMessage.differentPassword);
  } else {
    hideError(passwordConfirmInput, errorMessageDiv[2]);
  }
}
// 로그인 에러표시
function signInError() {
  showError(emailInput, errorMessageDiv[0], errorMessage.checkEmail);
  showError(passwordInput, errorMessageDiv[1], errorMessage.checkPassword);
}
// 비밀번호 표시 및 숨김
function eyeOnOff(e) {
  if (e.target.classList.contains("eye-off")) {
    e.target.classList.replace("eye-off", "eye-on");
    e.target.previousElementSibling.type = "text";
  } else {
    e.target.classList.replace("eye-on", "eye-off");
    e.target.previousElementSibling.type = "password";
  }
}

export { showError, hideError, resetEmailInput, resetPasswordInput, signInEmailCheck, signUpEmailCheck, passwordCheck, passwordConfirmCheck, signInError, eyeOnOff };