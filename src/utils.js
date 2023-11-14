import {
  emailInput,
  passwordInput,
  passwordMatchInput,
  emailErrorTag,
  passwordErrorTag,
  passwordMatchErrorTag,
} from "./function/tag-selectors.js";

import { signErrorMsg, signErrorCase, errorMessageClear } from "./function/error-components.js";

const {
  emailNull,
  emailFormat,
  passwordNull,
  emailAlreadyInUse,
  passwordFormat,
  passwordMatch,
  emailCheck,
  passwordCheck,
} = signErrorMsg;

const isEmail = (value) => {
  const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return emailReg.test(value);
};

const isPassword = (value) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return passwordReg.test(value);
};

const goToFolderPage = () => (location.href = "./folder.html");

const emailFormCheck = function () {
  if (!emailInput.value) {
    signErrorCase(emailErrorTag, emailNull, emailInput);
    return false;
  } else if (!isEmail(emailInput.value)) {
    signErrorCase(emailErrorTag, emailFormat, emailInput);
    return false;
  }
  errorMessageClear(emailErrorTag, emailInput);
  return true;
};

const passwordFormCheck = function () {
  if (!passwordInput.value) {
    signErrorCase(passwordErrorTag, passwordNull, passwordInput);
    return false;
  } else if (!isPassword(passwordInput.value)) {
    signErrorCase(passwordErrorTag, passwordFormat, passwordInput);
    return false;
  }
  errorMessageClear(passwordErrorTag, passwordInput);
  return true;
};

const signInCheck = function (e) {
  e.preventDefault();
  const userValue = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userValue),
  }).then((response) => {
    if (response.status === 200) {
      return goToFolderPage();
    } else {
      signErrorCase(emailErrorTag, emailCheck, emailInput);
      signErrorCase(passwordErrorTag, passwordCheck, passwordInput);
    }
  });
};

export { emailFormCheck, passwordFormCheck, signInCheck };
