export function isValidEmail(email) {
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regEmail.test(email);
}

export function isValidPassword(password) {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regPassword.test(password);
}