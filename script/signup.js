import {
  inputEmail,
  inputPassword,
  inputPasswordCheck,
  eyeIcon,
  form,
} from "./tags.js";
import { createTag, removeTag, checkEmail } from "./function.js";
window.addEventListener("DOMContentLoaded", () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "/folder";
    localStorage.removeItem("accessToken");
  }
});

let emailEnable = false; //이메일 사용 가능 여부
let passwordEnable = false; // 패스워드 사용 가능 여부

function emailCheck(e) {
  //이메일 사용 가능 여부 판단 함수
  if (e.type === "focusout" || (e.type === "keyup" && e.key === "Enter")) {
    let input = e.target;
    if (input.value === "") {
      createTag(input, "이메일을 입력해주세요");
    } else if (!checkEmail(input.value)) {
      createTag(input, "올바른 이메일이 아닙니다.");
    } else {
      const user = fetch(`https://bootcamp-api.codeit.kr/api/check-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: input.value }),
      }).then((response) => {
        if (response.status === 409) {
          createTag(input, "이미 사용중인 이메일입니다.");
        }
      });
      emailEnable = true;
    }
  }
}

function PasswordCheck(e, type) {
  //패스워드 사용 가능 여부 판단 함수
  const MIN_PASSWORD = 9;
  if (e.type === "focusout" || (e.type === "keyup" && e.key === "Enter")) {
    let input = e.target;
    if (
      input.value === "" &&
      (type === "비밀번호" || type === "비밀번호체크")
    ) {
      createTag(input, "비밀번호를 입력해주세요");
    } else if (
      input.value.length < MIN_PASSWORD ||
      !/[a-zA-Z]/.test(input.value) ||
      !/\d/.test(input.value)
    ) {
      createTag(input, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else if (type === "비밀번호체크" && input.value !== inputPassword.value) {
      createTag(input, "비밀번호가 일치하지 않습니다.");
    }
    passwordEnable = true;
  }
}
function init(e) {
  //에러로 판단 된 내용 삭제
  let input = e.target;
  removeTag(input);
}
function passwordOpen() {
  //패스워드 보이게 하는 함수
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
function signup(e) {
  //회원 가입을 위한 조건 판단 후 form 제출
  if (!(emailEnable && passwordEnable)) {
    e.preventDefault();
  } else {
    fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail.value,
        password: inputPassword.value,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log(emailEnable);
        console.log(passwordEnable);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
} //이벤트 리스너
inputEmail.addEventListener("focusout", (e) => emailCheck(e, "이메일"));
inputEmail.addEventListener("keyup", (e) => emailCheck(e, "이메일"));
inputPassword.addEventListener("focusout", (e) => PasswordCheck(e, "비밀번호"));
inputPassword.addEventListener("keyup", (e) => PasswordCheck(e, "비밀번호"));
inputEmail.addEventListener("focusin", init);
inputPassword.addEventListener("focusin", init);
inputPasswordCheck.addEventListener("focusout", (e) =>
  PasswordCheck(e, "비밀번호체크")
);
inputPasswordCheck.addEventListener("keyup", (e) =>
  PasswordCheck(e, "비밀번호체크")
);
inputPasswordCheck.addEventListener("focusin", init);
eyeIcon[0].addEventListener("click", passwordOpen);
eyeIcon[1].addEventListener("click", passwordCheckOpen);
form.addEventListener("submit", signup);
