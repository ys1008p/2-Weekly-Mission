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


function isValidPassword(password) {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordPattern.test(password);
}

