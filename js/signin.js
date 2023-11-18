import {
  isAllObjectValueTrue,
  isEmailExist,
  isEmpty,
  isValidEmail,
} from './modules/checkInput.js';
import { toggleInputVisibility } from './modules/handleEvent.js';
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
    formState.email = true;
  }
};

const checkPassword = (e) => {
  const value = e.target.value;

  if (isEmpty(value)) {
    setErrorMessage(password, passwordError, '비밀번호를 입력해주세요');
    formState.password = false;
  } else {
    formState.password = true;
  }
};

const verifyForm = () => {
  if (!isAllObjectValueTrue(formState)) return;
  if (!isEmailExist(value) || !isPasswordCorrect(value)) return;

  location.href = './folder.html';
};

const togglePassword = (e) => {
  const eyeBtn = e.target;
  const targetInput = document.querySelector(`#${eyeBtn.dataset.id}`);

  toggleInputVisibility(eyeBtn, targetInput);
};

email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', () => removeErrorMessage(email, emailError));

password.addEventListener('focusout', checkPassword);
password.addEventListener('focusin', () =>
  removeErrorMessage(password, passwordError)
);

signin.addEventListener('click', verifyForm);
eye.addEventListener('click', togglePassword);
