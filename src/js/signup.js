import { signErrMsg } from "./common/util/errMsg.js";
import { signRegex } from "./common/util/regex.js";
import {
  domElements,
  inputFocusOutClassAdd,
  inputFocusOutClassRemove,
  pwToggleClick,
} from "./common/sign.js";

import { accessTokenValid } from "./common/util/storage.js";

import { signUpPost, emailValidkPost } from "./common/api/signApi.js";

const { signEmail, signEmailText, signPw, signPwText, pwToggle, signBtn } =
  domElements;

const signPwCheck = document.getElementById("sign-pwCheck");
const signPwCheckText = document.getElementById("sign-pwCheck-text");
const pwCheckToggled = document.getElementById("password-check-toggled");

/**
 * 페이지 Load 시 호출되는 함수
 */
function init() {
  accessTokenValid();
}

/**
 * 이메일 focusout
 */
async function signEmailClick() {
  const inputValue = { email: signEmail.value };
  const { emailErrMsg1, emailErrMsg2, emailErrMsg3 } = signErrMsg;
  const { emailRegex } = signRegex;

  const emailValid = await emailValidkPost(inputValue);

  if (inputValue.email === "")
    return inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg1);

  if (!emailRegex.test(inputValue.email))
    return inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg2);

  if (!emailValid)
    return inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg3);

  return inputFocusOutClassRemove(signEmail, signEmailText, "");
}

/**
 * 비밀번호 focusout
 */
function signPwClick() {
  const value = signPw.value;
  const { pwErrMsg1 } = signErrMsg;
  const { pwMinLength, pwRegexOnlyStr, pwRegexOnlyNum } = signRegex;

  if (
    value.length < pwMinLength ||
    pwRegexOnlyStr.test(value) ||
    pwRegexOnlyNum.test(value)
  ) {
    return inputFocusOutClassAdd(signPw, signPwText, pwErrMsg1);
  }

  // 비밀번호 체크와 값이 동일한경우
  if (value === signPwCheck.value) {
    inputFocusOutClassRemove(signPwCheck, signPwCheckText, "");
  }

  return inputFocusOutClassRemove(signPw, signPwText, "");
}

/**
 * 비밀번호 확인 focusout
 */
function singPwCheckClick() {
  const value = signPwCheck.value;
  const { pwCheckErrMsg1 } = signErrMsg;

  if (value !== signPw.value) {
    return inputFocusOutClassAdd(signPwCheck, signPwCheckText, pwCheckErrMsg1);
  }

  return inputFocusOutClassRemove(signPwCheck, signPwCheckText, "");
}

/**
 * 회원가입 버튼 click
 */
async function signBtnClick() {
  const signUpValues = {
    email: signEmailClick(),
    password: signPwClick(),
    passwordCheck: singPwCheckClick(),
  };

  const inputValue = {
    email: signEmail.value,
    password: signPw.value,
  };

  if (signUpValues.email && signUpValues.password && signUpValues.passwordCheck)
    await signUpPost(inputValue);
}

// 이벤트리스너
document.addEventListener("DOMContentLoaded", init);
signEmail.addEventListener("focusout", signEmailClick);
signPw.addEventListener("focusout", signPwClick);
signPwCheck.addEventListener("focusout", singPwCheckClick);
signBtn.addEventListener("click", signBtnClick);
pwToggle.addEventListener("click", () => pwToggleClick(signPw, pwToggle));
pwCheckToggled.addEventListener("click", () =>
  pwToggleClick(signPwCheck, pwCheckToggled)
);
