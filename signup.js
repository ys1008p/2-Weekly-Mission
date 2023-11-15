//1. 공통: 이메일 input에서 focus out 할 때
//값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지가 보입니다

const emailInput = document.getElementById("email");
const emailErrorMessage = emailInput.nextElementSibling;

function blankEmail(event) {
  if (event.target.value === ""){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
  } else {
    event.target.classList.remove("input-error");
  }
}

function resetEmailInput(event) {
  emailErrorMessage.textContent = "";
}

emailInput.addEventListener("focusout", blankEmail);
emailInput.addEventListener("focusin", resetEmailInput);

//2. 공통: 이메일 input에서 focus out 할 때, 
//이메일 형식에 맞지 않는 값이 있는 경우 input에 빨강색 테두리와 아래에 “올바른 이메일 주소가 아닙니다.” 빨강색 에러 메세지가 보입니다

const emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

function invalidEmail(event) {
  if (!(event.target.value === "") && !(emailPattern.test(event.target.value))){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  }
}

emailInput.addEventListener("focusout", invalidEmail);

//3. 공통: 이메일 input에서 focus out 일 때
//input 값이 test@codeit.com 일 경우 input에 빨강색 테두리와 아래에 “이미 사용 중인 이메일입니다.” 빨강색 에러 메세지가 보입니다.

function duplicateEmail(event) {
  if (event.target.value === "test@codeit.com"){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
  }
}

emailInput.addEventListener("focusout", duplicateEmail);

//4. 공통: 비밀번호 input에서 focus out 할 때
//값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, input에 빨강색 테두리와 아래에 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 빨강색 에러 메세지가 보입니다.

const passwordInput = document.getElementById("password");
const passwordErrorMessage = passwordInput.nextElementSibling;

const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

function invalidPassword(event) {
  if (!passwordPattern.test(event.target.value)){
    event.target.classList.add("input-error");
    passwordErrorMessage.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else {
    event.target.classList.remove("input-error");
  }
}

function resetPasswordInput(event) {
  passwordErrorMessage.textContent = "";
}

passwordInput.addEventListener("focusout", invalidPassword);
passwordInput.addEventListener("focusin", resetPasswordInput);

//6. 공통: 비밀번호 input에서 focus out 할 때
//값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지가 보입니다.

function blankPassword(event) {
  if (event.target.value === ""){
    event.target.classList.add("input-error");
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
  }
}

passwordInput.addEventListener("focusout", blankPassword);

//8. 회원가입 페이지
//비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input에 빨강색 테두리와 아래에 “비밀번호가 일치하지 않아요.” 빨강색 에러 메세지가 보입니다.

const checkPasswordInput = document.getElementById("check-password");
const checkPasswordErrorMessage = checkPasswordInput.nextElementSibling;

function checkPassword(event) {
  if (passwordInput.value !== checkPasswordInput.value) {
    event.target.classList.add("input-error");
    checkPasswordErrorMessage.textContent = "비밀번호가 일치하지 않아요.";
  } else {
    event.target.classList.remove("input-error");
    checkPasswordErrorMessage.textContent = "";
  }
}

checkPasswordInput.addEventListener("focusout", checkPassword);

//9. 10. 11. 회원가입 페이지
//회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
//이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
//회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 됩니다.

const signupButton = document.querySelector(".signup-button");

function testSignup(event) {
  if ((event.target === signupButton) || (event.key === "Enter")){
    if (!emailInput.classList.contains("input-error") && !passwordInput.classList.contains("input-error") && !checkPasswordInput.classList.contains("input-error")) {
      window.location.href = "/folder";
    }
  }
}

signupButton.addEventListener("click", testSignup);
document.addEventListener("keyup", testSignup);

//12. 공통(심화): 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
//비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.

const passwordIcon =passwordInput.parentElement.lastElementChild;
const checkPasswordIcon = checkPasswordInput.parentElement.lastElementChild;  //회원가입 페이지

function showPassword(event) {
  event.target.classList.toggle("eye-on");
  if (event.target.classList.contains("eye-on")) {
    event.target.parentElement.firstElementChild.type = "text";
    event.target.src = "./images/eye-on.png";
    event.target.alt="비밀번호 보이기 icon";
  } else {
    event.target.parentElement.firstElementChild.type = "password";
    event.target.src = "./images/eye-off.png";
    event.target.alt="비밀번호 가리기 icon";
  }
}

passwordIcon.addEventListener("click", showPassword);
checkPasswordIcon.addEventListener("click", showPassword);  //회원가입 페이지