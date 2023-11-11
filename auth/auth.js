const form = document.querySelector(".sign-form");
const submit = document.querySelector(".cta");

const type = submit.dataset.auth;

const ERROR_MESSAGE = {
  signin: {
    EMPTY_EMAIL: "이메일을 입력해주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
    INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",
    INVALID_PASSWORD: "비밀번호가 일치하지 않습니다.",
  },
  signup: {
    EMPTY_EMAIL: "이메일을 입력해주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
    INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",
    INVALID_PASSWORD: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    PASSWORD_EQUAL: "비밀번호가 일치하지 않아요.",
  },
};

const emailInput = document.querySelector('.sign-input[type="email"]');
const passwordInput = document.querySelector('.sign-input[type="password"]');
const confirmPasswordInput = document.querySelector(".confirm-password");

const emailError = emailInput.parentNode.nextElementSibling;
const passwordError = passwordInput.parentNode.nextElementSibling;
const confirmPasswordError =
  confirmPasswordInput?.parentNode.nextElementSibling;
  
form.addEventListener("focusout", (e) => {
  if (e.target === emailInput) {
    validateEmail();
  }
  if (e.target === passwordInput) {
    validatePassword();
  }
  if (type === "signup" && e.target === confirmPasswordInput) {
    validateConfirmPassword();
  }
});

form.addEventListener("submit", (e) => {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid =
    type === "signup" ? validateConfirmPassword() : true;

  if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
    e.preventDefault();
  }
});

function validateEmail() {
  let isValid = true;
  if (emailInput.value === "") {
    emailError.textContent = ERROR_MESSAGE[type].EMPTY_EMAIL;
    isValid = false;
  } else if (!isEmailValid(emailInput.value)) {
    emailError.textContent = ERROR_MESSAGE[type].INVALID_EMAIL;
    isValid = false;
  }
  return isValid;
}

function validatePassword() {
  let isValid = true;
  if (passwordInput.value === "") {
    passwordError.textContent = ERROR_MESSAGE[type].EMPTY_PASSWORD;
    isValid = false;
  } else if (!isPasswordValid(passwordInput.value)) {
    passwordError.textContent = ERROR_MESSAGE[type].INVALID_PASSWORD;
    isValid = false;
  }
  return isValid;
}

function validateConfirmPassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = ERROR_MESSAGE[type].PASSWORD_EQUAL;
    return false;
  }
  return true;
}

function resetErrorMessage() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.textContent = ""));
}

function isEmailValid(email) {
  const patten =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return patten.test(email);
}

function isPasswordValid(password) {
  const patten = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return patten.test(password);
}

function isConfirmValid(password, confirmPassword) {
  return password && password === confirmPassword;
}
