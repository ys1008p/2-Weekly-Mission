const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const errorMessageList = {
  empty: {
    email: "이메일을 입력해주세요",
    password: "비밀번호를 입력해주세요",
  },
  valid: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",
  },
  using: {
    email: "이미 사용 중인 이메일입니다.",
  },
  confirmIncorrect: {
    confirmPassword: "비밀번호가 일치하지 않아요.",
  },
};

const validList = {
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

const sampleUserList = {
  email: "test@codeit.com",
  password: "codeit101",
};

function createErrorMessage(target, msg) {
  const errorMsg = document.createElement('p');
  errorMsg.className = 'errorMsg';
  errorMsg.textContent = msg;

  const existingErrorMsg = target.parentNode.querySelector('.errorMsg');
  if(existingErrorMsg) {
    existingErrorMsg.remove();
  }

  target.after(errorMsg);
}

function showErrorMsg({target}) {
  const {value, name} = target;

  if (value.trim() === '') {
    createErrorMessage(target, errorMessageList.empty[name]);
    target.classList.add('inputError');
    return;
  }
  if (!validList[name].test(value)) {
    createErrorMessage(target, errorMessageList.valid[name]);
    target.classList.add('inputError');
    return;
  }
  if (value.trim() === sampleUserList[name]) {
    createErrorMessage(target, errorMessageList.using[name]);
    target.classList.add('inputError');
    return;
  }

  target.classList.remove('inputError');
  target.nextElementSibling.remove();
}

function confirmErrorMsg() {
  const confirmInput = confirmPasswordInput;
  if (confirmInput.value !== passwordInput.value) {
    createErrorMessage(confirmInput, errorMessageList.confirmIncorrect.confirmPassword);
    confirmInput.classList.add('inputError');
  } else {
    confirmInput.classList.remove('inputError');
    confirmInput.nextElementSibling.remove();
  }
}
emailInput.addEventListener("focusout", showErrorMsg);
passwordInput.addEventListener("focusout", showErrorMsg);
confirmPasswordInput.addEventListener("focusout", confirmErrorMsg);


const togglePwdButton = document.getElementById('togglePwd');
const toggleConfirmPwdButton = document.getElementById('toggleConfirmPwd');

function togglePasswordVisibility(input, toggleButton) {
  const isPasswordType = input.type === "password";
  
  toggleButton.setAttribute(
    "src",
    `../img/eye-${isPasswordType ? "on" : "off"}.svg`
  );

  input.setAttribute("type", `${isPasswordType ? "text" : "password"}`);
}

togglePwdButton.addEventListener('click', function () {
  togglePasswordVisibility(passwordInput, togglePwdButton);
});

toggleConfirmPwdButton.addEventListener('click', function(){
  togglePasswordVisibility(confirmPasswordInput, toggleConfirmPwdButton);
});


const submitButton = document.getElementById('submitButton');
const signupForm = document.getElementById('signupForm');

function signupSubmit(event) {
  event.preventDefault();
  const readySubmit = emailInput.value.trim() !== '' && passwordInput.value.trim() !== '' && confirmPasswordInput.value === passwordInput.value && emailInput.value !== 'test@codeit.com';
  if(readySubmit){
    location.href = "../folder.html";
  }
}
signupForm.addEventListener("submit", signupSubmit);
submitButton.addEventListener("click", signupSubmit);