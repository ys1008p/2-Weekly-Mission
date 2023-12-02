const passwordText = document.querySelector("#password-text");
const passwordCheck = document.querySelector("#password-check");
const loginButton = document.querySelector("#login-button");

let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let emailMessages = [
  "이메일을 입력해주세요.",
  "올바른 이메일 주소가 아닙니다.",
  "이미 사용 중인 이메일입니다.",
  "이메일을 확인해주세요.",
];

let passwordMessages = [
  "비밀번호를 입력해주세요.",
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  "비밀번호가 일치하지 않아요.",
  "비밀번호를 확인해주세요.",
];

const emailCheck = document.querySelector("#email-check");
let emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const emailText = document.querySelector("#email-text");
emailText.addEventListener("focusout", emailValidateFocusOut);

let testLogin = {
  email: "test@codeit.com",
  password: "codeit101",
};

let isLogin = {
  email: false,
  password: false,
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
  } else if (e.target.value === testLogin.email) {
    // 이 else if와 아래아래 else if순서를 바꿨더니 작동함. if절에서도 순서가 중요한가요?
    isLogin.email = true;
    emailCheck.textContent = `${emailMessages[2]}`;
    emailCheck.style.color = "red";
  } else if (!e.target) {
    emailValidateFocus;
  } else if (emailRegExp.test(emailText.value)) {
    isLogin.email = false;
    emailCheck.textContent = `${emailMessages[3]}`;
    emailCheck.style.color = "red";
  }
}

function emailValidateFocus(e) {
  emailCheck.textContent = "";
}

function passwordValidate(e) {
  e.target.style.borderColor = "red";

  if (e.target.value === "") {
    isLogin.password = false;
    passwordCheck.textContent = passwordMessages[0];
    passwordCheck.style.color = "red";
    eyeOffButton.style.height = "7rem";
  } else if (e.target.value === testLogin.password) {
    isLogin.password = true;
  } else if (!passwordRegExp.test(passwordText.value)) {
    isLogin.password = false;
    passwordCheck.textContent = passwordMessages[1];
    passwordCheck.style.color = "red";
    eyeOffButton.style.height = "7rem";
  } else if (passwordRegExp.test(passwordText.value)) {
    isLogin.password = false;
    passwordCheck.textContent = `${passwordMessages[3]}`;
    passwordCheck.style.color = "red";
    eyeOffButton.style.height = "7rem";
  } else if (!e.target) {
    passwordValidateFocus;
  }

  //e.target.value = "";
}

function passwordValidateFocus(e) {
  passwordCheck.textContent = "";
  eyeOffButton.style.height = "3.5rem";
}

function loginExe(e) {
  e.preventDefault();
  e.target.style.borderColor = "red";
  const signInApi = "https://bootcamp-api.codeit.kr/api/sign-in";

  let newMember = {
    email: testLogin.email,
    password: testLogin.password,
  };

  if (isLogin.email && isLogin.password) {
    console.log("testing");
    fetch(signInApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
      .then((response) => response.json())
      .then((result) => {
        // location.href = "./folder.html";
        console.log(result);
      });
    return;
  }

  // 여기서 에러메시지 400이 뜨는데 왜그런지 모르겠습니다.
}

// const passwordInput = document.getElementsByClassName("sign-input");
const eyeOffButton = document.querySelector("#eyeoff-button");

eyeOffButton.addEventListener("click", () => {
  eyeToggle(passwordText, eyeOffButton);
});

function eyeToggle(input, button) {
  if (input.getAttribute("type") === "text") {
    console.log("password");
    input.setAttribute("type", "password");
    button
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/signin/eye-off.svg");
  } else {
    input.setAttribute("type", "text");
    button
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/eye-on.svg");
    console.log("text");
  }
}

emailText.addEventListener("focus", emailValidateFocus);
passwordText.addEventListener("focusout", passwordValidate);
passwordText.addEventListener("focus", passwordValidateFocus);
loginButton.addEventListener("click", loginExe);
