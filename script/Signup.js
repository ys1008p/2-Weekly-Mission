import {signUpInputFocusOutCheckHandler, testSignUpButtonClickCheckHandler, testSignUpInputCheckHandler, showIconClickHandler} from './SignUtility.js';

const inputFormInputs = document.querySelectorAll(`.input-form__input`);
for(const inputFormInput of inputFormInputs){
    inputFormInput.addEventListener('focusout', signUpInputFocusOutCheckHandler);
    inputFormInput.addEventListener('keydown', testSignUpInputCheckHandler);
}

const showIcons = document.querySelectorAll(`.input-form__show-icon`);
for(const showIcon of showIcons){
    showIcon.addEventListener('click', showIconClickHandler);
}

const loginButton = document.querySelector(`.action-button_signup`);
loginButton.addEventListener('click', testSignUpButtonClickCheckHandler);