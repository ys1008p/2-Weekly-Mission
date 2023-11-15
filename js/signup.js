const emailInput = document.querySelector("#username");
// const emailErrorText = document.querySelector(".email_error_text");

const pwInput = document.querySelector("#password");
const pwErrorText = document.querySelector(".pw_error_text");
const pwCheckInput = document.querySelector("#password_check");
const pwCheckErrorText = document.querySelector(".pw_check_error_text");

const loginButton = document.querySelector(".login-button");

// 한 객체에 유효성 검사하는 변수 저장
const formState = {
  email: false,
  pw: false,
  pwCheck: false,
};

// error_text div는 미리 만들어두고, e.target의 다음 형제 요소가 선택되도록
function checkEmail(e) {
  const emailErrorText = e.target.nextElementSibling;
  if (e.target.value === "") {
    e.target.classList.add("error");
    emailErrorText.classList.add("error");
    emailErrorText.innerHTML = "이메일을 입력해주세요.";
  } else if (e.target.value === "test@codeit.com") {
    e.target.classList.add("error");
    emailErrorText.classList.add("error");
    emailErrorText.innerHTML = "이미 사용 중인 이메일입니다.";
  } else if (e.target.value.includes("@") == false) {
    e.target.classList.add("error");
    emailErrorText.classList.add("error");
    emailErrorText.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    e.target.classList.remove("error");
    emailErrorText.classList.remove("error");
    emailErrorText.innerHTML = "";
    formState.email = true;
  }
}

function checkPw(e) {
  const engOnly = /^[A-Za-z]+$/;
  // pw
  const pwErrorText = e.target.parentElement.lastElementChild;

  if (
    e.target.value.length < 8 ||
    isNaN(e.target.value) !== true ||
    engOnly.test(e.target.value)
  ) {
    e.target.classList.add("error");
    pwErrorText.classList.add("error");
    pwErrorText.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (e.target.value === "") {
    e.target.classList.add("error");
    pwErrorText.classList.add("error");
    pwErrorText.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    e.target.classList.remove("error");
    pwErrorText.classList.remove("error");
    pwErrorText.innerHTML = "";
    formState.pw = true;
  }
}

function pwCheckConfirmation(e) {
  if (pwInput.value !== e.target.value) {
    e.target.classList.add("error");
    pwInput.classList.add("error");
    pwCheckErrorText.innerHTML = "비밀번호가 일치하지 않아요";
  } else {
    pwInput.classList.remove("error");
    pwChece.targetkInput.classList.remove("error");
    pwCheckErrorText.innerHTML = "";
    formState.pwCheck = true;
  }
}

function signup(e) {
  if (formState.email && formState.pw) {
    if (e.key === "Enter") {
      location.href = "./folder";
    } else {
      location.href = "./folder";
    }
  }
}

emailInput.addEventListener("focusout", checkEmail);
pwInput.addEventListener("focusout", checkPw);
pwCheckInput.addEventListener("focusout", pwCheckConfirmation);
loginButton.addEventListener("click", signup);
pwCheckInput.addEventListener("keydown", signup);
