import {
  isValidEmail,
  isValidPassword,
} from "./utils.js";

const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

emailInput.addEventListener('blur', function() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailInput.classList.add('error');
    errorMessage.innerText = '이메일을 입력해주세요.';
    errorMessage.style.display = 'block';
  } else if (!isValidEmail(emailValue)) {
    emailInput.classList.add('error');
    errorMessage.innerText = '올바른 이메일 주소가 아닙니다.';
    errorMessage.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

const passwordInput = document.getElementById('password');
const passwordErrorMessage = document.getElementById('password-error-message');

passwordInput.addEventListener('blur', function() {
  const passwordValue = passwordInput.value;
  if (!isValidPassword(passwordValue)) {
    passwordInput.classList.add('error');
    passwordErrorMessage.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    passwordErrorMessage.style.display = 'block';
  } else {
    passwordInput.classList.remove('error');
    passwordErrorMessage.style.display = 'none';
  }
});

const eyeOffButton = document.querySelector('.eye-off');
const eyeOnButton = document.querySelector('.eye-on');

passwordInput.setAttribute('type', 'password');
eyeOffButton.style.display = 'block';
eyeOnButton.style.display = 'none';

eyeOffButton.addEventListener('click', function() {
  passwordInput.setAttribute('type', 'text');
  eyeOffButton.style.display = 'none';
  eyeOnButton.style.display = 'block';
});

eyeOnButton.addEventListener('click', function() {
  passwordInput.setAttribute('type', 'password');
  eyeOffButton.style.display = 'block';
  eyeOnButton.style.display = 'none';
});

const login = document.querySelector('.login')
const emailSigninInput = document.getElementById('email');
const passwordSigninInput = document.getElementById('password');

login.addEventListener('click', function() {
  // const emailSigninValue = emailSigninInput.value;
  // const passwordSigninValue = passwordSigninInput.value;

  // if (emailSigninValue === 'test@codeit.com' && passwordSigninValue === 'codeit101') {
  //   location.href = 'folder.html';
  // }

const data =
  { email: emailInput.value,
    password: passwordInput.value }

  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((result) => {
    localStorage.setItem('test', result.data.accessToken);
    location.href = 'folder.html';
  }) 
});







