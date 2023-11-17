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

const signInCheck = async function (e) {
  e.preventDefault();
  const userValue = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userValue),
    });
    if (response.status === 200) {
      return goToFolderPage();
    } else {
      signErrorCase(emailErrorTag, emailCheck, emailInput);
      signErrorCase(passwordErrorTag, passwordCheck, passwordInput);
    }
  } catch (error) {
    console.log(error);
  }
};

const signUpEmailCheck = async function () {
  const emailValue = {
    email: emailInput.value,
  };
  try {
    const emailJSON = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailValue),
    });
    const emailCheck = await emailJSON.json();
    if (emailCheck.error && emailInput.value) {
      signErrorCase(emailErrorTag, emailCheck.error.message, emailInput);
      return false;
    } else if (!emailInput.value) {
      signErrorCase(emailErrorTag, emailNull, emailInput);
      return false;
    } else {
      errorMessageClear(emailErrorTag, emailInput);
    }
  } catch (error) {
    console.log(error);
  }
};

const passwordMatchCheck = function () {
  if (!passwordMatchInput.value) {
    signErrorCase(passwordMatchErrorTag, passwordNull, passwordMatchInput);
    return false;
  } else if (passwordInput.value !== passwordMatchInput.value) {
    signErrorCase(passwordMatchErrorTag, passwordMatch, passwordMatchInput);
    return false;
  }
  errorMessageClear(passwordMatchErrorTag, passwordMatchInput);
  return true;
};

const signUpCheck = async function (e) {
  e.preventDefault();
  const passwordForm = passwordFormCheck();
  const passwordMatch = passwordMatchCheck();
  const userValue = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  if (passwordForm && passwordMatch) {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValue),
      });
      if (response.status === 200) {
        goToFolderPage();
      } else {
        signUpEmailCheck();
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    passwordFormCheck();
    passwordMatchCheck();
  }
};

export { emailFormCheck, passwordFormCheck, signInCheck, signUpEmailCheck, passwordMatchCheck, signUpCheck };
