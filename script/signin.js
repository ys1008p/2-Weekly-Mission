import { inputEmail, inputPassword, eyeIcon } from "./tags.js";
import {
  createTag,
  removeTag,
  checkEmail,
  emailDuplicateCheck,
} from "./function.js";

function emailCheck(e) {
  let input = e.target;
  if (input.value === "") {
    createTag(input, "이메일을 입력해주세요");
  } else if (!checkEmail(input.value)) {
    createTag(input, "올바른 이메일이 아닙니다.");
  } else {
    const user = emailDuplicateCheck(input.value);
    if (user) {
      e.preventDefault();
    }
  }
}

function passwordCheck(e) {
  let input = e.target;
  if (input.value === "") {
    createTag(input, "비밀번호를 입력해주세요");
  } else if (
    input.value.length < 9 ||
    !/[a-zA-Z]/.test(input.value) ||
    !/\d/.test(input.value)
  ) {
    createTag(input, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
}

function init(e) {
  let input = e.target;
  removeTag(input);
}
function passwordOpen() {
  const icon =
    eyeIcon.getAttribute("src") === "./images/eye_off.svg"
      ? "./images/eye-on.svg"
      : "./images/eye_off.svg";
  eyeIcon.setAttribute("src", icon);
  const type =
    inputPassword.getAttribute("type") === "password" ? "text" : "password";
  inputPassword.setAttribute("type", type);
}

inputEmail.addEventListener("focusout", (e) => emailCheck(e, "이메일")); //이벤트가 발생하면 실행
inputPassword.addEventListener("focusout", (e) => passwordCheck(e, "비밀번호"));
inputEmail.addEventListener("focusin", init);
inputPassword.addEventListener("focusin", init);
eyeIcon.addEventListener("click", passwordOpen);
