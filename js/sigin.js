const emailInput = document.getElementById("emailInput");
const noEmail = document.getElementById("noEmail");
const wrongEmail = document.getElementById("wrongEmail");

emailInput.addEventListener("focusout", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInput.value.trim()) {
    // 이메일을 입력해주세요 에러 메세지
    noEmail.style.display = "block";
    wrongEmail.style.display = "none";
    emailInput.style.borderColor = "var(--red)";
  } else if (!emailRegex.test(emailInput.value)) {
    // 이메일 형식 오류 에러 메세지
    noEmail.style.display = "none";
    wrongEmail.style.display = "block";
    emailInput.style.borderColor = "var(--red)";
  } else {
    noEmail.style.display = "none";
    wrongEmail.style.display = "none";
    emailInput.style.borderColor = "var(--gray20)";
  }
});

const passwordInput = document.getElementById("passwordInput");
const noPassword = document.getElementById("noPassword");

passwordInput.addEventListener("focusout", function () {
  if (!passwordInput.value.trim()) {
    // 비밀번호를 입력해주세요 에러 메세지
    noPassword.style.display = "block";
    passwordInput.style.borderColor = "var(--red)";
  } else {
    noPassword.style.display = "none";
    passwordInput.style.borderColor = "var(--gray20)";
  }
});

const checkEmail = document.getElementById("checkEmail");
const checkPassword = document.getElementById("checkPassword");

function checkAccount() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const rightAccount = {
    email: "test@codeit.com",
    password: "codeit101",
  };

  if (
    emailValue === rightAccount.email &&
    passwordValue === rightAccount.password
  ) {
    alert("로그인하시겠습니까?");
    // 어째선지 알람을 삭제하면 에러 504가 발생합니다... 이유를 모르겠어요.
    window.location.href = "/folder.html";
    return false;
  } else {
    // 이동 안하는데도 왜 504가 나는지 모르겠습니다...
    checkEmail.style.display = "block";
    checkPassword.style.display = "block";
    return false;
  }
}

const eyeButton = document.querySelector(".eye-button");
const eyeImage = eyeButton.querySelector("img");
let eyeoff = true;

eyeButton.addEventListener("click", function () {
  if (eyeoff) {
    // eye-off 일 때
    eyeImage.src = "./images/eye-on.svg";
    passwordInput.type = "text";
    eyeoff = false;
  } else {
    // eye-on 일 때
    passwordInput.type = "password";
    eyeImage.src = "./images/eye-off.svg";
    eyeoff = true;
  }
});