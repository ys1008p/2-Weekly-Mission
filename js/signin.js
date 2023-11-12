import { emailInput, passwordInput, signinBtn, errorMessageDiv, eyeBtn, EMAIL_REGEX, PASSWORD_REGEX } from "./consts.js";
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
  }
}

function signinCheck() {
  emailInput.style.borderColor = "var(--red-1)";
  errorMessageDiv[0].style.display = "block";
  errorMessageDiv[0].innerText = "이메일을 확인해주세요.";
  passwordInput.style.borderColor = "var(--red-1)";
  errorMessageDiv[1].style.display = "block";
  errorMessageDiv[1].innerText = "비밀번호를 확인해주세요.";
}

function signinConfirm(e) {
  e.preventDefault();
  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    location.href = "/folder.html";
  } else {
    signinCheck();
  }
}

//이벤트 리스너
emailInput.addEventListener("focusout", emailCheck);
emailInput.addEventListener("focusin", resetEmailInput);
passwordInput.addEventListener("focusout", passwordCheck);
passwordInput.addEventListener("focusin", resetPasswordInput);
signinBtn.addEventListener("click", signinConfirm);
eyeBtn[0].addEventListener("click", eyeOnOff);





