const emailInput = document.getElementById('email');
const noneEmailError = createErrorMessage('이메일을 입력해주세요.');
const emailError = createErrorMessage('올바른 이메일 주소가 아닙니다.');
const wrongEmail = createErrorMessage('가입되지 않은 이메일입니다.');

const passwordInput = document.getElementById('password');
const nonePw = createErrorMessage('비밀번호를 입력해주세요.');
const wrongPw = createErrorMessage('비밀번호를 확인해주세요.');
const passwordError = createErrorMessage('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');

const loginButton = document.getElementById('loginButton');

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

function handleEmailValidation() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    displayErrorMessage(emailInput, noneEmailError);
    hideErrorMessage(emailError);
    hideErrorMessage(wrongEmail);
  } else if (!isValidEmail(emailValue)) {
    displayErrorMessage(emailInput, emailError);
    hideErrorMessage(noneEmailError);
    hideErrorMessage(wrongEmail);
  } else if (emailValue !== 'test@codeit.com') {
    displayErrorMessage(emailInput, wrongEmail);
    hideErrorMessage(noneEmailError);
    hideErrorMessage(emailError);
  } else {
    hideErrorMessage(noneEmailError);
    hideErrorMessage(emailError);
    hideErrorMessage(wrongEmail);
  }
}

function handlePasswordValidation() {
  const password = passwordInput.value.trim();
  const emailValue = emailInput.value.trim();

  if(password === ''){
    displayErrorMessage(passwordInput, nonePw);
    hideErrorMessage(passwordError);
    hideErrorMessage(wrongPw)
  } else if (!isValidPassword(password)) {
    displayErrorMessage(passwordInput, passwordError);
    hideErrorMessage(nonePw);
    hideErrorMessage(wrongPw);
  } else if(emailValue === 'test@codeit.com' && password !== 'codeit101') {
    displayErrorMessage(passwordInput, wrongPw);
    hideErrorMessage(nonePw);
    hideErrorMessage(passwordError);
  } else {
    hideErrorMessage(passwordError);
    hideErrorMessage(nonePw);
    hideErrorMessage(wrongPw);
  }
}

function isFormValid() {
  const userEmail = emailInput.value.trim();
  const userPassword = passwordInput.value.trim();
  return (
    userEmail !== '' && isValidEmail(emailInput.value) && emailInput.value === 'test@codeit.com' && 
    isValidPassword(userPassword) && userPassword === 'codeit101'
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

loginButton.addEventListener('click', function (event) {
  event.preventDefault();

  handleEmailValidation();
  handlePasswordValidation();

  if (isFormValid()) {
    redirectToFolderPage();
  }
});

const togglePwdButton = document.getElementById('togglePwd');

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.type === 'password' ? 'text' : 'password';

  passwordInput.type = type;

  const eyeIconSrc = type === 'password' ? '../img/eye-off.svg' : '../img/eye-on.svg';
  togglePwdButton.src = eyeIconSrc;
}

togglePwdButton.addEventListener('click', function () {
  togglePasswordVisibility();
});
