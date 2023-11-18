import {
  isAllObjectValueTrue,
  isEmailExist,
  isEmpty,
  isPasswordCorrect,
  isValidEmail,
} from './modules/checkInput.js';
import { removeErrorMessage, setErrorMessage } from './modules/setError.js';

const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const signin = document.querySelector('#signin');
const eye = document.querySelector('.eye-icon');

const formState = {
  email: false,
  password: false,
};

const checkEmail = (e) => {
  const value = e.target.value;

  if (isEmpty(value)) {
    setErrorMessage(email, emailError, '이메일을 입력해주세요.');
    formState.email = false;
  } else if (!isValidEmail(value)) {
    setErrorMessage(email, emailError, '올바른 이메일 주소가 아닙니다.');
    formState.email = false;
  } else {
    removeErrorMessage(email, emailError);
    formState.email = true;
  }
};

const checkPassword = (e) => {
  const value = e.target.value;

  if (isEmpty(value)) {
    setErrorMessage(password, passwordError, '비밀번호를 입력해주세요');
    formState.password = false;
  } else {
    removeErrorMessage(password, passwordError);
    formState.password = true;
  }
};

const verifyForm = () => {
  if (!isAllObjectValueTrue(formState)) return;
  if (!isEmailExist(email.value) || !isPasswordCorrect(password.value)) {
    setErrorMessage(email, emailError, '이메일을 확인해주세요');
    setErrorMessage(password, passwordError, '비밀번호를 확인해주세요');
    return;
  }

  location.href = './folder.html';
};

const togglePassword = (e) => {
  const eyeBtn = e.target;
  const targetInput = document.querySelector(`#${eyeBtn.dataset.id}`);

  if (eyeBtn.classList.contains('hide-password')) {
    eyeBtn.classList.remove('hide-password');
    eyeBtn.src = './images/icon/eye-on.svg';
    targetInput.type = 'text';
  } else {
    eyeBtn.classList.add('hide-password');
    eyeBtn.src = './images/icon/eye-off.svg';
    targetInput.type = 'password';
  }
};

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
signin.addEventListener('click', verifyForm);
eye.addEventListener('click', togglePassword);
