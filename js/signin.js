const email = document.getElementById("email");
const pw = document.getElementById("pw");
const errorMessage = {
  null: document.querySelector(".error-message__null"),
  wrong: document.querySelector(".error-message__wrong"),
  used: document.querySelector(".error-message__used"),
  eight: document.querySelector(".error-message__eight"),
};

// 이메일 유효성 검증
function checkEmail() {
  const emailValue = email.value;

  // 에러 메시지 초기화
  email.classList.remove("error-input");
  for (let error in errorMessage) {
    errorMessage[error].classList.remove("display");
  }

  if (!emailValue.includes("@")) {
    email.classList.add("error-input");
    if (emailValue == "") {
      // 이메일이 비어있다.
      errorMessage.null.classList.add("display");
    } else {
      // 이메일에 @가 없지만 비어있지 않다.
      errorMessage.wrong.classList.add("display");
    }
  } else if (emailValue === "test@codeit.com") {
    // 이미 사용 중인 이메일이다.
    email.classList.add("error-input");
    errorMessage.used.classList.add("display");
  }
  // 정상적인 이메일 형태이다.
  return;
}

function checkPassword() {
  const pwValue = pw.value;

  // 값이 8자 미만
  // 문자열만 or 숫자만
}

email.addEventListener("focusout", checkEmail);
pw.addEventListener("focusout", checkPassword);
