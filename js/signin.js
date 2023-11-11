const userEmail = document.querySelector("#userEmail")
const errorMessage = document.querySelector(".errorMessage")


function validateEmailFormat(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateEmail() {
  const userEmailValue = userEmail.value.trim();

  if (userEmailValue === "") {
    userEmail.style.border = "1px solid #FF5B56";
    errorMessage.classList.add("on");
    errorMessage.innerText = "이메일을 입력해주세요.";
  } else if (!validateEmailFormat(userEmailValue)) {
    userEmail.style.border = "1px solid #FF5B56";
    errorMessage.classList.add("on");
    errorMessage.innerText = "올바른 이메일 주소가 아닙니다.";
  } else if (userEmailValue ==="test@codeit.com") {
    userEmail.style.border = "1px solid #FF5B56";
    errorMessage.innerText = "이미 사용 중인 이메일입니다.";
  } 
  else {
    userEmail.style.border = "";
    errorMessage.classList.remove("on");
    errorMessage.innerText = "";
  }
}

userEmail.addEventListener("focusout", validateEmail);