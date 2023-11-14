import {
  isAllObjectValueTrue,
  isEmailExist,
  isEmpty,
  isValidEmail,
  isValidPassword,
} from './modules/checkInput.js';
import {
  isEnterKeyPressed,
  toggleInputVisibility,
} from './modules/handleEvent.js';
import { removeErrorMessage, setErrorMessage } from './modules/setError.js';

const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const confirm = document.querySelector('#confirm');
const confirmError = document.querySelector('#confirmError');
const signup = document.querySelector('#signup');
const eyes = document.querySelectorAll('.eye-icon');

const formState = {
  email: false,
  password: false,
  confirm: false,
};

const checkEmail = (e) => {
  const value = e.target.value;

  if (isEmpty(value)) {
    setErrorMessage(email, emailError, '이메일을 입력해주세요.');
  } else if (!isValidEmail(value)) {
    setErrorMessage(email, emailError, '올바른 이메일 주소가 아닙니다.');
  } else if (isEmailExist(value)) {
    setErrorMessage(email, emailError, '이미 사용 중인 이메일입니다.');
  } else {
    formState.email = true;
  }
};

const checkPassword = (e) => {
  const value = e.target.value;

  if (isEmpty(value)) {
    setErrorMessage(password, passwordError, '비밀번호를 입력해주세요.');
  } else if (!isValidPassword(value)) {
    setErrorMessage(
      password,
      passwordError,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    );
  } else {
    formState.password = true;
  }
};

const checkConfirm = (e) => {
  const value = e.target.value;

  if (password.value !== value) {
    setErrorMessage(confirm, confirmError, '비밀번호가 일치하지 않아요.');
  } else {
    formState.confirm = true;
  }
};

const verifyForm = () => {
  if (isAllObjectValueTrue(formState)) location.href = './folder.html';

  if (!formState.email)
    setErrorMessage(email, emailError, '이메일을 확인해주세요.');

  if (!formState.password)
    setErrorMessage(password, passwordError, '비밀번호를 확인해주세요.');

  if (!formState.confirm)
    setErrorMessage(confirm, confirmError, '비밀번호를 확인해주세요.');
};

const togglePassword = (e) => {
  const eyeBtn = e.target;
  const targetInput = document.querySelector(`#${eyeBtn.dataset.id}`);

  toggleInputVisibility(eyeBtn, targetInput);
};

email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', () => removeErrorMessage(email, emailError));
email.addEventListener(
  'keydown',
  (e) => isEnterKeyPressed(e.key) && verifyForm()
);

password.addEventListener('focusout', checkPassword);
password.addEventListener('focusin', () =>
  removeErrorMessage(password, passwordError)
);
email.addEventListener(
  'keydown',
  (e) => isEnterKeyPressed(e.key) && verifyForm()
);

confirm.addEventListener('focusout', checkConfirm);
confirm.addEventListener('focusin', () =>
  removeErrorMessage(confirm, confirmError)
);
email.addEventListener(
  'keydown',
  (e) => isEnterKeyPressed(e.key) && verifyForm()
);

signup.addEventListener('click', verifyForm);
eyes.forEach((eye) => {
  eye.addEventListener('click', togglePassword);
});
