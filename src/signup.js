import { domElements } from '../common/domElements.js';
import * as validators from '../common/validators.js';

document.addEventListener('DOMContentLoaded', () => {
  const hasAccessToken = localStorage.getItem('accessToken');

  if (hasAccessToken) {
    window.location.href = '/folder.html';
  }

  domElements.emailInput.addEventListener('focusout', validators.validateEmail);
  domElements.passwordInput.addEventListener('focusout', validators.validatePassword);
  domElements.checkPasswordInput.addEventListener('focusout', validators.checkSamePassword);
  domElements.signUpBtn.addEventListener('click', validators.performSignUp);
  document.body.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      domElements.signUpBtn.click();
    }
  });
  for (let i = 0; i < domElements.eyeBtn.length; i++) {
    domElements.eyeBtn[i].addEventListener('click', () => {
      validators.showAndHidePassword(i);
    });
  }
});
