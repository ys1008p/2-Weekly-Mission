import { removeRedMessage, createRedMessage } from "./common.js";

// 이메일과 비밀번호 유효성을 검증하는 함수
function enterMessage(input, eventType) {
  const inputType = input.id;
  const inputValue = input.value;

  removeRedMessage(input);

  if (!inputValue) {
    if (inputType === "useremail")
      createRedMessage(input, "이메일을 입력해주세요.");
    else if (inputType === "password")
      createRedMessage(input, "비밀번호를 입력해주세요.");
  } else if (eventType === "click") {
    if (inputType === "useremail")
      createRedMessage(input, "이메일을 확인해주세요.");
    else if (inputType === "password")
      createRedMessage(input, "비밀번호를 확인해주세요.");
  }
}

export { enterMessage };
