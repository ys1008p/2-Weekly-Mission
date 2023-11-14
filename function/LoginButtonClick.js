/*signin.html의 로그인 버튼에 관한 사항 userinfo의 정보가 있다면 folder 페이지로 넘어가는 동작 함수
오류시 오류부분 오류메시지 표시*/
import { userInfo } from "../registerUser.js";
import {
  emailInput,
  passwordInput,
  emailError,
  passwordError,
} from "../tag.js";
import {
  emailRemoveClass,
  passwordRemoveClass,
  emailAddClass,
  passwordAddClass,
} from "../function/AddRemoveFunction.js";

function buttonClickEvent(e) {
  e.preventDefault();
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  let userCheck = false;

  for (const user of userInfo) {
    if (user.email === userEmail && user.password === userPassword) {
      userCheck = true;
      break;
    }
  }
  if (userCheck) {
    emailRemoveClass();
    passwordRemoveClass();
    window.location.href = "/folder/folder.html";
  } else {
    emailAddClass();
    emailError.textContent = "이메일을 확인해주세요.";
    passwordAddClass();
    passwordError.textContent = "비밀번호를 확인해주세요.";
  }
}
export { buttonClickEvent };
