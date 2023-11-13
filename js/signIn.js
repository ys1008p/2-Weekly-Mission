import { inputEventHandler, membersList, checkInputData } from "./app.js";
import { changePwViewMode } from "./pwdOnOff.js";

const login = (e) => {
  const inputEmailData = document.querySelector("#email");
  const inputPwdData = document.querySelector("#pw");
  const emailWarningTag = inputEmailData.parentElement.lastElementChild;
  const pwWarningTag = inputPwdData.parentElement.lastElementChild;
  const isCorrectEmail = membersList.some(
    (el) => el.email === inputEmailData.value
  );
  const isCorrectPw = membersList.some(
    (el) =>
      el.email === inputEmailData.value && el.password === inputPwdData.value
  );
  console.log(isCorrectEmail, isCorrectPw);

  if (!isCorrectEmail) {
    e.preventDefault();
    inputEmailData.classList.add("error-input");
    emailWarningTag.textContent = "이메일을 확인해주세요.";
  } else if (!isCorrectPw) {
    e.preventDefault();
    inputPwdData.classList.add("error-input");
    pwWarningTag.textContent = "비밀번호를 확인해주세요.";
  }
};

inputEventHandler.addEventListener("focusout", checkInputData);
inputEventHandler.addEventListener("submit", login);
inputEventHandler.addEventListener("click", changePwViewMode);
