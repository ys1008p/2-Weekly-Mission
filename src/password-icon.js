export { toggleEyeIcon };

function toggleEyeIcon(e) {
  const passwordField = e.target.previousElementSibling;
  const type =
    passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);

  if (passwordField.getAttribute('type') === 'password') {
    e.target.src = '../images/sign/icon/blindpassword.svg';
  } else {
    e.target.src = '../images/sign/icon/showpassword.svg';
  }
}
