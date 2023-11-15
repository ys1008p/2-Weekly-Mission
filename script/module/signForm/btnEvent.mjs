"use strict";

import {
  emailErrHandler,
  pwErrHandler,
  pwCkdErrHandler,
  emailInput,
  pwInput,
  showError,
  emailErrorMsg,
  pwErrorMsg,
} from "./inputErrMsg.mjs";

const loginBtn = document.querySelector("#login_btn");
const signUpBtn = document.querySelector("#signup_btn");

function loginBtnHandler(e) {
  if (emailInput.value === "test@codeit.com" && pwInput.value === "codeit101") {
    console.log("Sucess Login");
  } else {
    e.preventDefault();
    showError(emailErrorMsg, emailInput, "이메일을 확인해주세요.");
    showError(pwErrorMsg, pwInput, "비밀번호를 확인해주세요.");
  }
}

function signUpBtnHandler(e) {
  emailErrHandler();
  pwErrHandler();
  pwCkdErrHandler();

  if (
    emailErrorMsg.classList.contains("show") ||
    pwErrorMsg.classList.contains("show") ||
    pwCheckErrorMsg.classList.contains("show")
  ) {
    e.preventDefault();
  }
}

export { loginBtn, loginBtnHandler, signUpBtnHandler, signUpBtn };
