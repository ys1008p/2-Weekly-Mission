import {
  inputEmail,
  inputPassword,
  inputPasswordCheck,
  eyeIcon,
} from "./tags.js";
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
      createTag(input, "이미 사용중인 이메일입니다.");
    }
  }
}

function PasswordCheck(e, type) {
  let input = e.target;
  if (input.value === "" && type === "비밀번호") {
    createTag(input, "비밀번호를 입력해주세요");
  } else if (
    input.value.length < 9 ||
    !/[a-zA-Z]/.test(input.value) ||
    !/\d/.test(input.value)
  ) {
    createTag(input, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else if (type === "비밀번호체크" && input.value !== inputPassword.value) {
    createTag(input, "비밀번호가 일치하지 않습니다.");
  }
}
function init(e) {
  let input = e.target;
  removeTag(input);
}
function passwordOpen(e) {
  const icon =
    eyeIcon[0].getAttribute("src") === "./images/eye-on.svg"
      ? "./images/eye_off.svg"
      : "./images/eye-on.svg";
  eyeIcon[0].setAttribute("src", icon);
  const type =
    inputPassword.getAttribute("type") === "text" ? "password" : "text";
  inputPassword.setAttribute("type", type);
}
function passwordCheckOpen() {
  const icon =
    eyeIcon[1].getAttribute("src") === "./images/eye-on.svg"
      ? "./images/eye_off.svg"
      : "./images/eye-on.svg";
  eyeIcon[1].setAttribute("src", icon);
  const type =
    inputPasswordCheck.getAttribute("type") === "text" ? "password" : "text";
  inputPasswordCheck.setAttribute("type", type);
}
inputEmail.addEventListener("focusout", (e) => emailCheck(e, "이메일"));
inputPassword.addEventListener("focusout", (e) => PasswordCheck(e, "비밀번호"));
inputEmail.addEventListener("focusin", init);
inputPassword.addEventListener("focusin", init);
inputPasswordCheck.addEventListener("focusout", (e) =>
  PasswordCheck(e, "비밀번호체크")
);
inputPasswordCheck.addEventListener("focusin", init);
eyeIcon[0].addEventListener("click", passwordOpen);
eyeIcon[1].addEventListener("click", passwordCheckOpen);
