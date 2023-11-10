const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");

emailInput.setAttribute("placeholder", "E-mail을 입력해주세요");


//클래스 추가, 제거에 관한 함수
function emailAddClass() {
  emailInput.classList.add("red-border");
  emailError.classList.add("email-error", "error-message");
}

function emailRemoveClass() {
  emailInput.classList.remove("red-border");
  emailError.textContent = "";
  emailError.classList.remove("email-error", "error-message");
}

const passwordInput = document.querySelector("#password-input");
const passwordError = document.querySelector("#password-error");

passwordInput.setAttribute("placeholder", "비밀번호를 입력해주세요");

function passwordAddClass() {
  passwordInput.classList.add("red-border");
  passwordError.classList.add("email-error", "error-message");
}

function passwordRemoveClass() {
  passwordInput.classList.remove("red-border");
  passwordError.textContent = "";
  passwordError.classList.remove("email-error", "error-message");
}
//emailInput 관한 css스타일 id pattern check 및 오류 메시지
emailInput.addEventListener("focusout", () => {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailInput.value === "") {
    emailAddClass();
    emailError.textContent = "이메일을 입력해주세요.";
  } else if (!emailPattern.test(email)) {
    emailAddClass();
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailRemoveClass();
  }
});
//passwordInput 관한 css스타일 id pattern check 및 오류 메시지
passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value === "") {
    passwordAddClass();
    passwordError.textContent = "비밀번호를 입력해주세요.";
  } else {
    passwordRemoveClass();
  }
});

//로그인에 관련한 요구사항 구현 및 페이지 이동 잘못입력시 각 input 태그 css변경 및 오류메시지
let userInfo = [{ email: "test@codeit.com", password: "codeit101" }];
const button = document.querySelector(".cta");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  let userCheck = false;

  for (const user of userInfo) {
    if (user.email === userEmail && user.password === userPassword) {
      userCheck = true;
      break;
    }
  }
  if (userCheck) {
    emailRemoveClass();
    passwordRemoveClass();
    window.location.href = "/folder/folder.html";
  } else {
    emailAddClass();
    emailError.textContent = "이메일을 확인해주세요.";
    passwordAddClass();
    passwordError.textContent = "비밀번호를 확인해주세요.";
  }
});


//비밀번호 입력란의 눈모양 클릭시 이미지 변경 및 type 변경으로 글자표시 가림을 확인할수 있는 코드 
const eyeButton = document.querySelector(".eye-button");
const eyeImg = document.querySelector("#eye-img");
let eyeBool = false;
eyeImg.addEventListener("click", () => {
  if (eyeBool) {
    eyeImg.src = "/images/eye-off.svg";
    passwordInput.setAttribute("type", "password");
  } else {
    eyeImg.src = "/images/eye.png";
    passwordInput.setAttribute("type", "text");
  }
  eyeBool = !eyeBool;
});
