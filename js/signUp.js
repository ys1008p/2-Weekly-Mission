import {
  inputEventHandler,
  membersList,
  checkInputData,
  createCheckPwdText,
  createTextTag,
  createWaringText,
  joinMember,
  login,
} from "./app.js";

inputEventHandler.addEventListener("focusout", checkInputData);
inputEventHandler.addEventListener("submit", joinMember);
