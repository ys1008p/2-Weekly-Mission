import { inputEmail, inputPassword } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./error_message.js";

const userInfo = { "test@codeit.com": "codeit101" };

function printEmpty() {
  createRedMessage(inputEmail, "이메일을 입력해주세요.");
}

function printCheck() {
  createRedMessage(inputEmail, "이메일을 확인해주세요.");
}

// 이메일 유효성을 검증하는 함수
function enterEmailMessage(e) {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  removeRedMessage(inputEmail);

  if (!emailValue) {
    printEmpty();
  } else if (e.type === "click") {
    userInfo[emailValue] === passwordValue
      ? window.open("/folder", "_self")
      : printCheck();
  }
}

export default enterEmailMessage;
