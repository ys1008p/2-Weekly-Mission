import {
  passwordInputCheck,
  emailInput,
  passwordInput,
  eyeImg,
  signInput,
  eyeImg2,
  signInput2,
  button,
} from "../tag.js";

import {
  eyeImgClickEvent,
  passwordInputFocusoutEvent,
  passwordMatchingEvent,
  emailInputFocusoutEventSignup,
  signupButtonClickEvent,

} from "../script/function.js";

//input태그 placeholder 추가 사항
passwordInputCheck.setAttribute("placeholder", "비밀번호를 확인해주세요");
emailInput.setAttribute("placeholder", "E-mail을 입력해주세요");
passwordInput.setAttribute("placeholder", "비밀번호를 입력해주세요");

//signup.js 필요 이벤트추가
eyeImg.addEventListener("click", () => {
  eyeImgClickEvent(signInput, eyeImg);
});
eyeImg2.addEventListener("click", () => {
  eyeImgClickEvent(signInput2, eyeImg2);
});

passwordInput.addEventListener("focusout", passwordInputFocusoutEvent);
passwordInputCheck.addEventListener("focusout", passwordMatchingEvent);
button.addEventListener("click", signupButtonClickEvent);
emailInput.addEventListener("focusout", emailInputFocusoutEventSignup);

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
  window.open("/folder/folder.html", "_blank");
  }