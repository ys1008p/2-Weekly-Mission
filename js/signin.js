
const userEmail = document.querySelector("#userEmail")
const errorMessage = document.querySelectorAll(".errorMessage")

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
  if ( userPassValue === "") {
    userPass.style.border = "1px solid #FF5B56";
    errorMessage[1].classList.add("on");
    errorMessage[1].innerText = "비밀번호를 입력해주세요.";
  } else if ( !validatePassWordFormat(userPassValue)) {
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

const join = document.querySelector("#join");
userPass.addEventListener("onsubmit", validateEmail, validPassWord);

const merge = document.querySelectorAll(".merge");
for(let i = 0 ; i < merge.length; i++){
  merge[i].onclick = function(e){
    e.preventDefault();
    userEmail.style.border = "1px solid #FF5B56";
    userPass.style.border = "1px solid #FF5B56";
    errorMessage[0].classList.add("on");
    errorMessage[1].classList.add("on");
    errorMessage[0].innerText = "이메일을 확인해주세요.";
    errorMessage[1].innerText = "비밀번호를 확인해주세요.";
  }
}

const checkUser =  {
  email: "test@codeit.com",
  password: "sprint101",
};

join.addEventListener("submit", joinForm);
function joinForm(event) {
  event.preventDefault();

  const TestUser =
    userEmail.value === checkUser.email && userPass.value === checkUser.password;

  if (TestUser) {
    location.href = "/folder";
    return;
  } else {
    userEmail.style.border = "1px solid #FF5B56";
    userPass.style.border = "1px solid #FF5B56";
    errorMessage[0].classList.add("on");
    errorMessage[1].classList.add("on");
    errorMessage[0].innerText = "이메일을 확인해주세요.";
    errorMessage[1].innerText = "비밀번호를 확인해주세요.";
  }
}

