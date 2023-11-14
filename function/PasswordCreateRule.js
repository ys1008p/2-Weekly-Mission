//signup.html 에서의  비밀번호 생성 형식체크 
//passwordInput 관한 css스타일 id pattern check 및 오류 메시지
import { passwordInput, passwordError } from "../tag.js";
import { passwordAddClass, passwordRemoveClass } from "../script/function.js";

function passwordInputFocusoutEvent() {
  const password = passwordInput.value;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (password === "") {
    passwordAddClass();
    passwordError.textContent = "비밀번호를 입력해주세요.";
    return false;
  } else if (!passwordPattern.test(password)) {
    passwordAddClass();
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요";
    return false;
  } else {
    passwordRemoveClass();
    return true;
  }
}
export default passwordInputFocusoutEvent;
