const emailInput = document.getElementById('email');
const noneEmailError = createErrorMessage('이메일을 입력해주세요.');
const emailError = createErrorMessage('올바른 이메일 주소가 아닙니다.');
const existEmail = createErrorMessage('이미 사용 중인 이메일입니다.');

const passwordInput = document.getElementById('password');
const passwordError = createErrorMessage('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordError = createErrorMessage('비밀번호가 일치하지 않아요.');

const submitButton = document.getElementById('submitButton');

function createErrorMessage(messageText) {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = messageText;
  errorMessage.style.color = '#ff5b56';
  errorMessage.style.display = 'none';
  return errorMessage;
}

function displayErrorMessage(element, message) {
  element.parentNode.appendChild(message);
  message.style.display = 'block';
  element.style.borderColor = '#ff5b56';
}

function hideErrorMessage(message) {
  message.style.display = 'none';
}

function isValidEmail(email) {
  let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
}

function isValidPassword(password) {
  return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}

function isValidConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function handleEmailValidation() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    displayErrorMessage(emailInput, noneEmailError);
    hideErrorMessage(emailError);
    hideErrorMessage(existEmail);
  } else if (!isValidEmail(emailValue)) {
    displayErrorMessage(emailInput, emailError);
    hideErrorMessage(noneEmailError);
    hideErrorMessage(existEmail);
  } else if (emailValue === 'test@codeit.com') {
    displayErrorMessage(emailInput, existEmail);
    hideErrorMessage(noneEmailError);
    hideErrorMessage(emailError);
  } else {
    hideErrorMessage(noneEmailError);
    hideErrorMessage(emailError);
    hideErrorMessage(existEmail);
  }
}

function handlePasswordValidation() {
  const password = passwordInput.value.trim();

  if (!isValidPassword(password)) {
    displayErrorMessage(passwordInput, passwordError);
  } else {
    hideErrorMessage(passwordError);
  }
}

function handleConfirmPasswordValidation() {
  const confirmPassword = confirmPasswordInput.value.trim();

  if (!isValidConfirmPassword(passwordInput.value.trim(), confirmPassword)) {
    displayErrorMessage(confirmPasswordInput, confirmPasswordError);
  } else {
    hideErrorMessage(confirmPasswordError);
  }
}

function isFormValid() {
  return (
    emailInput.value.trim() !== '' && isValidEmail(emailInput.value) && emailInput.value !== 'test@codeit.com' && 
    isValidPassword(passwordInput.value.trim()) && isValidConfirmPassword(passwordInput.value.trim(), confirmPasswordInput.value.trim())
  );
}

function redirectToFolderPage() {
  location.href = '../folder.html';
}

emailInput.addEventListener('blur', function(){
  handleEmailValidation();
});

passwordInput.addEventListener('blur', function(){
  handlePasswordValidation();
});

confirmPasswordInput.addEventListener('blur', function(){
  handleConfirmPasswordValidation();
});

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  handleEmailValidation();
  handlePasswordValidation();
  handleConfirmPasswordValidation();

  if (isFormValid()) {
    redirectToFolderPage();
  }
});


const togglePwdButton = document.getElementById('togglePwd');
const toggleConfirmPwdButton = document.getElementById('toggleConfirmPwd');

function togglePasswordVisibility(input, button) {
  const type = input.type === 'password' ? 'text' : 'password';
  input.type = type;

  const eyeIconSrc = type === 'password' ? '../img/eye-off.svg' : '../img/eye-on.svg';
  button.src = eyeIconSrc;
}

togglePwdButton.addEventListener('click', function () {
  togglePasswordVisibility(passwordInput, togglePwdButton);
});

toggleConfirmPwdButton.addEventListener('click', function () {
  togglePasswordVisibility(confirmPasswordInput, toggleConfirmPwdButton);
});