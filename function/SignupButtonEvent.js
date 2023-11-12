/*signup의 회원가입 버튼시 동작 
이메일의 오류부분체크 true
비밀번호 형식과 빈문자열에 관한 오류 체크 true
비밀번호와 비밀번호 체크 Matching 으로 값을 비교 체크 true 
3가지 경우에서 모두 true 값이 출력해야 가상으로 회원가입이 되었다고 판단 page를 넘김 
한개라도 false 값이 있으면 동작 X, false 부분의 오류를 표시해주는 이벤트*/
import {
  userDuplicateCheck,
  passwordInputFocusoutEvent,
  passwordMatchingEvent,
  emailInputFocusoutEvent,

} from "../script/function.js";

function buttonClickEvent(e) {
  e.preventDefault();
  let userConfirmCheck = userDuplicateCheck();
  let passwordConfirmCheck = passwordInputFocusoutEvent();
  let passwordMachingCheck = passwordMatchingEvent();
  console.log(userConfirmCheck);
  console.log(passwordConfirmCheck);
  console.log(passwordMachingCheck);
  if (
    userConfirmCheck &&
    passwordConfirmCheck &&
    passwordMachingCheck
  ) {
    window.location.href = "/folder/folder.html";
  } else {
    emailInputFocusoutEvent;
    passwordInputFocusoutEvent;
    userDuplicateCheck;

  }
}
export { buttonClickEvent };
