const email_input = document.querySelector("#username");
const email_error_text = document.querySelector(".email_error_text");

const pw_input = document.querySelector("#password");
const pw_error_text = document.querySelector(".pw_error_text");

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

function login() {
  if (email_input === "test@codeit.com" && pw_input === "codeit101") {
    location.href = "./folder";
  } else {
    email_error_text.innerHTML = "이메일을 확인해주세요.";
    pw_error_text.innerHTML = "비밀번호을 확인해주세요.";
  }
}
email_input.addEventListener("focusout", checkEmail);
pw_input.addEventListener("focusout", checkPw);
login_button.addEventListener("click", login);
