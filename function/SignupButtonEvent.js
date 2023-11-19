/*signup의 회원가입 버튼시 동작 
이메일의 오류부분체크 true
비밀번호 형식과 빈문자열에 관한 오류 체크 true
비밀번호와 비밀번호 체크 Matching 으로 값을 비교 체크 true 
3가지 경우에서 모두 true 값이 출력해야 가상으로 회원가입이 되었다고 판단 page를 넘김 
한개라도 false 값이 있으면 동작 X, false 부분의 오류를 표시해주는 이벤트*/
import {
  passwordInputFocusoutEvent,
  passwordMatchingEvent,
  emailInputFocusoutEventSignup,
} from "../script/function.js";
import { emailInput, passwordInput } from "../tag.js";

async function loginAfterSignup(userEmail, userPassword) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });

    if (response.ok) {
      return true;
    } else {
      console.error("로그인 실패", response.status);
      return false;
    }
  } catch (err) {
    console.error("로그인 오류", err);
    return false;
  }
}


async function signupButton(userEmail, userPassword) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });

    if (response.ok) {
      const userInfo = await response.json();
      localStorage.setItem('accessToken', userInfo.accessToken);

      const loginResult = await loginAfterSignup(userEmail, userPassword);
      if(loginResult){return true;}
 
    } else {
      return false;
    }
  } catch (err) {
    console.error("가입 오류", err);
    return false; // 에러 발생 시에도 가입 실패로 처리
  }
}

async function buttonClickEvent(e) {
  e.preventDefault();
  let userConfirmCheck = emailInputFocusoutEventSignup();
  let passwordConfirmCheck = passwordInputFocusoutEvent();
  let passwordMatchingCheck = passwordMatchingEvent();
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  if (userConfirmCheck && passwordConfirmCheck && passwordMatchingCheck) {
    const signupResult = await signupButton(userEmail, userPassword);

    if (signupResult) {
      alert(`가입을 축하합니다 ${userEmail}님`);
      window.location.href = "/folder/folder.html";
    } else {
      // 가입 실패 시의 로직
      alert("가입에 실패했습니다. 다시 시도해주세요.");
    }
  }
}

export { buttonClickEvent };
