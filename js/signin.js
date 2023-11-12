const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailErrorTxt = document.querySelector(".email-error-text");
const pwErrorTxt = document.querySelector(".pw-error-text");
const loginBtn = document.querySelector(".login-btn button");

function checkEmail() {
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailErrorTxt.innerHTML = "이메일을 입력해주세요.";
  } else if (emailInput.value.includes("@") == false) {
    emailInput.classList.add("error");
    emailErrorTxt.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailInput.classList.remove("error");
    emailErrorTxt.innerHTML = "";
  }
}

function checkPw() {
  if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    pw_error_text.innerHTML = "비밀번호를 입력해주세요.";
  }
}

function login() {
  if (emailInput === "test@codeit.com" && passwordInput === "codeit101") {
    location.href = "/folder";
  } else {
    emailErrorTxt.innerHTML = "이메일을 확인해주세요.";
    pw_error_text.innerHTML = "비밀번호를 확인해주세요.";
  }
}

emailInput.addEventListener("focusout", checkEmail);
passwordInput.addEventListener("focusout", checkPw);
login_button.addEventListener("click", login);
