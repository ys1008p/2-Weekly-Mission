const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordMatchInput = document.querySelector("#password-match-input");
const form = document.querySelector(".form");
const signInBtn = document.querySelector(".button");
const signUpBtn = document.querySelector(".button");
const emailErrorTag = document.querySelector("#email-error");
const passwordErrorTag = document.querySelector("#password-error");
const passwordMatchErrorTag = document.querySelector("#password-match-error");
const passwordToggleButtons = document.querySelectorAll(".eye-button");

export {
  emailInput,
  passwordInput,
  passwordMatchInput,
  form,
  signInBtn,
  signUpBtn,
  emailErrorTag,
  passwordErrorTag,
  passwordMatchErrorTag,
  passwordToggleButtons,
};
