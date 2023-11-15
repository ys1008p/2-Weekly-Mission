import users from "/data/users.js";
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

function handleErrorMessage(element, errorMessage = "", addOrRemoveHide) {
  const parent = element.parentElement;
  const errorMessageSpan = parent.querySelector(".input-error__message");

  errorMessageSpan.textContent = errorMessage;
  errorMessageSpan.classList[addOrRemoveHide]("hide");
}

function checkEmailValid(element, checkExist = true) {
  if (isEmptyString(element.value)) {
    return errorMessage.email.empty;
  }
  if (!isEmailValid(element.value)) {
    return errorMessage.email.valid;
  }
  if (checkExist && isEmailExist(element.value)) {
    return errorMessage.email.exist;
  }
  return "";
}

function emailValidationFailed(target, errorMessage) {
  target.classList.add("input-error");
  handleErrorMessage(target, errorMessage, "remove");
}

function emailValidationSucceeded(target) {
  target.classList.remove("input-error");
  handleErrorMessage(target, "", "add");
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
  if (password.value !== passwordChk.value) {
    return errorMessage.passwordMatch.unmatched;
  }
  return "";
}

function checkIsOurMember(inputUser) {
  console.log(isMemberExist(inputUser));
  if (isMemberExist(inputUser)) {
    return "";
  }
  return message;
}

function passwordValidationFailed(target, eyeIcon, errorMessage) {
  target.classList.add("input-error");
  handleErrorMessage(target, errorMessage, "remove");
  eyeIcon.classList.add("eye-icon__error");
}

function passwordValidationSucceeded(target, eyeIcon) {
  target.classList.remove("input-error");
  handleErrorMessage(target, "", "add");
  eyeIcon.classList.remove("eye-icon__error");
}

function isEmailValid(email) {
  const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return regex.test(email);
}

function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return password.trim().length >= 8 && regex.test(password);
}

function isEmailExist(email) {
  return users.some((user) => user.email === email);
}

function isMemberExist(member) {
  return users.some(
    (user) => user.email === member.email && user.password === member.password
  );
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

export {
  changePasswordVisibility,
  checkEmailValid,
  checkIsOurMember,
  checkPasswordValid,
  checkPasswordsMatch,
  emailValidationFailed,
  emailValidationSucceeded,
  errorMessage,
  isMemberExist,
  passwordValidationFailed,
  passwordValidationSucceeded,
};
