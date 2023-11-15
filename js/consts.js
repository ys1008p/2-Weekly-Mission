const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const signinBtn = document.querySelector(".signin-button");
const signupBtn = document.querySelector(".signup-button");
const errorMessageDiv = document.querySelectorAll(".error-message");
const eyeBtn = document.querySelectorAll(".password button");

const EMAIL_REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const EMAIL_ALREADY_USED = "test@codeit.com";
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export { emailInput, passwordInput, passwordConfirmInput, signinBtn, signupBtn, errorMessageDiv, eyeBtn, EMAIL_REGEX, EMAIL_ALREADY_USED, PASSWORD_REGEX };
