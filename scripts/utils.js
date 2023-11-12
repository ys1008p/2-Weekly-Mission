import users from "../data/users.js";

export function isEmptyString(value) {
  return !value?.trim();
}

export function isEmailValid(email) {
  const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return regex.test(email);
}

export function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return password.trim().length >= 8 && regex.test(password);
}

export function isExistsEmail(email) {
  return users.some((user) => user.email === email);
}
