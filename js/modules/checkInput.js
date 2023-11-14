const EMAIL_REGEXP =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const PASSWORD_REGEXP = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const isEmpty = (input) => !input?.length;

export const isValidEmail = (email) => EMAIL_REGEXP.test(email);

export const isValidPassword = (password) => PASSWORD_REGEXP.test(password);

export const isEmailExist = (email) => email === 'test@codeit.com';

export const isPasswordCorrect = (password) => password === 'codeit101';

export const isAllObjectValueTrue = (object) =>
  Object.values(object).every((value) => value);
