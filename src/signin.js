import { domElements } from '../common/domElements.js';
import * as validators from '../common/validators.js';

document.addEventListener('DOMContentLoaded', () => {
  const hasAccessToken = localStorage.getItem('accessToken');

  if (hasAccessToken) {
    window.location.href = '/folder.html';
  }

  domElements.emailInput.addEventListener('focusout', validators.validateEmail);
  domElements.passwordInput.addEventListener('focusout', validators.validatePassword);
  domElements.signInBtn.addEventListener('click', validators.performSignIn);
  domElements.eyeBtn[0].addEventListener('click', () => {
    validators.showAndHidePassword(0);
  });
});
