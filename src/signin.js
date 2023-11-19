import { domElements } from '../common/domElements.js';
import * as validators from '../common/validators.js';

document.addEventListener('DOMContentLoaded', () => {
  domElements.emailInput.addEventListener('focusout', validators.validateEmail);
  domElements.passwordInput.addEventListener('focusout', validators.validatePassword);
  domElements.signInBtn.addEventListener('mousedown', validators.performSignIn);
  domElements.eyeBtn[0].addEventListener('click', () => {
    validators.showAndHidePassword(0);
  });
});
