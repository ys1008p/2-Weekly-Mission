const email = document.getElementById("email");
const pw = document.getElementById("pw");
const loginBtn = document.querySelector(".signin__input-area--btn");

const pwNullError = document.querySelector(".error-message__null");

// 비밀번호 null값 이벤트
function nullPassword() {
  // 에러 메시지 초기화
  pw.classList.remove("error-input");
  pwNullError.classList.remove("display");

  if (!pw.value) {
    pw.classList.add("error-input");
    pwNullError.classList.add("display");
  }
}

// 로그인 버튼 클릭 이벤트
function signin() {
  if (email.value === "test@codeit.com" && pw.value === "codeit101") {
    const targetPage = "./folder.html";
    window.location.href = targetPage;
  }
}

pw.addEventListener("focusout", nullPassword);
loginBtn.addEventListener("click", signin);
