import { inputEmail, inputPassword, eyeIcon, form } from "./tags.js";
import { createTag, removeTag, checkEmail } from "./function.js";
import userData from "./emailData.js";
let emailEnable = false; //이메일 사용 가능 여부
let passwordEnable = false; //패스워드 사용 가능 여부
function emailCheck(e) {
  //이메일 확인 함수
  if (e.type === "focusout" || (e.type === "keyup" && e.key === "Enter")) {
    let input = e.target;
    if (input.value === "") {
      createTag(input, "이메일을 입력해주세요");
    } else if (!checkEmail(input.value)) {
      createTag(input, "올바른 이메일이 아닙니다.");
    } else {
      emailEnable = true;
    }
  }
}

function passwordCheck(e) {
  //패스워드 확인 함수
  if (e.type === "focusout" || (e.type === "keyup" && e.key === "Enter")) {
    let input = e.target;
    if (input.value === "") {
      createTag(input, "비밀번호를 입력해주세요");
    } else if (
      input.value.length < 9 ||
      !/[a-zA-Z]/.test(input.value) ||
      !/\d/.test(input.value)
    ) {
      createTag(input, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
      passwordEnable = true;
    }
  }
}
function login(e) {
  //로그인 가능 여부 확인 판단 후 form 제출 조건에 부합되지 않으면 e정지!
  const user = userData.find((el) => el.email === inputEmail.value);
  if (emailEnable && passwordEnable) {
    if (user === undefined) {
      createTag(inputEmail, "존재하지 않는 이메일 입니다.");
      e.preventDefault();
    } else if (user.password !== inputPassword.value) {
      createTag(inputPassword, "비밀번호가 틀렸습니다.");
      e.preventDefault();
    }
  } else {
    e.preventDefault();
  }
}

function init(e) {
  //추가된 span 내용 삭제 및 보더 값 삭제
  let input = e.target;
  removeTag(input);
}
function passwordOpen() {
  //패스워드 보이게 안보이게 하는 기능 추가
  const icon =
    eyeIcon[0].getAttribute("src") === "./images/eye_off.svg"
      ? "./images/eye-on.svg"
      : "./images/eye_off.svg";
  eyeIcon[0].setAttribute("src", icon);
  const type =
    inputPassword.getAttribute("type") === "password" ? "text" : "password";
  inputPassword.setAttribute("type", type);
}
//이벤트 리스너
inputEmail.addEventListener("focusout", (e) => emailCheck(e, "이메일"));
inputEmail.addEventListener("keyup", (e) => emailCheck(e, "이메일"));
inputPassword.addEventListener("focusout", (e) => passwordCheck(e, "비밀번호"));
inputPassword.addEventListener("keyup", (e) => passwordCheck(e, "비밀번호"));
inputEmail.addEventListener("focusin", init);
inputPassword.addEventListener("focusin", init);
eyeIcon[0].addEventListener("click", passwordOpen);
form.addEventListener("submit", login);
