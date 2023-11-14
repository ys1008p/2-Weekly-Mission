//emailInput 관한 css스타일 id pattern check 및 오류 메시
import { emailInput, emailError } from "../tag.js";
import {
  emailAddClass,
  emailRemoveClass,
} from "../function/AddRemoveFunction.js";

function emailInputFocusoutEvent() {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailInput.value === "") {
    emailAddClass();
    emailError.textContent = "이메일을 입력해주세요.";
    return false;
  } else if (!emailPattern.test(email)) {
    emailAddClass();
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    return false;
  } else {
    emailRemoveClass();
    return true;
  }
}
export default emailInputFocusoutEvent;
