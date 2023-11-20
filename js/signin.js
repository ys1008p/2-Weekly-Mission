import {
  UNIQUE_USER,
  setError,
  removeError,
  emailCondition,
  passwordCondition,
} from "./utils.js";

// 아이디 유효성 검증
const emailInput = document.querySelector("#email");
const emailErrorMsg = document.querySelector(".error-message__email");
emailInput.addEventListener("focusout", (e) => validateEmail(e.target.value));
function validateEmail(email) {
  if (email === "") {
    setError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "이메일을 입력해주세요."
    );
    return;
  }
  if (!emailCondition(email)) {
    setError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  removeError({ input: emailInput, errorMsg: emailErrorMsg });
}

// 비밀번호 유효성 검증
const pw = document.querySelector("#pw");
const pwError = document.querySelector(".error-message__pw");
pw.addEventListener("focusout", (e) => validatePassword(e.target.value));
function validatePassword(password) {
  if (password === "") {
    setError({ input: pw, errorMsg: pwError }, "비밀번호을 입력해주세요.");
    return;
  }
  if (!passwordCondition(password)) {
    setError(
      { input: pw, errorMsg: pwError },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return;
  }
  removeError({ input: pw, errorMsg: pwError });
}

// 로그인 버튼 클릭 이벤트
const loginBtn = document.querySelector(".signin__input-area--btn");
loginBtn.addEventListener("click", signin);
function signin() {
  if (
    emailInput.value === UNIQUE_USER.emailInput &&
    pw.value === UNIQUE_USER.password
  ) {
    const targetPage = "./folder";
    window.location.href = targetPage;
  } else {
    validateEmail();
    validatePassword();
  }
}

// 비밀번호의 눈 버튼 클릭 이벤트
const pwOpenEye = document.querySelector(".open-eye");
const pwClosedEye = document.querySelector(".closed-eye");
pwOpenEye.addEventListener("click", eyeToggle);
pwClosedEye.addEventListener("click", eyeToggle);
function eyeToggle() {
  if (pw.type === "password") {
    pwOpenEye.classList.add("display");
    pwClosedEye.classList.remove("display");
    pw.setAttribute("type", "text");
  } else if (pw.type === "text") {
    pwOpenEye.classList.remove("display");
    pwClosedEye.classList.add("display");
    pw.setAttribute("type", "password");
  }
}
