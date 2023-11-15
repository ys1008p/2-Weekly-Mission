import { $memberInfoForm, checkInputData } from "./app.js";
import { changePwViewMode } from "./pwdOnOff.js";
import { membersList } from "./membersList.js";

const $pwInput = document.querySelector("#pw");

const joinMember = (e) => {
  // 회원가입 이벤트
  const $inputEmailData = document.querySelector("#email"); //이메일 인풋
  const $inputPwdData = document.querySelector("#pw"); // 패스워드 인풋
  const $inputPwdCheckData = document.querySelector("#pw-check"); // 패스워드 비교 인풋
  const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (
    // 아이디 중복 or 비밀번호 비교 불일치 or 정규표현식과 비밀번호가 맞지 않을 때 가입진행 안됨
    membersList.some((el) => el.email === $inputEmailData.value) ||
    $inputPwdData.value !== $inputPwdCheckData.value ||
    !pwdReg.test($inputPwdData.value)
  ) {
    e.preventDefault();
  }
};

const comparePw = (e) => {
  // 비밀번호 인풋에서 비밀번호확인과 값이 달라질 때
  const $inputPwData = e.target; //비밀번호 인풋
  const $inputPwCheckData = document.querySelector("#pw-check"); //비밀번호 비교 인풋
  const $pwCheckWaringTag = $inputPwCheckData.parentElement.lastElementChild; //비밀번호 비교 경고메시지 태그
  if (
    // 비밀번호 비교인풋에서 경고메시지가 있는 상태에서, 비밀번호가 같아질 때
    $pwCheckWaringTag.textContent &&
    $inputPwData.value === $inputPwCheckData.value
  ) {
    $pwCheckWaringTag.textContent = ""; //경고메시지 초기화
    $inputPwCheckData.classList.toggle("error-input"); //인풋 레이아웃 변경
  } else if (
    // 비밀번호 비교인풋에서 경고메시지가 없고, 비밀번호가 다르며, 비밀번호 비교 인풋에 값이 있을 때
    !$pwCheckWaringTag.textContent &&
    $inputPwData.value !== $inputPwCheckData.value &&
    $inputPwCheckData.value
  ) {
    $pwCheckWaringTag.textContent = "비밀번호가 일치하지 않아요."; //비밀번호 불일치 경고문
    $inputPwCheckData.classList.toggle("error-input"); //비밀번호 비교 인풋 레이아웃 변경
  }
};

$memberInfoForm.addEventListener("focusout", checkInputData);
$pwInput.addEventListener("change", comparePw);
$memberInfoForm.addEventListener("submit", joinMember);
$memberInfoForm.addEventListener("click", changePwViewMode);
