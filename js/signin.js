const userEmail = document.querySelector("#userEmail")
const errorMessage = document.querySelectorAll(".errorMessage")
console.log(errorMessage)

function validateEmailFormat(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateEmail() {
  const userEmailValue = userEmail.value.trim();

  if (userEmailValue === "") {
    userEmail.style.border = "1px solid #FF5B56";
    errorMessage[0].classList.add("on");
    errorMessage[0].innerText = "이메일을 입력해주세요.";
  } else if (!validateEmailFormat(userEmailValue)) {
    userEmail.style.border = "1px solid #FF5B56";
    errorMessage[0].classList.add("on");
    errorMessage[0].innerText = "올바른 이메일 주소가 아닙니다.";
  } else if (userEmailValue ==="test@codeit.com") {
    userEmail.style.border = "1px solid #FF5B56";
    errorMessage[0].innerText = "이미 사용 중인 이메일입니다.";
  } 
  else {
    userEmail.style.border = "";
    errorMessage[0].classList.remove("on");
    errorMessage[0].innerText = "";
  }
}

userEmail.addEventListener("focusout", validateEmail);

const userPass = document.querySelector("#userPass");

function validatePassWordFormat(passWord) {
  const passWordPattern = /^[\w\!\$\&\-]{8,16}$/;
  return passWordPattern.test(passWord)
}

function validPassWord () {
  const userPassValue = userPass.value.trim();
  if ( !validatePassWordFormat(userPassValue)) {
    userPass.style.border = "1px solid #FF5B56";
    errorMessage[1].classList.add("on");
    errorMessage[1].innerText = "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
  } else {
    userPass.style.border = "";
    errorMessage[1].classList.remove("on");
    errorMessage[1].innerText = "";
  }
}

userPass.addEventListener("focusout", validPassWord);