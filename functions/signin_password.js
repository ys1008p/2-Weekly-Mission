import { inputEmail, inputPassword } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./error_message.js";

const userInfo = { "test@codeit.com": "codeit101" };

function printEmpty() {
  createRedMessage(inputPassword, "비밀번호를 입력해주세요.");
}

function printCheck() {
  createRedMessage(inputPassword, "비밀번호를 확인해주세요.");
}

// 비밀번호 유효성을 검증하는 함수
function enterPasswordMessage(e) {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  removeRedMessage(inputPassword);

  if (!passwordValue) {
    printEmpty();
  } else if (e.type === "click") {
    userInfo[emailValue] === passwordValue
      ? window.open("/folder", "_self")
      : printCheck();
  }
}

export default enterPasswordMessage;
