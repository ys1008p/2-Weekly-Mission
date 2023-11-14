import { checkEmailExist } from "./api.js";
import { ERROR_MESSAGE, ERROR_PREFIX, PATTERN } from "./constant.js";

const validationState = {
  email: false,
  password: false,
  "confirm-password": false,
};

const getErrorMessage = (authType, type, prefix) => {
  return ERROR_MESSAGE[authType][prefix + type.toUpperCase()];
};

const displayError = (input, errorMessage) => {
  const errorDisplay = input.parentNode.nextElementSibling;
  errorDisplay.textContent = errorMessage;
};

export async function validateInput(authType, input) {
  const { type, value, name } = input;
  let errorMessage = "";
  if (value === "") {
    // input value 공백 검증
    errorMessage = getErrorMessage(authType, type, ERROR_PREFIX.empty);
  } else if (!PATTERN[name].test(value)) {
    // input value 유효성 검증
    errorMessage = getErrorMessage(authType, type, ERROR_PREFIX.invalid);
  }
  if (authType === "signup" && type === "email") {
    // 회원가입 / 이메일 검증
    const emailExist = await checkEmailExist(value);
    if (!emailExist)
      errorMessage = getErrorMessage(authType, type, ERROR_PREFIX.exist);
  }
  if (name === "confirm-password") {
    // 비밀번호 일치 검증
    const originPassword = document.querySelector(
      'input[name="password"]'
    ).value;
    if (originPassword !== value) {
      errorMessage = getErrorMessage(authType, type, ERROR_PREFIX.mismatch);
    }
  }
  validationState[name] = !errorMessage;
  displayError(input, errorMessage);
  return validationState[name];
}

export function resetError() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.textContent = ""));
}
