const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');
const eyeToggleButton = document.querySelectorAll('.eye-button');
const form = document.querySelector('form');
const emailErrorTag = document.querySelector('#emailError');
const passwordErrorTag = document.querySelector('#passwordError');
const passwordErrorConfirmTag = document.querySelector('#passwordConfirmError');

export{
  emailInput,
  passwordInput,
  passwordConfirmInput,
  eyeToggleButton,
  form,
  emailErrorTag,
  passwordErrorTag,
  passwordErrorConfirmTag
};