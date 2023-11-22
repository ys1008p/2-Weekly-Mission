"use strict";

import {
  emailErrHandler,
  pwErrHandler,
  emailInput,
  pwInput,
} from "./module/signForm/inputValidation.mjs";

import {
  pwIcon,
  pwiconChangeHandler,
} from "./module/signForm/togglePasswordVisiblity.mjs";

import {
  loginBtnHandler,
  loginBtn,
} from "./module/signForm/submitHandlers.mjs";

document.addEventListener("DOMContentLoaded", function () {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "/folder";
  }
  // =================================================================

  // 로그인 핸들러 / 엔터기능구현
  loginBtn.addEventListener("click", loginBtnHandler);
  loginBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) loginBtnHandler(e);
  });

  //이메일인풋 에러핸들러
  emailInput.addEventListener("blur", emailErrHandler);
  //패스워드인풋 에러핸들러
  pwInput.addEventListener("blur", pwErrHandler);
  //아이콘 변경용 핸들러
  pwIcon.addEventListener("click", pwiconChangeHandler);

  // =================================================================
});
