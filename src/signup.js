import { variable } from '../common/variables.js';
import * as functions from '../common/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  variable.emailInput.addEventListener('focusout', functions.validateEmail);
  variable.passwordInput.addEventListener('focusout', functions.validatePassword);
  variable.checkPasswordInput.addEventListener('focusout', functions.checkSamePassword);
  variable.signInBtn.addEventListener('click', functions.performLogin);
  for (let i = 0; i < variable.eyeBtn.length; i++) {
    variable.eyeBtn[i].addEventListener('click', () => {
      functions.showAndHidePassword(i);
    });
  }
});
