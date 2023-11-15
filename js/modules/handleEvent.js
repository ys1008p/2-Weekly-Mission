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
