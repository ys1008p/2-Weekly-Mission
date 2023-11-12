/*password 와 passwordCheck 두 input의 값을 비교하여 일치 여부를 파악하는 함수 
*/
import {
  passwordInput,
  passwordInputCheck,
  passwordErrorCheck,
} from "../tag.js";

import {
  passwordAddClass,
  passwordInputCheckAddClass,
  passwordRemoveClass,
  passwordErrorCheckRemoveClass,
} from "../script/function.js";

function passwordMatchingEvent() {
  const password = passwordInput.value;
  const passwordCheck = passwordInputCheck.value;
  if (password === "" || passwordCheck === "") {
    passwordErrorCheck.classList.remove("confirm-message");
    passwordAddClass();
    passwordErrorCheck.textContent = "비밀번호를 입력해주세요.";
    passwordInputCheckAddClass();
    return false;
  } else if (password !== passwordCheck) {
    passwordErrorCheck.classList.remove("confirm-message");
    passwordAddClass();
    passwordErrorCheck.textContent = "비밀번호가 일치하지 않습니다.";
    passwordInputCheckAddClass();
    return false;
  } else {
    passwordRemoveClass();
    passwordErrorCheckRemoveClass();
    passwordErrorCheck.textContent = "비밀번호가 일치합니다.";
    passwordErrorCheck.classList.add("confirm-message");
    return true;
  }
}
export { passwordMatchingEvent };
