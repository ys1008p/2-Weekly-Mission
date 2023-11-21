import {
  setError,
  removeError,
  emailCondition,
  passwordCondition,
  eyeToggle,
  UNIQUE_USER,
} from "./utils.js";

// 이메일 유효성 검증
const emailInput = document.querySelector("#email");
const emailErrorMsg = document.querySelector(".error-message__email");
emailInput.addEventListener("focusout", (e) => validateEmail(e.target.value));
function validateEmail(email) {
  if (email === "") {
    setError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "이메일을 입력해주세요."
    );
    return false;
  }

  if (!emailCondition(email)) {
    setError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "올바른 이메일 주소가 아닙습니다."
    );
    return false;
  }

  if (email === UNIQUE_USER.email) {
    setError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "이미 사용 중인 이메일입니다."
    );
    return false;
  }
  removeError({ input: emailInput, errorMsg: emailErrorMsg });
  return true;
}

// 비밀번호 유효성 검증
const pwInput = document.querySelector("#pw");
const pwError = document.querySelector(".error-message__pw");
pwInput.addEventListener("focusout", (e) => validatePassword(e.target.value));
function validatePassword(password) {
  if (!passwordCondition(password)) {
    setError(
      { input: pwInput, errorMsg: pwError },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  removeError({ input: pwInput, errorMsg: pwError });
  return true;
}

// 비밀번호 확인 유효성 검증
const pwCheckInput = document.querySelector("#pw-check");
const pwCheckErrorMsg = document.querySelector(".error-message__pw-check");
pwCheckInput.addEventListener("focusout", (e) =>
  validatePwCheck(e.target.value)
);
function validatePwCheck(pwCheck) {
  // 비밀번호와 비밀번호 확인의 값이 다르다.
  if (pwInput.value !== pwCheck) {
    setError(
      { input: pwCheckInput, errorMsg: pwCheckErrorMsg },
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeError({ input: pwCheckInput, errorMsg: pwCheckErrorMsg });
  return true;
}

// 회원가입 버튼 클릭 이벤트
function signup() {
  if (
    validateEmail(emailInput.value) &&
    validatePassword(pwInput.value) &&
    validatePwCheck(pwCheckInput.value)
  ) {
    const targetPage = "./folder";
    window.location.href = targetPage;
  }
}

// input들과 button에서 enter를 인식하고 signup()를 호출
const signupBtn = document.querySelector(".signup__input-area--btn");
signupBtn.addEventListener("click", signup);
for (let element of [emailInput, pwInput, pwCheckInput, signupBtn]) {
  element.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      signup();
    }
  });
}

// 비밀번호의 눈 버튼 클릭 이벤트
const pwEye = document.querySelector(".eye-toggle");
pwEye.addEventListener("click", () => eyeToggle(pwInput, pwEye));

// 비밀번호 확인의 눈 버튼 클릭 이벤트
const pwCheckEye = document.querySelector(".eye-toggle__check");
pwCheckEye.addEventListener("click", () => eyeToggle(pwCheckInput, pwCheckEye));
