const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function setInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
}

function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

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
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
}

//4주차 요구사항
// 비밀번호 input
const eyeBtn = document.getElementById("eye-btn");
const pwInput = document.getElementById("pwd");
// 비밀번호 확인 input
const eyeBtnCheck = document.getElementById("eye-btn-check");
const pwCheckInput = document.getElementById("pwd-check");
// eye icon
const eyeOff = document.querySelector(".off-img");
const eyeOn = document.querySelector(".on-img");
//eye check
const eyeCheckOn = document.querySelector(".check-on");
const eyeCheckOff = document.querySelector(".check-off");

//비밀번호 input
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
// 비밀번호 확인 input
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
