//signin.html의 passwordInput 관한 css스타일 id pattern check 및 오류 메시지
import { passwordInput, passwordError } from "../tag.js";
import {
  passwordAddClass,
  passwordRemoveClass,
} from "../function/AddRemoveFunction.js";

function passwordFocusoutEvent() {
  if (passwordInput.value === "") {
    passwordAddClass();
    passwordError.textContent = "비밀번호를 입력해주세요.";
    return false
  } else {
    passwordRemoveClass();
    return true
  }
}

export default passwordFocusoutEvent;
