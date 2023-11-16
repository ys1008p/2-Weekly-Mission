const emailInput = document.querySelector("#username");
const pwInput = document.querySelector("#password");
const pwCheckInput = document.querySelector("#password_check");
const form = document.querySelector("form");

const formState = {
  email: false,
  pw: false,
  pwConfirmation: false,
};

function ifError(e, errorText, errorMsg, input) {
  e.target.classList.add("error");
  errorText.classList.add("error");
  errorText.innerHTML = `${errorMsg}`;
  formState[`${input}`] = false;
}

function ifOk(e, errorText, input) {
  e.target.classList.remove("error");
  errorText.classList.remove("error");
  errorText.innerHTML = "";
  formState[`${input}`] = true;
}

function checkEmail(e) {
  const emailErrorText = e.target.nextElementSibling;
  const errorMsg = [
    "이메일을 입력해주세요.",
    "이미 사용 중인 이메일입니다.",
    "올바른 이메일 주소가 아닙니다.",
  ];

  if (e.target.value === "") {
    ifError(e, emailErrorText, errorMsg[0], "email");
  } else if (e.target.value === "test@codeit.com") {
    ifError(e, emailErrorText, errorMsg[1], "email");
  } else if (e.target.value.includes("@") == false) {
    ifError(e, emailErrorText, errorMsg[2], "email");
  } else {
    ifOk(e, emailErrorText, "email");
  }
}

function checkPw(e) {
  const engOnly = /^[A-Za-z]+$/;
  const pwErrorText = e.target.parentElement.lastElementChild;
  const errorMsg = [
    "비밀번호를 입력해주세요.",
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  ];

  if (e.target.value === "") {
    ifError(e, pwErrorText, errorMsg[0], "pw");
  } else if (
    e.target.value.length < 8 ||
    isNaN(e.target.value) !== true ||
    engOnly.test(e.target.value)
  ) {
    ifError(e, pwErrorText, errorMsg[1], "pw");
  } else {
    ifOk(e, pwErrorText, "pw");
  }
}

function checkPwConfirmation(e) {
  const pwCheckErrorText = e.target.parentElement.lastElementChild;
  const errorMsg = "비밀번호가 일치하지 않아요";
  if (pwInput.value !== e.target.value) {
    ifError(e, pwCheckErrorText, errorMsg, "pwConfirmation");
    pwInput.classList.add("error");
  } else {
    ifOk(e, pwCheckErrorText, "pwConfirmation");
    pwInput.classList.remove("error");
  }
}

function signup(e) {
  if (!formState.email && !formState.pw && !formState.pwConfirmation) return;
  e.preventDefault();
  location.href = "/folder";
}

emailInput.addEventListener("focusout", checkEmail);
pwInput.addEventListener("focusout", checkPw);
pwCheckInput.addEventListener("focusout", checkPwConfirmation);
form.addEventListener("submit", signup);
