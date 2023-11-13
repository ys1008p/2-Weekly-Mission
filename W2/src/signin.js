const emailText = document.querySelector("#email-text");
const emailCheck = document.querySelector("#email-check");

const passwordText = document.querySelector("#password-text");
const passwordCheck = document.querySelector("#password-check");

const loginButton = document.querySelector("#login-button");

const eyeButton = document.querySelector("#eye-button");
//왜 이 변수는 사용이 안되는지 모르겠습니다.
// let emailTextContent = emailCheck.textContent;

let isLogin = {
  email: false,
  password: false,
};

let emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let emailMessages = [
  "이메일을 입력해주세요",
  "올바른 이메일 주소가 아닙니다.",
  "이미 사용 중인 이메일입니다.",
  "이메일을 확인해주세요",
];

let passwordMessages = [
  "비밀번호를 입력해주세요",
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  "비밀번호가 일치하지 않아요.",
  "비밀번호를 확인해주세요",
];

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
  } else if (emailRegExp.test(emailText.value)) {
    emailCheck.textContent = `${emailMessages[3]}`;
    emailCheck.style.color = "red";
  } else if (e.target.value === "test@codeit.com") {
    isLogin.email = true;
    emailCheck.textContent = `${emailMessages[2]}`;
    emailCheck.style.color = "red";
  } else {
    isLogin.email = true;
    e.target.style.borderColor = "";
    emailCheck.textContent = "";
    // e.target.value = "";
  }
  // emailValidateFocus();
  // 다시 포커스 인 되었을 때, 창 색깔 회색, 메시지 사라지게. fucousin 함수
}

// function emailValidateFocus(e) {
//   console.log(e);
// }

function passwordValidate(e) {
  e.target.style.borderColor = "red";

  if (e.target.value === "") {
    isLogin.password = false;
    passwordCheck.textContent = passwordMessages[0];
    passwordCheck.style.color = "red";
    eyeButton.style.height = "7rem";
  } else if (!passwordRegExp.test(passwordText.value)) {
    isLogin.password = false;
    passwordCheck.textContent = passwordMessages[1];
    passwordCheck.style.color = "red";
    eyeButton.style.height = "7rem";
  } else if (passwordRegExp.test(passwordText.value)) {
    passwordCheck.textContent = `${passwordMessages[3]}`;
    passwordCheck.style.color = "red";
    eyeButton.style.height = "7rem";
  }
  {
    isLogin.password = true;
    e.target.style.borderColor = "";
  }
  e.target.value = "";
}

function loginExe(e) {
  e.preventDefault();
  e.target.style.borderColor = "red";
  const email = "test@codeit.com";
  const password = "codeit101";
  const otherEmails = emailRegExp.test(emailText.value);
  const otherPasswords = passwordRegExp.test(passwordText.value);

  if (email && password) {
    window.location.href = "./folder.html";
  } else if (otherEmails) {
    emailValidateFocusOut();
  } else if (otherPasswords) {
    passwordValidate();
  } else {
    console.log("ya");
  }
} // 여기서 email과 password를 입력하면 folder파일로 가는데 다른 이메일을 눌러도 folder파일로 이동하는데 그 이유를 모르겠습니다. ㅠ

function eyeToggle(e) {}

emailText.addEventListener("focusout", emailValidateFocusOut);
// emailText.addEventListener("focus", emailValidateFocus);
passwordText.addEventListener("focusout", passwordValidate);
loginButton.addEventListener("click", loginExe);

eyeButton.addEventListener("click", eyeToggle);
