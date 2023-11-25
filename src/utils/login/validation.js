import { REGEX } from '../../store/auth';

export const validateEmail = (email = '') => {
  return email ? REGEX.email.test(email) : false;
};

export const validatePassword = (password = '') => {
  return password ? REGEX.password.test(password) : false;
};
