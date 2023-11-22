import { WARNING_MSGS } from "./warning-msgs.js";

//이메일을 검증 후 에러메시지 반환 함수
const validateEmail = (email) => {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!email) return WARNING_MSGS.EMPTY_EMAIL_INPUT;
  else if (!emailRegex.test(email)) return WARNING_MSGS.NOT_CORRECT_EMAIL;
};

//비밀번호를 검증 후 에러메시지 반환 함수
const validatePassword = (pwd, isSignUp) => {
  const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (!pwd) return WARNING_MSGS.EMPTY_PWD_INPUT;
  if (isSignUp && !pwdReg.test(pwd)) return WARNING_MSGS.PWD_CONDITION_NOT_MET;
};

//이메일, 비밀번호 검증 후 에러메시지 반환 함수
export const returnWarningText = (inputValue, isEmailInput, isSignUp) => {
  if (isEmailInput) return validateEmail(inputValue);
  else return validatePassword(inputValue, isSignUp);
};

export const returnCheckPwdText = (check, pwd) => {
  if (!(check === pwd)) return WARNING_MSGS.PWDS_DO_NOT_MATCH;
};

//비밀번호와 비밀번호 확인 input의 값 비교하는 함수
export const comparePassword = (e) => {
  const $inputPwdEl = e.target;
  const $inputPwCheckEl = document.querySelector("#pw-check");
  const $pwCheckWaringEl = $inputPwCheckEl.parentElement.lastElementChild;
  const isSamePwd = $inputPwdEl.value === $inputPwCheckEl.value;

  if ($pwCheckWaringEl.textContent && isSamePwd) {
    $pwCheckWaringEl.textContent = "";
    $inputPwCheckEl.classList.toggle("error-input");
  }
  //
  else if (!$pwCheckWaringEl.textContent && !isSamePwd && $inputPwCheckEl.value) {
    $pwCheckWaringEl.textContent = WARNING_MSGS.PWDS_DO_NOT_MATCH;
    $inputPwCheckEl.classList.toggle("error-input");
  }
};
