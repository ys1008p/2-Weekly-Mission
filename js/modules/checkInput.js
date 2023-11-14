const EMAIL_REGEXP =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export const isEmpty = (input) => !input?.length;

export const isValidEmail = (email) => EMAIL_REGEXP.test(email);

export const verifyEmail = (email) => email === 'test@codeit.com';

export const verifyPassword = (password) => password === 'codeit101';

export const isAllObjectValueTrue = (object) =>
  Object.values(object).every((value) => value);

export const toggleInputVisibility = (eyeBtn, inputElement) => {
  if (eyeBtn.classList.contains('hide-password')) {
    eyeBtn.classList.remove('hide-password');
    eyeBtn.src = './images/icon/eye-on.svg';
    inputElement.type = 'text';
  } else {
    eyeBtn.classList.add('hide-password');
    eyeBtn.src = './images/icon/eye-off.svg';
    inputElement.type = 'password';
  }
};
