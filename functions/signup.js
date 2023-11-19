import { message, emailRegex, passwordRegex, updateAlert, removeAlert } from "./utils.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const inputEmail = document.querySelector("#email__input");
const inputPassword = document.querySelector("#password__input");
const inputPasswordCheck = document.querySelector("#password-check__input");
const joinButton = document.querySelector("#join-page-button");
const passwordIcons = document.querySelectorAll(".password-icon");

let isJoin = {
  email: false,
  password: false,
  passwordCheck: false,
};

//이메일
async function isDuplicateEmail(email) {
  try {
    let response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    if (response.status === 409) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function validateEmail(inputValue) {
  if (inputValue == "") {
    isJoin.email = false;
    return message.email.null;
  } else if (!emailRegex.test(inputValue)) {
    isJoin.email = false;
    return message.email.invalid;
  } else if (await isDuplicateEmail(inputValue)) {
    isJoin.email = false;
    return message.email.duplicate;
  } else {
    isJoin.email = true;
    return "";
  }
}

async function emailFocus() {
  const errorMessage = await validateEmail(inputEmail.value);
  let alert = document.querySelector(".email-alert-text");
  alert?.remove();
  if (errorMessage === "") {
    removeAlert(alert, inputEmail);
  } else {
    updateAlert(inputEmail, email, "email-alert-text", errorMessage);
  }
}

//비밀번호
function validatePassword(inputValue) {
  if (inputValue == "") {
    isJoin.password = false;
    return message.password.null;
  } else if (!passwordRegex.test(inputValue)) {
    isJoin.password = false;
    return message.password.invalid;
  } else {
    isJoin.password = true;
    return "";
  }
}

function passwordFocus() {
  const errorMessage = validatePassword(inputPassword.value);
  let alert = document.querySelector(".password-alert-text");
  alert?.remove();
  if (errorMessage === "") {
    removeAlert(alert, inputPassword);
  } else {
    updateAlert(inputPassword, password, "password-alert-text", errorMessage);
  }
}

//비밀번호 확인
function validatePasswordCheck(inputValue) {
  if (inputValue == "") {
    isJoin.passwordCheck = false;
    return message.password.check;
  } else if (inputPassword.value != inputValue) {
    isJoin.passwordCheck = false;
    return message.password.match;
  } else {
    isJoin.passwordCheck = true;
    return "";
  }
}

function passwordCheckFocus() {
  const errorMessage = validatePasswordCheck(inputPasswordCheck.value);
  let alert = document.querySelector(".check-alert-text");
  alert?.remove();
  if (errorMessage === "") {
    removeAlert(alert, inputPasswordCheck);
  } else {
    updateAlert(inputPasswordCheck, passwordCheck, "check-alert-text", errorMessage);
  }
}

function passwordActivation(e) {
  let input = e.target.parentElement.querySelector("input");
  if (input.type === "password") {
    e.target.setAttribute("src", "../images/eye-on.png");
    input.type = "text";
  } else if (input.type === "text") {
    e.target.setAttribute("src", "../images/password-icon.png");
    input.type = "password";
  }
}

//회원가입
async function joinCheck(email, password) {
  try {
    let response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      let data = await response.json();
      localStorage.setItem("joinAccessToken", JSON.stringify(data.data.accessToken));
      window.location.href = "../folder.html";
    }
  } catch (error) {
    console.log(error);
  }
}

async function join(e) {
  e.preventDefault();
  if (isJoin.email && isJoin.password && isJoin.passwordCheck) {
    await joinCheck(inputEmail.value, inputPassword.value);
  }
  if (!isJoin.email) {
    emailFocus(inputEmail.value);
  }
  if (!isJoin.password) {
    passwordFocus(inputPassword.value);
  }
  if (!isJoin.passwordCheck) {
    passwordCheckFocus(inputPasswordCheck.value);
  }
}

inputEmail.addEventListener("focusout", emailFocus);
inputPassword.addEventListener("focusout", passwordFocus);
inputPasswordCheck.addEventListener("focusout", passwordCheckFocus);
passwordIcons.forEach((icon) => {
  icon.addEventListener("click", passwordActivation);
});
joinButton.addEventListener("click", join);