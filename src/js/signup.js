import { signErrMsg } from "./common/errMsg.js";
import { signRegex } from "./common/regex.js";
import {
  domElements,
  inputClassAdd,
  inputClassRemove,
  pwToggleClick,
} from "./common/common.js";
import { userInfo } from "./common/userInfo.js";

const { signEmail, signEmailText, signPw, signPwText, pwToggle, signBtn } =
  domElements;

// 비밀번호 체크
const signPwCheck = document.getElementById("sign-pwCheck");
const signPwCheckText = document.getElementById("sign-pwCheck-text");

/**
 * 이메일 focusout
 */
function emailValidation() {
  const value = signEmail.value;
  const { email } = userInfo;
  const { emailErrMsg1, emailErrMsg2, emailErrMsg3 } = signErrMsg;
  const { emailRegex } = signRegex;

  let isVaild = true;

  if (value === "") {
    inputClassAdd(signEmail, signEmailText, emailErrMsg1);
    return false;
  } else if (!emailRegex.test(value)) {
    inputClassAdd(signEmail, signEmailText, emailErrMsg2);
    return false;
  } else if (value === email) {
    inputClassAdd(signEmail, signEmailText, emailErrMsg3);
    return false;
  } else {
    inputClassRemove(signEmail, signEmailText, "");
  }

  return isVaild;
}

/**
 * 비밀번호 focusout
 */
function pwValidation() {
  const value = signPw.value;
  let isVaild = true;
  const { pwErrMsg1 } = signErrMsg;
  const { pwMinLength, pwRegexOnlyStr, pwRegexOnlyNum } = signRegex;

  if (
    value.length < pwMinLength ||
    pwRegexOnlyStr.test(value) ||
    pwRegexOnlyNum.test(value)
  ) {
    inputClassAdd(signPw, signPwText, pwErrMsg1);
    return false;
  } else {
    inputClassRemove(signPw, signPwText, "");
  }

  // 비밀번호 체크와 값이 동일한경우
  if (value === signPwCheck.value)
    inputClassRemove(signPwCheck, signPwCheckText, "");

  return isVaild;
}

/**
 * 비밀번호 확인 focusout
 */
function pwCheckValidation() {
  const value = signPwCheck.value;
  let isVaild = true;
  const { pwCheckErrMsg1 } = signErrMsg;

  if (value === signPw.value) {
    inputClassRemove(signPwCheck, signPwCheckText, "");
  } else {
    inputClassAdd(signPwCheck, signPwCheckText, pwCheckErrMsg1);
    return false;
  }

  if (value === "") return false;

  return isVaild;
}

/**
 * 회원가입 버튼 click
 */
function signBtnClick() {
  const emailValid = emailValidation();
  const pwValid = pwValidation();
  const pwCheckValid = pwCheckValidation();

  if (emailValid && pwValid && pwCheckValid) window.location.href = "/faq.html";
}

// 이벤트리스너
signEmail.addEventListener("focusout", emailValidation);
signPw.addEventListener("focusout", pwValidation);
signPwCheck.addEventListener("focusout", pwCheckValidation);
signBtn.addEventListener("click", signBtnClick);
pwToggle.forEach((pwToggle) => {
  pwToggle.addEventListener("click", pwToggleClick);
});
