const emailText = document.querySelector("#email-text");
const emailCheck = document.querySelector("#email-check");
const passwordText = document.querySelector("#password-text");
// const passwordInput = document.getElementsByClassName("sign-input");
const passwordCheck = document.querySelector("#password-check");
const passwordCheckAgain = document.querySelector("#password-check-again");
const passwordTextAgain = document.querySelector("#password-text-check-again");
const signUpButton = document.querySelector("#signup-button");
const eyeButtons = document.getElementsByClassName("eye-button");

let isLogin = {
  email: false,
  password: false,
  passwordCheck: false,
};

let emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let emailMessages = [
  "이메일을 입력해주세요.",
  "올바른 이메일 주소가 아닙니다.",
  "이미 사용 중인 이메일입니다.",
  "이메일을 확인해주세요.",
];

let passwordMessages = [
  "비밀번호를 입력해주세요",
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  "비밀번호가 일치하지 않아요.",
  "비밀번호를 확인해주세요.",
  "비밀번호가 다릅니다.",
];

let testSignup = {
  email: "test@codeit.com",
  password: "codeit101",
  passwordCheck: "codeit101",
};

function emailValidateFocusOut(e) {
  e.target.style.borderColor = "red";

  if (e.target.value === "") {
    isLogin.email = false;
    emailCheck.textContent = `${emailMessages[0]}`;
    emailCheck.style.color = "red";
    // e.target.value = "";
  } else if (!emailRegExp.test(emailText.value)) {
    isLogin.email = false;
    emailCheck.textContent = `${emailMessages[1]}`;
    emailCheck.style.color = "red";
    // e.target.value = "";
  } else if (!e.target) {
    emailValidateFocus;
  } else if (emailRegExp.test(emailText.value)) {
    isLogin.email = true;
    emailCheck.style.color = "red";
  }
}

function emailValidateFocus(e) {
  emailCheck.textContent = "";
}
// eyebutton[0]의 이벤트
function passwordValidate(e) {
  e.target.style.borderColor = "red";

  if (e.target.value === "") {
    isLogin.password = false;
    passwordCheck.textContent = passwordMessages[0];
    passwordCheck.style.color = "red";
    eyeButtons[0].style.height = "7rem";
  } else if (!passwordRegExp.test(passwordText.value)) {
    isLogin.password = false;
    passwordCheck.textContent = passwordMessages[1];
    passwordCheck.style.color = "red";
    eyeButtons[0].style.height = "7rem";
  }
  // e.target.value = "";
}

passwordCheckAgain.addEventListener("focusout", passwordCheckOnceAgain);

//eyebutton2의 이벤트 함수
function passwordCheckOnceAgain(e) {
  e.target.style.borderColor = "red";

  if (e.target.value === "") {
    isLogin.password = false;
    passwordTextAgain.textContent = passwordMessages[0];
    passwordTextAgain.style.color = "red";
    eyeButtons[1].style.height = "7rem";
  } else if (!passwordRegExp.test(passwordTextAgain.value)) {
    isLogin.password = false;
    passwordTextAgain.textContent = passwordMessages[4];
    passwordTextAgain.style.color = "red";
    eyeButtons[1].style.height = "7rem";
  } else {
    e.target.style.borderColor = "";
  }

  // e.target.value = "";
}

function passwordValidateFocus(e) {
  passwordCheck.textContent = "";
  eyeButtons[0].style.height = "3.5rem";
}

function eyeToggle(input, button) {
  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    button
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/signin/eye-off.svg");
    console.log(input.type);
  } else {
    input.setAttribute("type", "text");
    button
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/eye-on.svg");
    console.log(input.type);
  }
}

function eyeToggleAgain(input, button) {
  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    button
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/signin/eye-off.svg");
    console.log(input.type);
  } else {
    input.setAttribute("type", "text");
    button
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/eye-on.svg");
    console.log(input.type);
  }
}

function signupExe(e) {
  e.preventDefault();
  const signUpApi = "https://bootcamp-api.codeit.kr/api/sign-up";
  const emailCheck = "https://bootcamp-api.codeit.kr/api/check-email";
  console.log("signup button");
  if (testSignup.email && testSignup.password && testSignup.passwordCheck) {
    console.log("matched");
  }
}

emailText.addEventListener("focusout", emailValidateFocusOut);
emailText.addEventListener("focus", emailValidateFocus);
passwordText.addEventListener("focusout", passwordValidate);
passwordText.addEventListener("focus", passwordValidateFocus);

signUpButton.addEventListener("click", signupExe);
eyeButtons[0].addEventListener("click", () =>
  eyeToggle(passwordText, eyeButtons[0])
);
eyeButtons[1].addEventListener("click", () =>
  eyeToggleAgain(passwordTextAgain, eyeButtons[1])
);
