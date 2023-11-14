import { inputPassword } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./error_message.js";

let passwordValid = "";

function printEmpty() {
  createRedMessage(inputPassword, "비밀번호를 입력해주세요.");
}

function printWorng() {
  createRedMessage(
    inputPassword,
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  );
}

// 비밀번호 유효성을 검증하는 함수
function enterPasswordMessage() {
  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const passwordValue = inputPassword.value;
  passwordValid = false;

  removeRedMessage(inputPassword);

  if (!passwordValue) {
    printEmpty();
  } else if (!passwordFormat.test(passwordValue)) {
    printWorng();
  } else {
    passwordValid = true;
  }
}

export { enterPasswordMessage, passwordValid };
