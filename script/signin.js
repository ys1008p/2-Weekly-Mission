"use strict";

import {
  emailErrHandler,
  pwErrHandler,
  emailInput,
  pwInput,
} from "./module/signForm/inputErrMsg.mjs";

import { pwIcon, pwiconChangeHandler } from "./module/signForm/iconEvent.mjs";

import { loginBtnHandler, loginBtn } from "./module/signForm/btnEvent.mjs";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================

  // 로그인 핸들러 / 엔터기능구현
  loginBtn.addEventListener("click", loginBtnHandler);
  loginBtn.addEventListener("keyup", (e) => {
    e.keyCode === 13 && loginBtnHandler(e);
  });

  //이메일인풋 에러핸들러
  emailInput.addEventListener("blur", emailErrHandler);
  //패스워드인풋 에러핸들러
  pwInput.addEventListener("blur", pwErrHandler);
  //아이콘 변경용 핸들러
  pwIcon.addEventListener("click", pwiconChangeHandler);

  // =================================================================
});
