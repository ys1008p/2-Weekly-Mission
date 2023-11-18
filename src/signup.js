import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  userID,
} from "./shared.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);
function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  if (email === userID.email) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이미 사용 중인 이메일입니다."
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#pwd");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  if (!isPasswordValid(password)) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문,숫자 조합8자 이상 입력해 주세요."
    );
    return;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
}

const checkPasswordInput = document.querySelector("#pwd-check");
const checkPasswordErrorMessage = document.querySelector(
  "#check-error-message"
);
checkPasswordInput.addEventListener("focusout", (event) =>
  validateCheckPasswordInput(event.target.value)
);
function validateCheckPasswordInput(checkPassword) {
  if (passwordInput.value !== checkPassword) {
    setInputError(
      {
        input: checkPasswordInput,
        errorMessage: checkPasswordErrorMessage,
      },
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeInputError({
    input: checkPasswordInput,
    errorMessage: checkPasswordErrorMessage,
  });
  return true;
}

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  const signUpSuccess =
    emailInput.value && passwordInput.value && checkPasswordInput.value;

  if (signUpSuccess) {
    location.href = "/folder";
    return;
  }
  setInputError(
    { input: emailInput, errorMessage: emailErrorMessage },
    "이메일을 확인해주세요."
  );
  setInputError(
    { input: passwordInput, errorMessage: passwordErrorMessage },
    "비밀번호를 확인해주세요."
  );
}

const eyeBtn = document.getElementById("eye-btn");
const pwInput = document.getElementById("pwd");

const eyeBtnCheck = document.getElementById("eye-btn-check");
const pwCheckInput = document.getElementById("pwd-check");

const eyeOff = document.querySelector(".off-img");
const eyeOn = document.querySelector(".on-img");

const eyeCheckOn = document.querySelector(".check-on");
const eyeCheckOff = document.querySelector(".check-off");

eyeBtn.addEventListener("click", () => {
  if (pwInput.type === "password") {
    pwInput.type = "text";
    eyeOn.style.display = "block";
    eyeOff.style.display = "none";
  } else {
    pwInput.type = "password";
    eyeOff.style.display = "block";
    eyeOn.style.display = "none";
  }
});

eyeBtnCheck.addEventListener("click", () => {
  if (pwCheckInput.type === "password") {
    pwCheckInput.type = "text";
    eyeCheckOn.style.display = "block";
    eyeCheckOff.style.display = "none";
  } else {
    pwCheckInput.type = "password";
    eyeCheckOff.style.display = "block";
    eyeCheckOn.style.display = "none";
  }
});
