import { variable } from '../common/variables.js';
import * as functions from '../common/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  variable.emailInput.addEventListener('focusout', functions.validateEmail);
  variable.passwordInput.addEventListener('focusout', functions.validatePassword);
  variable.signInBtn.addEventListener('click', functions.performSignIn);
  variable.eyeBtn[0].addEventListener('click', () => {
    functions.showAndHidePassword(0);
  });
});
