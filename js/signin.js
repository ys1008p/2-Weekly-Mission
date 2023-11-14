const emailInput = document.querySelector("#username");
const emailErrorText = document.querySelector(".email_error_text");

const pwInput = document.querySelector("#password");
const pwErrorText = document.querySelector(".pw_error_text");

const loginButton = document.querySelector(".login-button");

function checkEmail(e) {
  if (e.target.value === "") {
    e.target.classList.add("inputError");
    emailErrorText.innerHTML = "이메일을 입력해주세요.";
  } else if (e.target.value.includes("@") == false) {
    e.target.classList.add("inputError");
    emailErrorText.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    e.target.classList.remove("inputError");
    emailErrorText.innerHTML = "";
  }
}

function checkPw(e) {
  console.log(e.target.value);
  if (e.target.value === "") {
    e.target.classList.add("inputError");
    pwErrorText.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    e.target.classList.remove("inputError");
    pwErrorText.innerHTML = "";
  }
}

function login() {
  if (emailInput === "test@codeit.com" && pwInput === "codeit101") {
    location.href = "./folder";
  } else {
    emailErrorText.innerHTML = "이메일을 확인해주세요.";
    pwErrorText.innerHTML = "비밀번호를 확인해주세요.";
  }
}

emailInput.addEventListener("focusout", checkEmail);
pwInput.addEventListener("focusout", checkPw);
loginButton.addEventListener("click", login);
