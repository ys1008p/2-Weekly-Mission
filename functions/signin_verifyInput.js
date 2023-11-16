import { removeRedMessage, createRedMessage } from "./error_message.js";
import { isExistUser } from "./user_exist.js";

function printMessage(inputCurrent, inputType, action) {
  createRedMessage(inputCurrent, `${inputType}을 ${action}해주세요.`);
}

// 이메일과 비밀번호 유효성을 검증하는 함수
function enterMessage(e, inputType, inputCurrent, inputPair) {
  const currentValue = inputCurrent.value;
  const pairValue = inputPair.value;

  removeRedMessage(inputCurrent);

  if (!currentValue) {
    printMessage(inputCurrent, inputType, "입력");
  } else if (e.type === "click") {
    if (inputType === "이메일") {
      isExistUser(currentValue, pairValue) ? window.open("/folder", "_self") : printMessage(inputCurrent, inputType, "확인");
    } else if (inputType === "비밀번호") {
      isExistUser(pairValue, currentValue) ? window.open("/folder", "_self") : printMessage(inputCurrent, inputType, "확인");
    }
    
  }
}

export default enterMessage;