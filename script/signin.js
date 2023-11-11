const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");
const passwordInput = document.querySelector("#password-input");
const passwordError = document.querySelector("#password-error");

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

function passwordAddClass() {
  passwordInput.classList.add("red-border");
  passwordError.classList.add("email-error", "error-message");
}

function passwordRemoveClass() {
  passwordInput.classList.remove("red-border");
  passwordError.textContent = "";
  passwordError.classList.remove("email-error", "error-message");
}

//input태그 placeholder 추가 사항
emailInput.setAttribute("placeholder", "E-mail을 입력해주세요");
passwordInput.setAttribute("placeholder", "비밀번호를 입력해주세요");

//emailInput 관한 css스타일 id pattern check 및 오류 메시지
function emailInputFocusoutEvent() {
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
}
emailInput.addEventListener("focusout", emailInputFocusoutEvent);

//passwordInput 관한 css스타일 id pattern check 및 오류 메시지
function passwordFocusoutEvent() {
  if (passwordInput.value === "") {
    passwordAddClass();
    passwordError.textContent = "비밀번호를 입력해주세요.";
  } else {
    passwordRemoveClass();
  }
}
passwordInput.addEventListener("focusout", passwordFocusoutEvent);

//비밀번호 입력란의 눈모양 클릭시 이미지 변경 및 type 변경으로 글자표시 가림을 확인할수 있는 코드
const signInput = document.querySelector("#password-input");
const eyeImg = document.querySelector("#eye-img");
let eyeBool = false;
function eyeImgClickEvent(input, img) {
  if (eyeBool) {
    img.src = "/images/eye-off.svg";
    input.setAttribute("type", "password");
  } else {
    img.src = "/images/eye-on.svg";
    input.setAttribute("type", "text");
  }
  eyeBool = !eyeBool;
}
eyeImg.addEventListener("click", () => {
  eyeImgClickEvent(signInput, eyeImg);
});



//회원가입에 관련한 요구사항 구현 및 페이지 이동 잘못입력시 각 input 태그 css변경 및 오류메시지
let userInfo = [{ email: "test@codeit.com", password: "codeit101" }];
const button = document.querySelector(".cta");
function buttonClickEvent(e) {
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
}
button.addEventListener("click", buttonClickEvent);