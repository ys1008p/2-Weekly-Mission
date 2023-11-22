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

// 3. 비밀번호 확인

const $inputPasswordCheck = document.querySelector(
  "#password-check .input-password"
); // 패스워드 확인 인풋 요소
const $errorMessagePasswordCheck = document.querySelector(
  "#password-check .error-message"
); // 에러메세지가 들어갈 요소

// 올바른 값이 아닌 경우 빨간 테두리와 에러메세지
function addErrorMessagePasswordCheck(value) {
  const userPasswordValue = $inputPasswordCheck.value; // 사용자가 입력한 패스워드 인풋 값

  if (userPasswordValue !== $inputPassword.value) {
    // 1) 비밀번호가 일치하지 않을 때
    addRedBorder($inputPasswordCheck);
    $errorMessagePasswordCheck.textContent = "비밀번호가 일치하지 않아요";
  } else {
    // 2) 정상
    removeRedBorder($inputPasswordCheck);
    $errorMessagePasswordCheck.textContent = "";
  }
}

$inputPasswordCheck.addEventListener("focusout", function () {
  addErrorMessagePasswordCheck();
});

// 4. 회원가입 시도 시
/* FIXME 문제가 있는데도 자꾸 폴더로 넘어가는 문제 (회원가입, 로그인 공통)
- moveIfValid()의 리턴값은 true, false 상황에 맞게 잘 나옴.
- /folder로 넘어가는 조건이 안 맞음 (한번 true가 된 적 있으면 계속 링크로 넘어가지는 건지..) */

// 진행: 에러메세지가 없는 경우 (내용이 모두 ""인 경우)
// 중단: 하나라도 에러메세지가 있는 경우
function isAllValidSignUp() {
  return ($errorMessageEmail.innerHTML &&
    $errorMessagePassword.innerHTML &&
    $errorMessagePasswordCheck.innerHTML) === ""
    ? true
    : false;
}

// 모든 인풋에서 focusout 시 문제 있는 곳에 에러 메세지
function showErrorMessageSignUp() {
  addErrorMessageEmail();
  addErrorMessagePassword();
  addErrorMessagePasswordCheck();
}

const $inputs = document.querySelectorAll(".input input");
$inputs.forEach((input) =>
  input.addEventListener("focusout", showErrorMessageSignUp)
);

// 회원가입 버튼 누르면 진행
const $signButton = document.querySelector(".cta"); // 회원가입, 로그인 버튼

function moveIfValidSignUp() {
  // true: 진행시켜 false: 멈춰!
  // 사용자가 아무것도 입력하지 않은 경우
  if (
    !($inputEmail.value && $inputPassword.value && $inputPasswordCheck.value)
  ) {
    return false;
  } else if (!isAllValidSignUp()) {
    //문제 있는 곳에 에러 메세지
    showErrorMessageSignUp();
    return false;
  } else if (isAllValidSignUp()) {
    //Q $signButton.href = "./folder.html"와의 차이는?
    location.href = "./folder.html"; //folder로 이동
    return true;
  }
}

$inputPasswordCheck.addEventListener("focusout", function () {
  addErrorMessagePasswordCheck();
});

$signButton.addEventListener("click", function () {
  moveIfValidSignUp();
}); // 클릭 시 이동

// 4. 로그인 시도 시

// 진행: 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도경우
// 중단: 일치하지 않는 경우
function isAllValidSignIn() {
  return $inputEmail.value === "test@codeit.com" &&
    $inputPassword === "codeit101"
    ? true
    : false;
}

function showErrorMessageSignIn() {
  // “이메일을 확인해주세요.”, “비밀번호를 확인해주세요.”
  const userEmailValue = $inputEmail.value;
  const userPasswordValue = $inputPassword.value;

  //이메일 확인
  if (userEmailValue !== "test@codeit.com") {
    // 1) test@codeit.com이 아닐 때
    addRedBorder($inputEmail);
    $errorMessageEmail.textContent = "이메일을 확인해주세요.";
  } else {
    // 2) 정상
    removeRedBorder($inputEmail);
    $errorMessageEmail.textContent = "";
  }

  // 비밀번호 확인
  if (userPasswordValue !== "codeit101") {
    // 1) codeit101이 아닐 때
    addRedBorder($inputPassword);
    $errorMessagePassword.textContent = "비밀번호를 확인해주세요.";
  } else {
    // 2) 정상
    removeRedBorder($inputPassword);
    $errorMessagePassword.textContent = "";
  }
}

function moveIfValidSignIn() {
  // true: 진행시켜 false: 멈춰!
  if (!isAllValidSignIn()) {
    //문제 있는 곳에 에러 메세지
    showErrorMessageSignIn();
    return false;
  } else if (isAllValidSignIn()) {
    location.href = "./folder.html"; //folder로 이동
    return true;
  }
}

$inputPasswordCheck.addEventListener("focusout", function () {
  addErrorMessagePasswordCheck();
});

$signButton.addEventListener("click", function () {
  moveIfValidSignIn();
}); // 클릭 시 이동
