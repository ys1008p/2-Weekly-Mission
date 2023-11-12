const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const pwChkInput = document.getElementById("confirm-password");

const emailErrorTxt = document.querySelector(".email-error-text");
const pwErrorTxt = document.querySelector(".pw-error-text");
const chkWrongTxt = document.querySelector(".wrong");

const loginBtn = document.querySelector(".login-btn button");

let validEmail = false;
let validPw = false;

function checkEmail() {
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailErrorTxt.innerHTML = "이메일을 입력해주세요.";
  } else if (emailInput.value === "test@codeit.com") {
    emailInput.classList.add("error");
    emailErrorTxt.innerHTML = "이미 사용 중인 이메일입니다.";
  } else if (emailInput.value.includes("@") == false) {
    emailInput.classList.add("error");
    emailErrorTxt.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailInput.classList.remove("error");
    emailErrorTxt.innerHTML = "";
    validEmail = true;
  }
}

function checkPw() {
  let engOnly = /^[A-Za-z]+$/;

  if (passwordInput.value.length < 8 || isNaN(passwordInput.value) !== true || engOnly.test(passwordInput.value)) {
    passwordInput.classList.add("error");
    pwErrorTxt.innerHTML = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    pwErrorTxt.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    passwordInput.classList.remove("error");
    pwErrorTxt.innerHTML = "";
  }
}

function comparePw() {
  if (passwordInput.value !== pwChkInput.value) {
    pwChkInput.classList.add("error");
    passwordInput.classList.add("error");
    chkWrongTxt.innerHTML = "비밀번호가 일치하지 않아요";
  } else {
    passwordInput.classList.remove("error");
    pwChkInput.classList.remove("error");
    chkWrongTxt.innerHTML = "";
    validPw = true;
  }
}

function signup(e) {
  if (validEmail && validPw) {
    if (e.key === "Enter") {
      location.href = "/folder";
    } else {
      location.href = "/folder";
    }
  }
}

emailInput.addEventListener("focusout", checkEmail);
passwordInput.addEventListener("focusout", checkPw);
pwChkInput.addEventListener("focusout", comparePw);
loginBtn.addEventListener("click", signup);
pwChkInput.addEventListener("keydown", signup);
