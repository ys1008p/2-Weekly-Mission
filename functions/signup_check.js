import { errorMessages } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./common.js";

let checkValid = false;

// 비밀번호 확인 유효성을 검증하는 함수
function enterPasswordCheckMessage(input, inputPassword) {
  const passwordValue = inputPassword.value;
  const passwordCheckValue = input.value;

  removeRedMessage(input);

  if (passwordValue !== passwordCheckValue) {
    createRedMessage(input, errorMessages.diffWithPassword);
  } else {
    checkValid = true;
  }
}

export { enterPasswordCheckMessage, checkValid };
