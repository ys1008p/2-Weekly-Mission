import { inputEventHandler, membersList, checkInputData } from "./app.js";
import { changePwViewMode } from "./pwdOnOff.js";

const pwInput = document.querySelector("#pw");

const joinMember = (e) => {
  const inputEmailData = document.querySelector("#email");
  const inputPwdData = document.querySelector("#pw");
  const inputPwdCheckData = document.querySelector("#pw-check");
  const pwdReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (
    membersList.some((el) => el.email === inputEmailData.value) ||
    inputPwdData.value !== inputPwdCheckData.value ||
    !pwdReg.test(inputPwdData.value)
  ) {
    e.preventDefault();
  }
};

const comparePw = (e) => {
  // 비밀번호 인풋에서 비밀번호확인과 값이 달라질 때
  const inputPwData = e.target;
  const inputPwCheckData = document.querySelector("#pw-check");
  if (
    inputPwCheckData.parentElement.lastElementChild.textContent &&
    inputPwData.value === inputPwCheckData.value
  ) {
    inputPwCheckData.parentElement.lastElementChild.textContent = "";
    inputPwCheckData.classList.toggle("error-input");
  } else if (
    !inputPwCheckData.parentElement.lastElementChild.textContent &&
    inputPwData.value !== inputPwCheckData.value &&
    inputPwCheckData.value
  ) {
    inputPwCheckData.parentElement.lastElementChild.textContent =
      "비밀번호가 일치하지 않아요.";
    inputPwCheckData.classList.toggle("error-input");
  }
};

inputEventHandler.addEventListener("focusout", checkInputData);
pwInput.addEventListener("change", comparePw);
inputEventHandler.addEventListener("submit", joinMember);
inputEventHandler.addEventListener("click", changePwViewMode);
