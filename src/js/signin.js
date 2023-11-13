import { signErrMsg } from "./common/errMsg.js";
import { userInfo } from "./common/userInfo.js";
import {
  domElements,
  inputClassAdd,
  inputClassRemove,
  pwToggleClick,
} from "./common/common.js";

const { signEmail, signEmailText, signPw, signPwText, pwToggle, signBtn } =
  domElements;

/**
 * 이메일 focusout
 */
function signEmailClcik() {
  const { emailErrMsg1 } = signErrMsg;

  if (signEmail.value === "") {
    inputClassAdd(signEmail, signEmailText, emailErrMsg1);
  } else {
    inputClassRemove(signEmail, signEmailText, "");
  }
}

/**
 * 비밀번호 focusout
 */
function signPwClcik() {
  const { pwErrMsg2 } = signErrMsg;

  if (signPw.value === "") {
    inputClassAdd(signPw, signPwText, pwErrMsg2);
  } else {
    inputClassRemove(signPw, signPwText, "");
  }
}

/**
 * 로그인
 *
 */
function signBtnClcik() {
  const { email, password } = userInfo;
  const { emailErrMsg4, pwErrMsg3 } = signErrMsg;

  if (email === signEmail.value && password === signPw.value) {
    window.location.href = "/faq.html";
  } else {
    inputClassAdd(signEmail, signEmailText, emailErrMsg4);
    inputClassAdd(signPw, signPwText, pwErrMsg3);
    return false;
  }
}

// 이벤트리스너
signBtn.addEventListener("click", signBtnClcik);
signEmail.addEventListener("focusout", signEmailClcik);
signPw.addEventListener("focusout", signPwClcik);
pwToggle.forEach((pwToggle) => {
  pwToggle.addEventListener("click", pwToggleClick);
});
