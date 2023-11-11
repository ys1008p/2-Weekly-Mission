const email_input = document.querySelector("#username");
const email_error_text = document.querySelector(".email_error_text");
const pw_input = document.querySelector("#password");
const pw_error_text = document.querySelector(".pw_error_text");
const login_button = document.querySelector(".login-button");

function checkEmail() {
  if (email_input.value === "") {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "이메일을 입력해주세요.";
  } else {
    if (email_input.value.includes("@") == false) {
      email_input.classList.add("inputError");
      email_error_text.innerHTML = "올바른 이메일 주소가 아닙니다.";
    } else {
      email_error_text.innerHTML = "";
    }
  }

  if (email_input.value === "test@codeit.com") {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "이미 사용 중인 이메일입니다.";
  }
}

//  로그인

function checkPw() {
  if (pw_input.value === "") {
    pw_input.classList.add("inputError");
    pw_error_text.innerHTML = "비밀번호를 입력해주세요.";
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
