import {
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
const pwErrorMsg = document.querySelector(".error-message__pw");
pwInput.addEventListener("focusout", (e) => validatePassword(e.target.value));
function validatePassword(password) {
  if (password === "") {
    setError(
      { input: pwInput, errorMsg: pwErrorMsg },
      "비밀번호을 입력해주세요."
    );
    return;
  }
  removeError({ input: pwInput, errorMsg: pwErrorMsg });
}

// 로그인 API 검증
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", signin);
async function signin(e) {
  e.preventDefault();

  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: NEW_EMAIL.email,
        password: NEW_EMAIL.password,
      }),
    });

    if (!response.ok) {
      throw Error();
    }

    const { data } = await response.json();
    const accessToken = data?.accessToken;
    if (!accessToken) {
      alert("토큰이 없습니다.");
      return;
    }
    window.localStorage.setItem("accessToken", accessToken);
    const targetPage = "./folder";
    window.location.href = targetPage;
  } catch {
    setError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "이메일을 확인해주세요."
    );
    setError(
      { input: pwInput, errorMsg: pwErrorMsg },
      "비밀번호을 확인해주세요."
    );
  }
}

// 비밀번호의 눈 버튼 클릭 이벤트
const pwEye = document.querySelector(".eye-toggle");
pwEye.addEventListener("click", () => eyeToggle(pwInput, pwEye));
