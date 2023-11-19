import { WARNING_MSGS } from "./warning-msgs.js";

const checkEmailValid = (email) => {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!email) return WARNING_MSGS.EMPTY_EMAIL_INPUT;
  else if (!emailRegex.test(email)) return WARNING_MSGS.NOT_CORRECT_EMAIL;
};

const checkPwdValid = (pwd, isSignUp) => {
  const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (!pwd) return WARNING_MSGS.EMPTY_PWD_INPUT;
  if (isSignUp && !pwdReg.test(pwd)) return WARNING_MSGS.PWD_CONDITION_NOT_MET;
};

export const returnWarningText = (inputValue, isEmailInput, isSignUp) => {
  if (isEmailInput) return checkEmailValid(inputValue);
  else return checkPwdValid(inputValue, isSignUp);
};

export const returnCheckPwdText = (check, pwd) => {
  if (!(check === pwd)) return WARNING_MSGS.PWDS_DO_NOT_MATCH;
};

export const comparePw = (e) => {
  // 비밀번호 인풋에서 비밀번호확인과 값이 달라질 때
  const $inputPwdEl = e.target;
  const $inputPwCheckEl = document.querySelector("#pw-check"); //비밀번호 비교 인풋
  const $pwCheckWaringEl = $inputPwCheckEl.parentElement.lastElementChild; //비밀번호 비교 경고메시지 태그
  const isSamePwd = $inputPwdEl.value === $inputPwCheckEl.value;

  if ($pwCheckWaringEl.textContent && isSamePwd) {
    $pwCheckWaringEl.textContent = "";
    $inputPwCheckEl.classList.toggle("error-input"); //인풋 레이아웃 변경
  }
  //
  else if (!$pwCheckWaringEl.textContent && !isSamePwd && $inputPwCheckEl.value) {
    $pwCheckWaringEl.textContent = WARNING_MSGS.PWDS_DO_NOT_MATCH; //비밀번호 불일치 경고문
    $inputPwCheckEl.classList.toggle("error-input"); //비밀번호 비교 인풋 레이아웃 변경
  }
};
