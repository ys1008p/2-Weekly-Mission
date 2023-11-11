const email_input = document.querySelector("#username");
const email_error_text = document.querySelector(".email_error_text");

const pw_input = document.querySelector("#password");
const pw_error_text = document.querySelector(".pw_error_text");
const pw_check_input = document.querySelector("#password_check");
const pw_check_error_text = document.querySelector(".pw_check_error_text");

const login_button = document.querySelector(".login-button");

let validEmail = false;
let validPw = false;

function checkEmail() {
  if (email_input.value === "") {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "이메일을 입력해주세요.";
  } else if (email_input.value === "test@codeit.com") {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "이미 사용 중인 이메일입니다.";
  } else if (email_input.value.includes("@") == false) {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    email_input.classList.toggle("inputError");
    email_error_text.innerHTML = "";
    validEmail = true;
  }
}

function checkPw() {
  let engOnly = /^[A-Za-z]+$/;

  if (
    pw_input.value.length < 8 ||
    isNaN(pw_input.value) !== true ||
    engOnly.test(pw_input.value)
  ) {
    console.log(false);
    console.log(pw_input.value);
    pw_input.classList.add("inputError");
    pw_error_text.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (pw_input.value === "") {
    pw_input.classList.add("inputError");
    pw_error_text.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    pw_input.classList.toggle("inputError");
    pw_error_text.innerHTML = "";
  }
}

function comparePw() {
  if (pw_input.value !== pw_check_input.value) {
    pw_check_input.classList.add("inputError");
    pw_input.classList.add("inputError");
    pw_check_error_text.innerHTML = "비밀번호가 일치하지 않아요";
  } else {
    pw_input.classList.toggle("inputError");
    pw_check_input.classList.toggle("inputError");
    pw_check_error_text.innerHTML = "";
    validPw = true;
  }
}

function signup(e) {
  if (validEmail && validPw) {
    if (e.key === "Enter") {
      location.href = "./folder";
    } else {
      location.href = "./folder";
    }
  }
}
email_input.addEventListener("focusout", checkEmail);
pw_input.addEventListener("focusout", checkPw);
pw_check_input.addEventListener("focusout", comparePw);
login_button.addEventListener("click", signup);
pw_input.addEventListener("keydown", signup);

// 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 빨강색 테두리와 에러 메세지가 보입니다.
// 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.

// 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 됩니다.

// 이메일, 비밀번호 input에 에러 관련 디자인을 Components 영역의 에러 케이스로 적용합니다.

//심화 요구사항
// 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
// 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
// 로그인, 회원가입 페이지에 공통적으로 사용하는 로직이 있다면,반복하지 않고 공통된 로직을 모듈로 분리해 사용합니다
