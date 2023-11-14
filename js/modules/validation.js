const EMAIL_REGEXP =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export const isEmpty = (input) => !input?.length;

export const isValidEmail = (email) => EMAIL_REGEXP.test(email);

export const verifyEmail = (email) => email === 'test@codeit.com';

export const verifyPassword = (password) => password === 'codeit101';
