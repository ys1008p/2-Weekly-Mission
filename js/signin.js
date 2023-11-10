const email_input = document.querySelector("#username");
const email_error_text = document.querySelector(".email_error_text");
const pw_input = document.querySelector("#password");
const pw_error_text = document.querySelector(".pw_error_text");

function checkEmail() {
  // 이메일 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와
  // 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지가 보입니다
  if (email_input.value === "") {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "이메일을 입력해주세요.";
  } else {
    // 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우
    // input에 빨강색 테두리와 아래에
    // “올바른 이메일 주소가 아닙니다.” 빨강색 에러 메세지가 보입니다
    if (email_input.value.includes("@") == false) {
      email_input.classList.add("inputError");
      email_error_text.innerHTML = "올바른 이메일 주소가 아닙니다.";
    } else {
      email_error_text.innerHTML = "";
    }
  }

  // 이메일 input에서 focus out 일 때, input 값이 test@codeit.com 일 경우
  // input에 빨강색 테두리와 아래에 “이미 사용 중인 이메일입니다.” 빨강색 에러 메세지가 보입니다.
  if (email_input.value === "test@codeit.com") {
    email_input.classList.add("inputError");
    email_error_text.innerHTML = "이미 사용 중인 이메일입니다.";
  }
}

//  로그인
// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지가 보입니다. 이외의 로그인 시도의 경우 이메일, 비밀번호 input에 빨강색 테두리와 각각의 input아래에 “이메일을 확인해주세요.”, “비밀번호를 확인해주세요.” 빨강색 에러 메세지가 보입니다.

function checkPw() {
  if (pw_input.value === "") {
    pw_input.classList.add("inputError");
    pw_error_text.innerHTML = "비밀번호를 입력해주세요.";
  }
}

email_input.addEventListener("focusout", checkEmail);
pw_input.addEventListener("focusout", checkPw);
