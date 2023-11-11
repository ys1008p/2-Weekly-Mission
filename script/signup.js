const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");
const passwordInput = document.querySelector("#password-input");
const passwordError = document.querySelector("#password-error");
const passwordInputCheck = document.querySelector("#password-input-check");
const passwordErrorCheck = document.querySelector("#password-error-check");

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
function passwordInputCheckAddClass() {
  passwordInputCheck.classList.add("red-border");
  passwordErrorCheck.classList.add("email-error", "error-message");
}

function passwordErrorCheckRemoveClass() {
  passwordInputCheck.classList.remove("red-border");
  passwordErrorCheck.textContent = "";
  passwordErrorCheck.classList.remove("email-error", "error-message");
}
//input태그 placeholder 추가 사항
passwordInputCheck.setAttribute("placeholder", "비밀번호를 확인해주세요");
emailInput.setAttribute("placeholder", "E-mail을 입력해주세요");
passwordInput.setAttribute("placeholder", "비밀번호를 입력해주세요");

//emailInput 관한 css스타일 id pattern check 및 오류 메시
function emailInputFocusoutEvent() {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailInput.value === "") {
    emailAddClass();
    emailError.textContent = "이메일을 입력해주세요.";
    return false;
  } else if (!emailPattern.test(email)) {
    emailAddClass();
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    return false;
  } else {
    emailRemoveClass();
    return true;
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
const signInput1 = document.querySelector("#password-input-check");
const eyeImg1 = document.querySelector("#eye-img1");

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

eyeImg1.addEventListener("click", () => {
  eyeImgClickEvent(signInput1, eyeImg1);
});

//비밀번호 형식체크
function passwordInputFocusoutEvent() {
  const password = passwordInput.value;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (password === "") {
    passwordAddClass();
    passwordError.textContent = "비밀번호를 입력해주세요.";
  } else if (!passwordPattern.test(password)) {
    passwordAddClass();
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요";
  } else {
    passwordRemoveClass();
    return true;
  }
}
passwordInput.addEventListener("focusout", passwordInputFocusoutEvent);

//비밀번호 비밀번호 확인 input 비교해서 일치 불일치 확인
function passwordMachingEvent() {
  const password = passwordInput.value;
  const passwordCheck = passwordInputCheck.value;

  if (password !== passwordCheck) {
    passwordErrorCheck.classList.remove("confirm-message");
    passwordAddClass();
    passwordErrorCheck.textContent = "비밀번호가 일치하지 않습니다.";
    passwordInputCheckAddClass();
  } else {
    passwordRemoveClass();
    passwordErrorCheckRemoveClass();
    passwordErrorCheck.textContent = "비밀번호가 일치합니다.";
    passwordErrorCheck.classList.add("confirm-message");
    return true;
  }
}
passwordInputCheck.addEventListener("focusout", passwordMachingEvent);

//회원가입 버튼에 관련한 요구사항 구현 및 페이지 이동 잘못입력시 각 input 태그 css변경 및 오류메시지

const button = document.querySelector(".cta");
function buttonClickEvent(e) {
  e.preventDefault();
  let userConfirmCheck = userDuplicateCheck();
  let passwordConfirmCheck = passwordInputFocusoutEvent();
  let passwordMachingCheck = passwordMachingEvent();
  if (userConfirmCheck && passwordConfirmCheck && passwordMachingCheck) {
    window.location.href = "/folder/folder.html";
  }
  else{
    /*각각의 serConfirmCheck
    passwordConfirmCheck 
    passwordMachingCheck
    사항을 파악해서 넣어줘야하는지 모르겠습니다*/
  }
}
button.addEventListener("click", buttonClickEvent);

//이메일 중복체크
let userInfo = [{ email: "test@codeit.com", password: "codeit101" }];
function userDuplicateCheck() {
  let userDuplicate = false;
  for (const user of userInfo) {
    if (user.email === emailInput.value) {
      userDuplicate = true;
    }
    if (userDuplicate) {
      emailError.textContent = "이미 사용 중인 이메일입니다.";
      emailAddClass();
    } else {
      return true;
    }
  }
}
emailInput.addEventListener("focusout", userDuplicateCheck);


// import
// *
//  as signinModule from './signin.js';

//form에서 enter 입력은 버튼의 기본동작으로 들어가있는 부분같은데 추가를 해야하는지
// function keyDownEnterEvent(e){
//   if(e.key ==='Enter'){ e.preventDefault();

//     buttonClickEvent;
//     console.log('keydown입력했습니다.')
//   }
// }
// button.addEventListener('keydown',keyDownEnterEvent);
