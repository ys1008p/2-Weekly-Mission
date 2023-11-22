"use strict";
import {
  emailErrHandler,
  pwErrHandler,
  pwCkdErrHandler,
  emailInput,
  pwInput,
  pwCheckInput,
} from "./module/signForm/inputValidation.mjs";

import {
  pwIcon,
  pwiconChangeHandler,
  pwCheckedIcon,
  pwCkdIconChangeHandler,
} from "./module/signForm/togglePasswordVisiblity.mjs";

import {
  signUpBtnHandler,
  signUpBtn,
} from "./module/signForm/submitHandlers.mjs";
document.addEventListener("DOMContentLoaded", function () {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "/folder";
  }
  // =================================================================

  //이메일인풋 에러핸들러
  emailInput.addEventListener("blur", emailErrHandler);
  //패스워드인풋 에러핸들러
  pwInput.addEventListener("blur", pwErrHandler);
  //패스워드체크(재확인) 에러핸들러
  pwCheckInput.addEventListener("blur", pwCkdErrHandler);
  //아이콘 변경용 핸들러
  pwIcon.addEventListener("click", pwiconChangeHandler);
  //아이콘(패스워드체크) 변경용 핸들러
  pwCheckedIcon.addEventListener("click", pwCkdIconChangeHandler);

  // 회원가입 핸들러 / 엔터기능구현
  signUpBtn.addEventListener("click", signUpBtnHandler);
  signUpBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) loginBtnHandler(e);
  });

  // =================================================================
});
