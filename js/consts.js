const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const signinBtn = document.querySelector(".signin-button");
const signupBtn = document.querySelector(".signup-button");
const errorMessageDiv = document.querySelectorAll(".error-message");
const eyeBtn = document.querySelectorAll(".password button");

const EMAIL_REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const EMAIL_ALREADY_USED = "test@codeit.com";
const PASSWORD_ALREADY_USED = "codeit101";

const errorMessage = {
  enterEmail: "이메일을 입력해주세요.",
  invalidEmail: "올바른 이메일 주소가 아닙니다.",
  alreadyUsedEmail: "이미 사용 중인 이메일입니다.",
  checkEmail: "이메일을 확인해주세요.",
  checkPassword: "비밀번호를 확인해주세요.",
  differentPassword: "비밀번호가 일치하지 않아요.",
  enterPassword: "비밀번호를 입력해주세요.",
  enterProperPassword: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
}

export { emailInput, passwordInput, passwordConfirmInput, signinBtn, signupBtn, errorMessageDiv, eyeBtn, EMAIL_REGEX, PASSWORD_REGEX, EMAIL_ALREADY_USED, PASSWORD_ALREADY_USED, errorMessage };
