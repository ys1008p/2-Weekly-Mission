const emailInput = document.querySelector("#username");
const emailErrorText = document.querySelector(".email_error_text");

const pwInput = document.querySelector("#password");
const pwErrorText = document.querySelector(".pw_error_text");
const pwCheckInput = document.querySelector("#password_check");
const pwCheckErrorText = document.querySelector(".pw_check_error_text");

const loginButton = document.querySelector(".login-button");

let validEmail = false;
let validPw = false;

function checkEmail() {
  if (emailInput.value === "") {
    emailInput.classList.add("inputError");
    emailErrorText.innerHTML = "이메일을 입력해주세요.";
  } else if (emailInput.value === "test@codeit.com") {
    emailInput.classList.add("inputError");
    emailErrorText.innerHTML = "이미 사용 중인 이메일입니다.";
  } else if (emailInput.value.includes("@") == false) {
    emailInput.classList.add("inputError");
    emailErrorText.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailInput.classList.remove("inputError");
    emailErrorText.innerHTML = "";
    validEmail = true;
  }
}

function checkPw() {
  let engOnly = /^[A-Za-z]+$/;

  if (
    pwInput.value.length < 8 ||
    isNaN(pwInput.value) !== true ||
    engOnly.test(pwInput.value)
  ) {
    pwInput.classList.add("inputError");
    pwErrorText.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (pwInput.value === "") {
    pwInput.classList.add("inputError");
    pwErrorText.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    pwInput.classList.remove("inputError");
    pwErrorText.innerHTML = "";
  }
}

function comparePw() {
  if (pwInput.value !== pwCheckInput.value) {
    pwCheckInput.classList.add("inputError");
    pwInput.classList.add("inputError");
    pwCheckErrorText.innerHTML = "비밀번호가 일치하지 않아요";
  } else {
    pwInput.classList.remove("inputError");
    pwCheckInput.classList.remove("inputError");
    pwCheckErrorText.innerHTML = "";
    validPw = true;
  }
}

function signup(e) {
  if (validEmail && validPw) {
    if (e.key === "Enter") {
      location.href = "./folder";
    } else {
      location.href = "./folder";
    }
  }
}

emailInput.addEventListener("focusout", checkEmail);
pwInput.addEventListener("focusout", checkPw);
pwCheckInput.addEventListener("focusout", comparePw);
loginButton.addEventListener("click", signup);
pwCheckInput.addEventListener("keydown", signup);
