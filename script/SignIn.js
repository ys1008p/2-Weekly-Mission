import {signInInputFocusOutCheckHandler, testSignInButtonClickCheckHandler, showIconClickHandler} from './SignUtility.js';

const inputFormInputs = document.querySelectorAll(`.input-form__input`);
for(const inputFormInput of inputFormInputs){
    inputFormInput.addEventListener('focusout', signInInputFocusOutCheckHandler);
}

const showIcons = document.querySelectorAll(`.input-form__show-icon`);
for(const showIcon of showIcons){
    showIcon.addEventListener('click', showIconClickHandler);
}

const loginButton = document.querySelector(`.action-button_signin`);
loginButton.addEventListener('click', testSignInButtonClickCheckHandler);