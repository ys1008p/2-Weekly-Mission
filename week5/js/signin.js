import { $submitBtn, $emailInput, $passwordInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignInForm } from "./modules/authEventHandler.js";
import { postSignIn, redirectIfAccessTokenExists } from "./modules/authApiUtils.js";

// 토큰 존재시 folder로 바로 이동
redirectIfAccessTokenExists("./folder.html");

// 로그인, 회원가입 공통 이벤트리스너 호출
initializeSignInForm();

const submitSignInHandler = $submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // post 할 객체 생성
  const user = {
    email: $emailInput.value,
    password: $passwordInput.value,
  };

  // 로그인 api 접근 함수에 전달
  postSignIn(user);
});
