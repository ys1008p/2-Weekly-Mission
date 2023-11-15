import { $memberInfoForm, checkWarningMsg } from "./add-warning-msg.js";
import { changePwViewMode } from "./pwdOnOff.js";
import { membersList } from "./membersList.js";

const login = (e) => {
  //로그인 동작
  const inputEmailData = document.querySelector("#email"); // 이메일 인풋
  const inputPwdData = document.querySelector("#pw"); // 패스워드 인풋
  const emailWarningTag = inputEmailData.parentElement.lastElementChild; //이메일 경고 태그
  const pwWarningTag = inputPwdData.parentElement.lastElementChild; // 패스워드 경고 태그
  const isCorrectEmail = membersList.some(
    //회원가입 된 이메일 여부 확인
    (el) => el.email === inputEmailData.value
  );
  const isCorrectPw = membersList.some(
    //회원의 비밀번호가 맞는지 확인
    (el) => el.email === inputEmailData.value && el.password === inputPwdData.value
  );

  if (!isCorrectEmail) {
    // 해당 회원이 없을 때
    e.preventDefault();
    inputEmailData.classList.add("error-input"); // 이메일 인풋 레이아웃 변경
    emailWarningTag.textContent = "이메일을 확인해주세요.";
  } else if (!isCorrectPw) {
    //비밀번호가 틀릴 때
    e.preventDefault();
    inputPwdData.classList.add("error-input"); // 비밀번호 인풋 레이아웃 변경
    pwWarningTag.textContent = "비밀번호를 확인해주세요.";
  }
};

$memberInfoForm.addEventListener("focusout", checkWarningMsg);
$memberInfoForm.addEventListener("submit", login);
$memberInfoForm.addEventListener("click", changePwViewMode);
