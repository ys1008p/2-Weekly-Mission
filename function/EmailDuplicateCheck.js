/*기본제공 let userInfo = [{ email: "test@codeit.com", password: "codeit101" }];에서
emailinputValue와 test@codeit.com 비교하여 중복시 오류메시지 표시에 관한 함수*/
import { emailInput, emailError } from "../tag.js";
import {
  emailAddClass,
  emailRemoveClass,
  successTextClass
} from "../function/AddRemoveFunction.js";


async function userDuplicateEmailCheck() {
  const userEmail =  emailInput.value;

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email : userEmail}),
    });
    if (response.status === 200) {
      emailError.textContent = "사용가능한 이메일 입니다.";
      console.log(`ststus : ${response.status}, 사용가능 이메일`)
      successTextClass();
    } else if (response.status === 409) {
      emailAddClass();
      emailError.textContent = "사용중인 이메일 입니다.";
      console.error("이메일 중복", response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

function emailInputFocusoutEventSignup() {
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
    userDuplicateEmailCheck();
    emailRemoveClass();
    return true;
  }
}

export { emailInputFocusoutEventSignup };
