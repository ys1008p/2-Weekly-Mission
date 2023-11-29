import { $submitBtn, $emailInput, $passwordInput, $passwordVerifyInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignUpForm } from "./modules/authEventHandler.js";
import { postSignUp, redirectIfAccessTokenExists } from "./modules/authApiUtils.js";
import { validateEmail, validatePassword, validatePasswordVerify } from "./modules/validator.js";

// 토큰 존재시 folder로 바로 이동
redirectIfAccessTokenExists("./folder.html");

// 로그인, 회원가입 공통 이벤트리스너 호출
initializeSignUpForm();

const submitSignUpHandler = $submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 먼저 각 input 값 유효성 결과 저장
  const emailValidation = validateEmail($emailInput.value);
  const passwordValidation = validatePassword($passwordInput.value);
  const passwordVerifyValidation = validatePasswordVerify($passwordInput.value, $passwordVerifyInput.value);

  // post 할 객체 생성
  const newUser = {
    email: $emailInput.value,
    password: $passwordInput.value,
  };

  // 회원가입 api 접근 함수에 유효성과 객체 전달
  postSignUp(newUser, emailValidation, passwordValidation, passwordVerifyValidation);
});
