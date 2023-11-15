const showPassword = (tag) => {
  const eyeIcon = tag;
  const passwordInput = tag.parentNode.children[1];
  eyeIcon.classList.toggle('eye-off');
  eyeIcon.classList.toggle('eye-on');
  if(eyeIcon.classList.contains('eye-off')){
    eyeIcon.src = './assets/icon/eye-on.svg';
    passwordInput.type = 'text';
    eyeIcon.alter = 'eye-on';
  }
  if(eyeIcon.classList.contains('eye-on')){
    eyeIcon.src = './assets/icon/eye-off.svg';
    passwordInput.type = 'password';
    eyeIcon.alter = 'eye-off';
  }
}

export default showPassword;
