import {
  UNIQUE_USER,
  setError,
  removeError,
  emailCondition,
  eyeToggle,
  NEW_EMAIL,
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
const pwInput = document.querySelector("#pw");
const pwError = document.querySelector(".error-message__pw");
pwInput.addEventListener("focusout", (e) => validatePassword(e.target.value));
function validatePassword(password) {
  if (password === "") {
    setError({ input: pwInput, errorMsg: pwError }, "비밀번호을 입력해주세요.");
    return;
  }
  removeError({ input: pwInput, errorMsg: pwError });
}

// 로그인 버튼 클릭 이벤트
const loginBtn = document.querySelector(".signin__input-area--btn");
loginBtn.addEventListener("click", signin);
function signin(e) {
  if (checkEmail(NEW_EMAIL.email, NEW_EMAIL.password)) {
    const targetPage = "./folder";
    window.location.href = targetPage;
    return;
  }
  validateEmail(e.target.value);
  validatePassword(e.target.value);
}

// API 이메일 확인 요청
async function checkEmail(email, password) {
  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/sign-in`);
    const data = await response.json();
    return data.email === email && data.password === password ? true : false;
  } catch (error) {
    console.log(error);
  }
}

// 비밀번호의 눈 버튼 클릭 이벤트
const pwEye = document.querySelector(".eye-toggle");
pwEye.addEventListener("click", () => eyeToggle(pw, pwEye));
