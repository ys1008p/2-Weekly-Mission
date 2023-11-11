const email = document.getElementById("email");
const pw = document.getElementById("pw");
const emailError = {
  null: document.querySelector(".error-message__null"),
  wrong: document.querySelector(".error-message__wrong"),
  used: document.querySelector(".error-message__used"),
};
const pwError = document.querySelector(".error-message__eight");

// 이메일 유효성 검증
function checkEmail() {
  const emailValue = email.value;

  // 에러 메시지 초기화
  email.classList.remove("error-input");
  for (let error in emailError) {
    emailError[error].classList.remove("display");
  }

  if (!emailValue.includes("@")) {
    email.classList.add("error-input");
    if (emailValue == "") {
      // 이메일이 비어있다.
      emailError.null.classList.add("display");
    } else {
      // 이메일에 @가 없지만 비어있지 않다.
      emailError.wrong.classList.add("display");
    }
  } else if (emailValue === "test@codeit.com") {
    // 이미 사용 중인 이메일이다.
    email.classList.add("error-input");
    emailError.used.classList.add("display");
  }
  // 정상적인 이메일 형태이다.
}

// 비밀번호 유효성 검증
function checkPassword() {
  const pwValue = pw.value;

  pw.classList.remove("error-input");
  pwError.classList.remove("display");

  if (
    pwValue.length < 8 || // 값이 8자 미만일 때
    pwValue.match(/\d+/g) === null || // 문자열만 있을 때
    pwValue.match(/\D+/g) === null // 숫자만 있을 때
  ) {
    pw.classList.add("error-input");
    pwError.classList.add("display");
  }
  // 정상적인 비밀번호 형태이다.
}

email.addEventListener("focusout", checkEmail);
pw.addEventListener("focusout", checkPassword);
