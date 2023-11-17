// 이메일 유효성 검사
function isValidEmail(emailValue) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(emailValue) ? true : false;
}

// 비밀번호 유효성 검사
function isValidPassword(passwordValue) {
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return pattern.test(passwordValue) ? true : false;
}

// 에러 발생시 인풋 박스에 빨간 테두리
function addRedBorder($input) {
  $input.classList.add("error-border");
}

function removeRedBorder($input) {
  $input.classList.remove("error-border");
}

// 1. 이메일

const $inputEmail = document.querySelector("#email .input-email"); // 이메일 인풋 요소
const $errorMessageEmail = document.querySelector("#email .error-message"); // 에러메세지가 들어갈 요소

// 올바른 값이 아닌 경우 빨간 테두리와 에러메세지
function addErrorMessageEmail() {
  const userEmailValue = $inputEmail.value; // 사용자가 입력한 이메일 인풋 값

  if (!isValidEmail(userEmailValue) && userEmailValue) {
    // 1) 형식에 맞지 않을 때
    addRedBorder($inputEmail);
    $errorMessageEmail.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (userEmailValue === "test@codeit.com") {
    // 2) test@codeit.com일 때
    addRedBorder($inputEmail);
    $errorMessageEmail.textContent = "이미 사용 중인 이메일입니다.";
  } else if (!userEmailValue) {
    // 3) 값이 없을 때
    addRedBorder($inputEmail);
    $errorMessageEmail.textContent = "이메일을 입력해주세요.";
  } else {
    // 4) 정상
    removeRedBorder($inputEmail);
    $errorMessageEmail.textContent = "";
  }
}

$inputEmail.addEventListener("focusout", function () {
  addErrorMessageEmail();
});

// 2. 비밀번호

const $inputPassword = document.querySelector("#password .input-password"); // 패스워드 인풋 요소
const $errorMessagePassword = document.querySelector(
  "#password .error-message"
); // 에러메세지가 들어갈 요소

// 올바른 값이 아닌 경우 빨간 테두리와 에러메세지
function addErrorMessagePassword() {
  const userPasswordValue = $inputPassword.value; // 사용자가 입력한 패스워드 인풋 값

  if (!isValidPassword(userPasswordValue) && userPasswordValue) {
    // 1) 형식에 맞지 않을 때
    addRedBorder($inputPassword);
    $errorMessagePassword.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
  } else if (!userPasswordValue) {
    // 2) 값이 없을 때
    addRedBorder($inputPassword);
    $errorMessagePassword.textContent = "비밀번호를 입력해주세요.";
  } else {
    // 3) 정상
    removeRedBorder($inputPassword);
    $errorMessagePassword.textContent = "";
  }
}

$inputPassword.addEventListener("focusout", function () {
  addErrorMessagePassword();
});

/* // 비밀번호 확인 입력값이 비밀번호와 일치하는지 확인

const inputPasswordCheck = document.querySelector("input.password-check");
const passwordCheckError = document.createElement("p"); //input 박스 밑 에러 메세지 요소 추가
passwordCheckError.classList.add("error-message"); //에러 메세지용 p태그에 빨간 글씨 클래스 추가
const userPasswordCheckInput = inputPassword.value; //사용자의 패스워드 확인 입력값

function checkPassword() {
  let message = "";

  if (inputPasswordCheck === inputPassword) {
    addRedBorder(inputPassword);
    message = "비밀번호가 일치하지 않아요.";
  }
}

inputPasswordCheck.addEventListener("focusout", () => {
  addErrorMessagePasswordCheck();
}); */
