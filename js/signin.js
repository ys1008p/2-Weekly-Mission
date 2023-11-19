const email = document.getElementById("email");
const pw = document.getElementById("pw");
const loginBtn = document.querySelector(".signin__input-area--btn");
const pwOpenEye = document.querySelector(".open-eye");
const pwClosedEye = document.querySelector(".closed-eye");

const emailError = document.querySelector(".error-message__check-email");
const pwError = document.querySelector(".error-message__check-pw");
const pwNullError = document.querySelector(".error-message__null");

// 고유 이메일과 비밀번호
const myEmail = "test@codeit.com";
const myPw = "codeit101";

// 아이디 유효성 검증
function validEmail() {
  // 에러 메시지 초기화
  email.classList.remove("error-input");
  emailError.classList.remove("display");

  if (!email.value) {
    email.classList.add("error-input");
    emailError.classList.add("display");
  }
}

// 비밀번호 유효성 검증
function validPassword() {
  // 에러 메시지 초기화
  pw.classList.remove("error-input");
  pwNullError.classList.remove("display");
  pwError.classList.remove("display");

  if (!pw.value) {
    pw.classList.add("error-input");
    pwNullError.classList.add("display");
  } else {
    pw.classList.add("error-input");
    pwError.classList.add("display");
  }
}

// 로그인 버튼 클릭 이벤트
function signin() {
  if (email.value === myEmail && pw.value === myPw) {
    const targetPage = "./folder";
    window.location.href = targetPage;
  } else {
    validEmail();
    validPassword();
  }
}

// 비밀번호의 눈 버튼 클릭 이벤트
function eyeToggle() {
  if (pw.type === "password") {
    pwOpenEye.classList.add("display");
    pwClosedEye.classList.remove("display");
    pw.setAttribute("type", "text");
  } else if (pw.type === "text") {
    pwOpenEye.classList.remove("display");
    pwClosedEye.classList.add("display");
    pw.setAttribute("type", "password");
  }
}

email.addEventListener("focusout", validEmail);
pw.addEventListener("focusout", validPassword);
pwOpenEye.addEventListener("click", eyeToggle);
pwClosedEye.addEventListener("click", eyeToggle);
loginBtn.addEventListener("click", signin);
