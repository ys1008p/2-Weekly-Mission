const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");
const passwordInput = document.querySelector("#password-input");
const passwordError = document.querySelector("#password-error");
const passwordInputCheck = document.querySelector("#password-input-check");
const passwordErrorCheck = document.querySelector("#password-error-check");
const button = document.querySelector(".cta");
const signInput = document.querySelector("#password-input");
const eyeImg = document.querySelector("#eye-img");
const signInput2 = document.querySelector("#password-input-check");
const eyeImg2 = document.querySelector("#eye-img2");
let userInfo = [{ email: "test@codeit.com", password: "codeit101" }];

export {
  emailInput,
  emailError,
  passwordInput,
  passwordError,
  passwordInputCheck,
  passwordErrorCheck,
  button,
  signInput,
  eyeImg,
  signInput2,
  eyeImg2,
  userInfo,
};
