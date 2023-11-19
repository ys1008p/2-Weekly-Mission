import {
  emailInput,
  passwordInput,
  signInput,
  eyeImg,
  button,
} from "../tag.js";
import {
  emailInputFocusoutEvent,
  passwordFocusoutEvent,
  eyeImgClickEvent,
  buttonClickEvent,
} from "../script/function.js";


//input태그 placeholder 추가 사항
emailInput.setAttribute("placeholder", "E-mail을 입력해주세요");
passwordInput.setAttribute("placeholder", "비밀번호를 입력해주세요");

//signin.js 필요 이벤트추가
emailInput.addEventListener("focusout", emailInputFocusoutEvent);
passwordInput.addEventListener("focusout", passwordFocusoutEvent);
eyeImg.addEventListener("click", () => {
  eyeImgClickEvent(signInput, eyeImg);
});
button.addEventListener("click", buttonClickEvent);

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
  window.open("/folder/folder.html", "_blank");
  }