const email = document.getElementById("email");
const pw = document.getElementById("pw");
const pwCheck = document.getElementById("pw-check");
const signupBtn = document.querySelector(".signup__input-area--btn");

const emailError = {
  null: document.querySelector(".error-message__null"),
  wrong: document.querySelector(".error-message__wrong"),
  used: document.querySelector(".error-message__used"),
};
const pwError = document.querySelector(".error-message__eight");
const pwCheckError = document.querySelector(".error-message__diff");

// 이메일 유효성 검증
function validEmail() {
  // 에러 메시지 초기화
  email.classList.remove("error-input");
  for (let error in emailError) {
    emailError[error].classList.remove("display");
  }

  if (!email.value.includes("@")) {
    email.classList.add("error-input");
    if (!email.value) {
      // 이메일이 비어있다.
      emailError.null.classList.add("display");
    } else {
      // 이메일에 @가 없지만 비어있지 않다.
      emailError.wrong.classList.add("display");
    }
  } else if (email.value === "test@codeit.com") {
    // 이미 사용 중인 이메일이다.
    email.classList.add("error-input");
    emailError.used.classList.add("display");
  }
}

// 비밀번호 유효성 검증
function validPassword() {
  // 에러 메시지 초기화
  pw.classList.remove("error-input");
  pwError.classList.remove("display");

  if (
    pw.value.length < 8 || // 값이 8자 미만이다.
    pw.value.match(/\d+/g) === null || // 문자열만 있다.
    pw.value.match(/\D+/g) === null // 숫자만 있다.
  ) {
    pw.classList.add("error-input");
    pwError.classList.add("display");
  }
}

// 비밀번호 확인 유효성 검증
function validPwCheck() {
  // 에러 메시지 초기화
  pwCheck.classList.remove("error-input");
  pwCheckError.classList.remove("display");

  // 비밀번호와 비밀번호 확인의 값이 다르다.
  if (pw.value !== pwCheck.value) {
    pwCheck.classList.add("error-input");
    pwCheckError.classList.add("display");
  }
}

// 회원가입 버튼 클릭 이벤트
function signup() {
  validEmail();
  validPassword();
  validPwCheck();
  if (
    email.classList.length === 0 &&
    pw.classList.length === 0 &&
    pwCheck.classList.length === 0
  ) {
    const targetPage = "./folder.html";
    window.location.href = targetPage;
  }
}

email.addEventListener("focusout", validEmail);
pw.addEventListener("focusout", validPassword);
pwCheck.addEventListener("focusout", validPwCheck);
signupBtn.addEventListener("click", signup);

// input들과 button에서 enter를 인식하고 signup()를 호출
for (let element of [email, pw, pwCheck, signupBtn]) {
  element.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      signup();
    }
  });
}
