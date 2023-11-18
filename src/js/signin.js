import { signErrMsg } from "./common/util/errMsg.js";
import {
  domElements,
  inputFocusOutClassAdd,
  inputFocusOutClassRemove,
  pwToggleClick,
} from "./common/sign.js";

import { accessTokenValid } from "./common/util/storage.js";
import { signInPost } from "./common/api/signApi.js";

const { signEmail, signEmailText, signPw, signPwText, pwToggle, signBtn } =
  domElements;

/**
 * 페이지 Load 시 호출되는 함수
 */
function init() {
  accessTokenValid();
}

/**
 * 이메일 focusout
 */
function signEmailClick() {
  const { emailErrMsg1 } = signErrMsg;

  if (signEmail.value === "") {
    return inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg1);
  }

  return inputFocusOutClassRemove(signEmail, signEmailText, "");
}

/**
 * 비밀번호 focusout
 */
function signPwClick() {
  const { pwErrMsg2 } = signErrMsg;

  if (signPw.value === "") {
    return inputFocusOutClassAdd(signPw, signPwText, pwErrMsg2);
  }

  return inputFocusOutClassRemove(signPw, signPwText, "");
}

/**
 * 로그인
 *
 */
async function signBtnClick() {
  const { emailErrMsg4, pwErrMsg3 } = signErrMsg;

  const inputValue = {
    email: signEmail.value,
    password: signPw.value,
  };

  const signInValid = await signInPost(inputValue);

  if (!signInValid) {
    inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg4);
    inputFocusOutClassAdd(signPw, signPwText, pwErrMsg3);
  }
}

// 이벤트리스너
document.addEventListener("DOMContentLoaded", init());
signBtn.addEventListener("click", signBtnClick);
signEmail.addEventListener("focusout", signEmailClick);
signPw.addEventListener("focusout", signPwClick);
pwToggle.addEventListener("click", () => pwToggleClick(signPw, pwToggle));
