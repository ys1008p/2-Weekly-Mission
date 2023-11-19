import{
  emailInput,
  passwordInput,
  passwordConfirmInput,
  emailErrorTag,
  passwordErrorTag,
  passwordErrorConfirmTag
} from "./commonTag.js";

import{
  errMsg,
  errorFunc,
  errorFuncClear
} from "./errorMsg.js";

const {
  emailNone,
  emailInvalid,
  emailAlready,
  emailCheck,
  passwordNone,
  passwordNotmatch,
  passwordCombo,
  passwordCheck
} = errMsg;

const isEmail = (value) => {
  const emailReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  return emailReg.test(value)
};

const isPassword = (value) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return passwordReg.test(value)
}

const redirectPage = () => (location.href = "/folder.html");

const emailInputCheck = function () {
  if (!emailInput.value) {
    errorFunc(emailErrorTag, emailNone, emailInput);
    return false;
  } else if (!isEmail(emailInput.value)) {
    errorFunc(emailErrorTag, emailInvalid, emailInput);
    return false;
  }
  errorFuncClear(emailErrorTag, emailInput);
  return true;
};

const passwordInputCheck = function () {
  if (!passwordInput.value) {
    errorFunc(passwordErrorTag, passwordNone, passwordInput);
    return false;
  } else if (!isPassword(passwordInput.value)) {
    errorFunc(passwordErrorTag, passwordCombo, passwordInput);
    return false;
  }
  errorFuncClear(passwordErrorTag, passwordInput);
  return true;
};

const passwordMatchCheck = function () {
  if (!passwordConfirmInput.value) {
    errorFunc(passwordErrorConfirmTag, passwordNone, passwordConfirmInput);
    return false;
  } else if (passwordInput.value !== passwordConfirmInput.value) {
    errorFunc(passwordErrorConfirmTag, passwordNotmatch, passwordConfirmInput);
    return false;
  }
  errorFuncClear(passwordErrorConfirmTag, passwordConfirmInput);
  return true;
};

const togglePassword = function (e) {
  const input = e.previousElementSibling;
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    e.getElementsByTagName("img")[0].setAttribute("src", "../images/eye-on.png");
    return;
  }
  input.setAttribute("type", "password");
  e.getElementsByTagName("img")[0].setAttribute("src", "../images/eye-off.png");
};

const signInApi = async function (e) {
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
      const signInResponse = await response.json();
      const ACCESS_TOKEN = await signInResponse.data.accessToken;
      localStorage.setItem("accessToken", ACCESS_TOKEN);
      return redirectPage();
    } else {
      errorFunc(emailErrorTag, emailCheck, emailInput);
      errorFunc(passwordErrorTag, passwordCheck, passwordInput);
    }
  } catch (error) {
    console.log(error);
  }
};

const signUpEmailApi = async function () {
  const emailValue = {
    email: emailInput.value,
  };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailValue),
    });
    if (response.status === 409) {
      errorFunc(emailErrorTag, emailAlready, emailInput);
      return false;
    } else if (!emailInput.value) {
      errorFunc(emailErrorTag, emailNone, emailInput);
      return false;
    } else {
      errorFuncClear(emailErrorTag, emailInput);
    }
  } catch (error) {
    console.log(error);
  }
};

const signUpApi = async function (e) {
  e.preventDefault();
  const userValue = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  if (passwordInputCheck() && passwordMatchCheck()) {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValue),
      });
      if (response.status === 200) {
        const signUpResponse = await response.json();
        const ACCESS_TOKEN = await signUpResponse.data.accessToken;
        localStorage.setItem("accessToken", ACCESS_TOKEN);
        redirectPage();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export {
  emailInputCheck,
  passwordInputCheck,
  signInApi,
  signUpEmailApi,
  passwordMatchCheck,
  signUpApi,
  togglePassword,
  redirectPage,
};