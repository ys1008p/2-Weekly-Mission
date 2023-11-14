import {
  isAllObjectValueTrue,
  isEmpty,
  isValidEmail,
  toggleInputVisibility,
  verifyEmail,
  verifyPassword,
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
  } else if (!isValidEmail(value)) {
    setErrorMessage(email, emailError, '올바른 이메일 주소가 아닙니다.');
  } else {
    removeErrorMessage(email, emailError);
    formState.email = verifyEmail(value);
  }
};

const checkPassword = (e) => {
  const value = e.target.value;

  if (isEmpty(value)) {
    setErrorMessage(password, passwordError, '비밀번호를 입력해주세요');
  } else {
    removeErrorMessage(password, passwordError);
    formState.password = verifyPassword(value);
  }
};

const verifyForm = () => {
  if (isAllObjectValueTrue(formState)) location.href = './folder.html';
  else {
    setErrorMessage(email, emailError, '이메일을 확인해주세요.');
    setErrorMessage(password, passwordError, '비밀번호를 확인해주세요.');
  }
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
