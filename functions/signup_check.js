import { inputPassword, inputPasswordCheck } from "../tags.js";
import { removeRedMessage, createRedMessage } from './error_message.js';

let checkValid = false;

function printDiff () {
  createRedMessage(inputPasswordCheck, '비밀번호가 일치하지 않아요.');
}

// 비밀번호 확인 유효성을 검증하는 함수
function enterPasswordCheckMessage(e) {
  const passwordValue = inputPassword.value;
  const passwordCheckValue = inputPasswordCheck.value;

  removeRedMessage(inputPasswordCheck);

  if (passwordValue !== passwordCheckValue) {
    printDiff();
  } else {
    checkValid = true;
  }
}

export { enterPasswordCheckMessage, checkValid };