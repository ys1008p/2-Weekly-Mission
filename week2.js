const emailInput = document.getElementById("signup-email");
const errorMessage = document.getElementById("error-message");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

function showError(input, errorElement, errorMessage) {
  input.classList.add("error");
  errorElement.innerText = errorMessage;
  errorElement.style.display = "block";
  input.style.border = "1px solid #FF5B56";
}

function clearError(input, errorElement) {
  input.classList.remove("error");
  errorElement.style.display = "none";
  errorElement.innerText = " ";
  input.style.border = "1px solid #CCD5E3";
}

emailInput.addEventListener("focusout", function () {
  if (emailInput.value === "") {
    showError(emailInput, errorMessage, "이메일을 입력해주세요.");
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, errorMessage, "올바른 이메일 주소가 아닙니다.");
  } else if (emailInput.value === "test@codeit.com") {
    showError(emailInput, errorMessage, "이미 사용 중인 이메일입니다.");
  } else {
    clearError(emailInput, errorMessage);
  }
});

const passwordInput = document.getElementById("signup-password");
const errorMessage2 = document.getElementById("error-message2");
passwordInput.addEventListener("focusout", function () {
  if (
    passwordInput.value.length < 8 ||
    !/^(?=.*[a-zA-Z])(?=.*\d)/.test(passwordInput.value)
  ) {
    showError(
      passwordInput,
      errorMessage2,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    passwordInput.classList.add("error");
  } else {
    clearError(passwordInput, errorMessage2);
  }
});
const loginButtons = document.getElementsByTagName("button")[0];
const loginMessage = document.getElementsByClassName("login-message")[0];

loginButtons.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    loginMessage.innerText = "이메일 또는 비밀번호가 올바르지 않습니다.";
    loginMessage.style.display = "block";
  }
});

passwordInput.addEventListener("focusout", function () {
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, errorMessage2, "비밀번호를 입력해주세요.");
  } else {
    clearError(passwordInput, errorMessage2);
  }
});

function validateLogin() {
  const userEmail = "test@codeit.com"; // 기존 이메일
  const userPassword = "codeit101"; // 기존 비밀번호

  // 이메일 확인
  if (emailInput.value !== userEmail) {
    showError(emailInput, errorMessage, "이메일을 확인해주세요.");
  } else {
    clearError(emailInput, errorMessage);
  }

  // 비밀번호 확인
  if (passwordInput.value !== userPassword) {
    showError(passwordInput, errorMessage2, "비밀번호를 확인해주세요.");
  } else {
    clearError(passwordInput, errorMessage2);
  }
}

function togglePasswordVisibility() {
  const eyeIcon = document.getElementById("eye-icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "asset/landing/eye-on.png";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "signin/eye-off.png";
  }
}
