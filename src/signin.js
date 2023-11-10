import { variable } from '../common/variables.js';
import * as functions from '../common/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  variable.emailInput.addEventListener('focusout', functions.validateEmail);
  variable.passwordInput.addEventListener('focusout', functions.validatePassword);
  variable.signInBtn.addEventListener('click', functions.performLogin);
  variable.eyeBtn.addEventListener('click', functions.showAndHidePassword);
});
