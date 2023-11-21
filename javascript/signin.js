const emailInput = document.getElementById("signup-email");
const errorMessage = document.getElementById("error-message");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
if (localStorage.getItem("accessToken")) {
  window.location.href = "./folder";
}

function showError(input, errorElement, errorMessage) {
  input.classList.add("error");
  errorElement.innerText = errorMessage;
  errorElement.style.display = "block";
  input.style.border = "1px solid #FF5B56";
}

function clearError(input, errorElement) {
  input.classList.remove("error");
  errorElement.style.display = "none";
  errorElement.innerText = " ";
  input.style.border = "1px solid #CCD5E3";
}

emailInput.addEventListener("focusout", function () {
  if (emailInput.value === "") {
    showError(emailInput, errorMessage, "이메일을 입력해주세요.");
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, errorMessage, "올바른 이메일 주소가 아닙니다.");
  } else {
    clearError(emailInput, errorMessage);
  }
});

const passwordInput = document.getElementById("signup-password");
const errorMessage2 = document.getElementById("error-message2");

passwordInput.addEventListener("focusout", function () {
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, errorMessage2, "비밀번호를 입력해 주세요.");
  } else if (
    passwordInput.value.length < 8 ||
    !/^(?=.*[a-zA-Z])(?=.*\d)/.test(passwordInput.value)
  ) {
    showError(
      passwordInput,
      errorMessage2,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  } else {
    clearError(passwordInput, errorMessage2);
  }
});
const [loginButtons] = document.getElementsByTagName("button");
const [loginMessage] = document.getElementsByClassName("loginMessage");
loginButtons.addEventListener("click", function (event) {
  event.preventDefault();
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data.accessToken);
      localStorage.setItem("accessToken", result.data.accessToken);
      window.location.href = "./folder";
    });
});
