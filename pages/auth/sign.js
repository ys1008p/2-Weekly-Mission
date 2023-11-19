import { postCheckEmail } from "./api.js";
import { isEmptyString } from "/scripts/utils.js";

const errorMessage = {
  email: {
    empty: "이메일을 입력해주세요.",
    valid: "올바른 이메일 주소가 아닙니다.",
    exist: "이미 사용 중인 이메일입니다.",
    loginFailed: "이메일을 확인해주세요.",
  },
  password: {
    empty: "비밀번호를 입력해주세요.",
    valid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    loginFailed: "비밀번호를 확인해주세요.",
  },
  passwordMatch: {
    unmatched: "비밀번호가 일치하지 않아요.",
  },
};

function getInputsErrMsgEl(target) {
  const parent = target.parentElement;
  return parent.querySelector(".input-error__message");
}

function handleErrorMessage(target, errorMessage = "") {
  let errorMessageSpan = getInputsErrMsgEl(target);

  if (isEmptyString(errorMessage) && !errorMessageSpan) {
    return;
  }

  if (!errorMessageSpan) {
    errorMessageSpan = document.createElement("span");
    errorMessageSpan.classList.add("input-error__message");
    target.after(errorMessageSpan);
    errorMessageSpan.textContent = errorMessage;
    return;
  }

  if (isEmptyString(errorMessage)) {
    errorMessageSpan.remove();
    return;
  }

  errorMessageSpan.textContent = errorMessage;
}

function inputValidationFailed(target, errorMessage, eyeIcon) {
  target.classList.add("input-error");
  handleErrorMessage(target, errorMessage);
  if (eyeIcon) {
    eyeIcon.classList.add("eye-icon__error");
  }
}

function inputValidationSucceeded(target, eyeIcon) {
  target.classList.remove("input-error");
  handleErrorMessage(target);
  if (eyeIcon) {
    eyeIcon.classList.remove("eye-icon__error");
  }
}

async function checkEmailValid(element, checkExist = true) {
  if (isEmptyString(element.value)) {
    return errorMessage.email.empty;
  }
  if (!isEmailValid(element.value)) {
    return errorMessage.email.valid;
  }
  if (checkExist && (await isEmailExist(element.value))) {
    return errorMessage.email.exist;
  }
  return "";
}

function checkPasswordValid(element) {
  if (isEmptyString(element.value)) {
    return errorMessage.password.empty;
  }
  if (!isPasswordValid(element.value)) {
    return errorMessage.password.valid;
  }
  return "";
}

function checkPasswordsMatch(passwordChk, password) {
  if (passwordChk.value !== password.value) {
    return errorMessage.passwordMatch.unmatched;
  }
  return "";
}

function isEmailValid(email) {
  const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return regex.test(email);
}

function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return password.trim().length >= 8 && regex.test(password);
}

async function isEmailExist(email) {
  let emailExist = true;
  try {
    await postCheckEmail(email);
    emailExist = false;
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  } finally {
    return emailExist;
  }
}

function changePasswordVisibility(passwordInput) {
  return function ({ target }) {
    target.classList.toggle("form__input--eye-on");

    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      return;
    }
    passwordInput.setAttribute("type", "password");
  };
}

function setUserAccessToken({ data }) {
  localStorage.setItem("accessToken", data.accessToken);
}

export {
  changePasswordVisibility,
  checkEmailValid,
  checkPasswordValid,
  checkPasswordsMatch,
  errorMessage,
  inputValidationFailed,
  inputValidationSucceeded,
  setUserAccessToken,
};
