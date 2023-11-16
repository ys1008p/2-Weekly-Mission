const emailInput = document.querySelector("#username");
const pwInput = document.querySelector("#password");
const pwCheckInput = document.querySelector("#password_check");
const form = document.querySelector("form");

const formState = {
  email: false,
  pw: false,
  pwConfirmation: false,
};

// 유효성 검사 후 에러 메시지 띄워야 할 때
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
  // 다음 형제 요소
  const emailErrorText = e.target.nextElementSibling;
  const errorMsg = [
    "이메일을 입력해주세요.",
    "이미 사용 중인 이메일입니다.",
    "올바른 이메일 주소가 아닙니다.",
  ];

  if (e.target.value === "") {
    ifError(e, emailErrorText, errorMsg[0], "email");
    // e.target.classList.add("error");
    // emailErrorText.classList.add("error");
    // emailErrorText.innerHTML = "이메일을 입력해주세요.";
    // formState.email = false;
  } else if (e.target.value === "test@codeit.com") {
    ifError(e, emailErrorText, errorMsg[1], "email");
    // e.target.classList.add("error");
    // emailErrorText.classList.add("error");
    // emailErrorText.innerHTML = "이미 사용 중인 이메일입니다.";
    // formState.email = false;
  } else if (e.target.value.includes("@") == false) {
    ifError(e, emailErrorText, errorMsg[2], "email");
    // e.target.classList.add("error");
    // emailErrorText.classList.add("error");
    // emailErrorText.innerHTML = "올바른 이메일 주소가 아닙니다.";
    // formState.email = false;
  } else {
    ifOk(e, emailErrorText, "email");
    // e.target.classList.remove("error");
    // emailErrorText.classList.remove("error");
    // emailErrorText.innerHTML = "";
    // formState.email = true;
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
    // e.target.classList.add("error");
    // pwErrorText.classList.add("error");
    // pwErrorText.innerHTML =
    //   "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    // formState.pw = false;
  } else if (
    e.target.value.length < 8 ||
    isNaN(e.target.value) !== true ||
    engOnly.test(e.target.value)
  ) {
    ifError(e, pwErrorText, errorMsg[1], "pw");
    // e.target.classList.add("error");
    // pwErrorText.classList.add("error");
    // pwErrorText.innerHTML = "비밀번호를 입력해주세요.";
    // formState.pw = false;
  } else {
    ifOk(e, pwErrorText, "pw");
    // e.target.classList.remove("error");
    // pwErrorText.classList.remove("error");
    // pwErrorText.innerHTML = "";
    // formState.pw = false;
  }
}

function checkPwConfirmation(e) {
  const pwCheckErrorText = e.target.parentElement.lastElementChild;
  const errorMsg = "비밀번호가 일치하지 않아요";
  if (pwInput.value !== e.target.value) {
    ifError(e, pwCheckErrorText, errorMsg, "pwConfirmation");
    // e.target.classList.add("error");
    pwInput.classList.add("error");
    // pwCheckErrorText.classList.add("error");
    // pwCheckErrorText.innerHTML = "비밀번호가 일치하지 않아요";
    // formState.pwConfirmation = false;
  } else {
    ifOk(e, pwCheckErrorText, "pwConfirmation");
    // e.target.classList.remove("error");
    pwInput.classList.remove("error");
    // pwCheckErrorText.classList.remove("error");
    // pwCheckErrorText.innerHTML = "";
    // formState.pwConfirmation = true;
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
