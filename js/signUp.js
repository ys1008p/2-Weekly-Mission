import { $memberInfoForm, checkWarningMsg } from "./add-warning-msg.js";
import { changePwViewMode } from "./pwdOnOff.js";
import { membersList } from "./membersList.js";
import { comparePw } from "./return-warning-msg.js";

const $pwInput = document.querySelector("#pw");

const joinMember = (e) => {
  // 회원가입 이벤트
  const $inputEmailData = document.querySelector("#email"); //이메일 인풋
  const $inputPwdData = document.querySelector("#pw"); // 패스워드 인풋
  const $inputPwdCheckData = document.querySelector("#pw-check"); // 패스워드 비교 인풋
  const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (
    membersList.some((el) => el.email === $inputEmailData.value) ||
    $inputPwdData.value !== $inputPwdCheckData.value ||
    !pwdReg.test($inputPwdData.value)
  ) {
    e.preventDefault();
  }
};

$memberInfoForm.addEventListener("focusout", checkWarningMsg);
$memberInfoForm.addEventListener("submit", joinMember);
$memberInfoForm.addEventListener("click", changePwViewMode);
$pwInput.addEventListener("change", comparePw);
