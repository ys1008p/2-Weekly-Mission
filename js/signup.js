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
  } else if (emailValue === 'test@codeit.com') {
    emailInput.classList.add('error');
    errorMessage.innerText = '이미 사용 중인 이메일입니다.';
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
const confirmPasswordInput = document.getElementById('confirm-password');
const confirmPasswordErrorMessage = document.getElementById('confirm-password-error-message');

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

confirmPasswordInput.addEventListener('blur', function () {
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    if (passwordValue !== confirmPasswordValue) {
        confirmPasswordInput.classList.add('error');
        confirmPasswordErrorMessage.innerText = '비밀번호가 일치하지 않아요.';
        confirmPasswordErrorMessage.style.display = 'block';
    } else {
        confirmPasswordInput.classList.remove('error');
        confirmPasswordErrorMessage.style.display = 'none';
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

const checkEyeOffButton = document.querySelector('.check-off');
const checkEyeOnButton = document.querySelector('.check-on');

confirmPasswordInput.setAttribute('type', 'password');
checkEyeOffButton.style.display = 'block';
checkEyeOnButton.style.display = 'none';

checkEyeOffButton.addEventListener('click', function() {
  confirmPasswordInput.setAttribute('type', 'text');
  checkEyeOffButton.style.display = 'none';
  checkEyeOnButton.style.display = 'block';
});

checkEyeOnButton.addEventListener('click', function() {
  confirmPasswordInput.setAttribute('type', 'password');
  checkEyeOffButton.style.display = 'block';
  checkEyeOnButton.style.display = 'none';
});

const signForm = document.querySelector('.signup-button');

signForm.addEventListener('click', function(e) {
  e.preventDefault();

  // const emailSignupValue = emailInput.value;
  // const passwordSignupValue = passwordInput.value;
  // const confirmPasswordSignupValue = confirmPasswordInput.value;

  // if (isValidEmail(emailSignupValue) && isValidPassword(passwordSignupValue) && confirmPasswordSignupValue === passwordSignupValue) {
  //   location.href = 'folder.html';
  // }

  const newMail = { email: emailInput.value, }

  fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newMail),
  })
  .then((response) => response.json())
  .then((result) => {
    console.log(result.data.isUsableNickname);

    if(result.data.isUsableNickname) {
      const newMember = {
        email: emailInput.value,
        password: passwordInput.value,
      }

      fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newMember),
      })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('newMember', result.data.accessToken);
        location.href = 'folder.html';
      })
    }
  })
  .catch((e) => {
    console.log("다시 확인해주세요!", e.message)
  })
});
