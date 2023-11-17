const emailInput = document.getElementById("signup-email");
const errorMessage = document.getElementById("error-message");
const isEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
const passwordInput = document.getElementById("signup-password");
const errorMessage2 = document.getElementById("error-message2");
const passwordInputOmt = document.getElementById("signup-password2");
const errorMessage2Omt = document.getElementById("error-message2-omt");

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
  button.style.border = "none";
}
emailInput.addEventListener("focusout", function () {
  if (emailInput.value === "") {
    showError(emailInput, errorMessage, "이메일을 입력해주세요.");
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, errorMessage, "올바른 이메일 주소가 아닙니다.");
  } else if (emailInput.value === "test@codeit.com") {
    showError(emailInput, errorMessage, "이미 사용 중인 이메일입니다.");
  } else {
    clearError(emailInput, errorMessage);
  }
});

passwordInput.addEventListener("focusout", function () {
  if (
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

passwordInputOmt.addEventListener("input", function () {
  if (passwordInput.value === passwordInputOmt.value) {
    clearError(passwordInputOmt, errorMessage2Omt);
  } else {
    showError(
      passwordInputOmt,
      errorMessage2Omt,
      "비밀번호가 일치하지 않습니다."
    );
  }
});

const joinButtons = document.getElementsByTagName("button")[0];
const joinMessage = document.getElementsByClassName("join-message")[0];

for (let i = 0; i < joinButtons.length; i++) {
  joinButtons[i].addEventListener("click", function (event) {
    event.preventDefault(); // 폼 제출 방지

    // 이메일 유효성 검사
    if (
      (emailInput.value === "" &&
        !isEmailRegex.test(emailInput.value) &&
        emailInput.value === "test@codeit.com") ||
      !/^(?=.*[a-zA-Z])(?=.*\d)/.test(passwordInput.value) ||
      passwordInput.value.length < 8 ||
      passwordInput.value !== passwordInputOmt.value
    ) {
      showError(joinButtons[i], joinMessage, "다시 확인하세요.");
    } else {
      window.location.href = "/folder";
    }
  });
}
